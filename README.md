# Karim El Askary — Engineering Portfolio

A bilingual (English/French), responsive static portfolio deployed with GitHub Pages.

## Live website

https://karimelaskary2006-crypto.github.io/E-portfolio-/

## Portfolio assets

The homepage expects the following files in `assets/`:

- `pfp linkedin.jpg` — portrait
- `CV-Karim-El-Askary-EN.pdf` — English CV (LinkedIn link is clickable)
- `CV-Karim-El-Askary-FR.pdf` — French translation of the English CV (same one-page, two-column structure; LinkedIn link is clickable)
- `TIPEkarimelaskary.pdf` — TIPE research project
- `Elevation video karim .mov` — supplied video

The two updated CV PDFs need to be uploaded to `assets/` with the exact filenames above. Once uploaded, the existing GitHub Pages workflow will deploy them automatically.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` publishes the repository on pushes to `main`. In repository **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**.
