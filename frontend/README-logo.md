How to create a circular trimmed logo (logo-circle.png)

1) Place the original image you attached as `frontend/public/logo.png`.

2) Install sharp (from the `frontend` folder):

```powershell
cd "C:\Users\Aayush Ghimire\OneDrive\Desktop\manoram_production\frontend"
npm install sharp
```

3) Run the crop script:

```powershell
node tools/crop-logo.js
```

This creates `frontend/public/logo-circle.png` — a 512×512 PNG with a circular alpha mask (transparent background).

Notes:
- If the logo is not centered in `logo.png`, open it in an image editor and center/crop it first, or adjust the script's `sharp().resize()` options.
- You can change output size by editing `tools/crop-logo.js` (variable `size`).
