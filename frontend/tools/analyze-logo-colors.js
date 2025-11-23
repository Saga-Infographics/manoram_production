import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function analyze(filePath, k = 5, resize = 100) {
  const img = sharp(filePath).resize(resize, resize, { fit: 'inside' }).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const pixels = [];
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = info.channels > 3 ? data[i + 3] / 255 : 1;
    // ignore fully transparent
    if (a > 0.01) pixels.push([Math.round(r * a), Math.round(g * a), Math.round(b * a)]);
  }

  if (!pixels.length) throw new Error('No opaque pixels found');

  // k-means clustering
  function dist(a, b) {
    return (a[0]-b[0])**2 + (a[1]-b[1])**2 + (a[2]-b[2])**2;
  }

  // initialize centroids by sampling
  const centroids = [];
  const used = new Set();
  while (centroids.length < k) {
    const idx = Math.floor(Math.random() * pixels.length);
    if (!used.has(idx)) { used.add(idx); centroids.push(pixels[idx].slice()); }
  }

  let assignments = new Array(pixels.length).fill(-1);
  for (let iter = 0; iter < 15; iter++) {
    let changed = 0;
    // assign
    for (let i = 0; i < pixels.length; i++) {
      const p = pixels[i];
      let best = 0; let bestD = dist(p, centroids[0]);
      for (let c = 1; c < centroids.length; c++) {
        const d = dist(p, centroids[c]);
        if (d < bestD) { bestD = d; best = c; }
      }
      if (assignments[i] !== best) { assignments[i] = best; changed++; }
    }
    // recompute
    const sums = Array.from({length:k}, () => [0,0,0,0]);
    for (let i = 0; i < pixels.length; i++) {
      const a = assignments[i];
      const p = pixels[i];
      sums[a][0] += p[0]; sums[a][1] += p[1]; sums[a][2] += p[2]; sums[a][3] += 1;
    }
    for (let c = 0; c < k; c++) {
      if (sums[c][3] > 0) {
        centroids[c][0] = Math.round(sums[c][0] / sums[c][3]);
        centroids[c][1] = Math.round(sums[c][1] / sums[c][3]);
        centroids[c][2] = Math.round(sums[c][2] / sums[c][3]);
      }
    }
    if (changed === 0) break;
  }

  // count sizes
  const counts = new Array(k).fill(0);
  for (let i = 0; i < assignments.length; i++) counts[assignments[i]]++;

  const results = centroids.map((c, idx) => ({
    rgb: c,
    hex: '#' + c.map(v => v.toString(16).padStart(2,'0')).join(''),
    count: counts[idx],
    percentage: Math.round((counts[idx]/pixels.length)*1000)/10
  }));

  results.sort((a,b) => b.count - a.count);
  return results;
}

(async () => {
  try {
    const file = path.join(__dirname, '..', 'public', 'logo.png');
    const res = await analyze(file, 6, 100);
    console.log(JSON.stringify({file: file, colors: res}, null, 2));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();
