# Bhanuprakash Sunki — Portfolio

A single-page portfolio site built with plain HTML, CSS and JavaScript (no build step, no framework).

## Preview locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub, e.g. `portfolio`.
2. Push these files to it:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```

3. On GitHub: go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, pick branch `main` and folder `/ (root)`, then **Save**.
5. Your site will be live at:

   ```
   https://<your-username>.github.io/portfolio/
   ```

   (It can take a minute or two the first time.)

## Editing content

- All text content lives directly in `index.html` — sections are labelled with HTML comments (`<!-- HERO -->`, `<!-- PROJECTS -->`, etc.).
- Colours, fonts and spacing are defined as CSS variables at the top of `styles.css` under `:root`.
- The hero terminal's rotating role text is in `script.js` (`roles` array) — edit that list to change what it types out.

## Structure

```
.
├── index.html      # content & structure
├── styles.css      # design tokens + styles
├── script.js       # typewriter effect + nav highlight
└── README.md
```
