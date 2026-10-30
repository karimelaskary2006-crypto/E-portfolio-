# Karim El Askary — Engineering Portfolio

A bilingual (English/French), responsive static portfolio deployed with GitHub Pages.

## Live website

https://karimelaskary2006-crypto.github.io/E-portfolio-/

## Portfolio assets

The homepage uses the following files in `assets/`:

- `pfp linkedin.jpg` — portrait
- `CV final anglais.pdf` — updated English CV with clickable LinkedIn link
- `CV final francais.pdf` — French translation of the English CV, preserving the same one-page, two-column structure and clickable LinkedIn link
- `TIPEkarimelaskary.pdf` — TIPE research project
- `Elevation video karim .mov` — supplied video

To publish the updated CVs, replace the two existing CV PDFs in `assets/` with the updated files using these exact names. The GitHub Pages workflow deploys on every push to `main`.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` publishes the repository on pushes to `main`. In repository **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**.
