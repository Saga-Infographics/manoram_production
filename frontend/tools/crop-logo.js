// Usage: node tools/crop-logo.js
// Requires `sharp` package: run `npm install sharp` in the `frontend` folder.

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, '..', 'public', 'logo.png');
const output = path.join(__dirname, '..', 'public', 'logo-circle.png');

if (!fs.existsSync(input)) {
  console.error('Input file not found:', input);
  process.exit(1);
}

(async () => {
  try {
    const size = 512; // output size
    const svgMask = Buffer.from(
      `<svg width="${size}" height="${size}"><circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#fff" /></svg>`
    );

    await sharp(input)
      .resize(size, size, { fit: 'cover', position: 'centre' })
      .composite([{ input: svgMask, blend: 'dest-in' }])
      .png({ quality: 90 })
      .toFile(output);

    console.log('Created circular logo:', output);
  } catch (err) {
    console.error('Error creating circular logo:', err);
    process.exit(1);
  }
})();
