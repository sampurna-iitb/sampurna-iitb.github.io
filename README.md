# Sampurna (GitHub Pages)

This repo hosts the Sampurna website (GitHub Pages).

## Structure
- `index.html` — main site
- `comfort/index.html` — COMFORT page (opens in a new tab from the homepage)
- `assets/style.css` — theme + layout
- `assets/script.js` — theme toggle + minor utilities

## Deploy (GitHub Pages)
1. Push to `main` branch.
2. Repo → **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` / `(root)`
5. Save

Your site will be available at:
- `https://<username>.github.io/<repo>/`
or if repo name is `<username>.github.io`, then:
- `https://<username>.github.io/`

## Add your links
Edit `comfort/index.html`:
- Replace `href="#"` under **Slides** and **Resources** with real URLs (Drive, PDFs, etc.)

Tip: keep PDFs in the repo under `comfort/files/` if you want them versioned.
