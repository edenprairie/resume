# Jun Wang's Resume

Resume website deployed to [resume.junwang.us](https://resume.junwang.us) via GitHub Pages.

## Stack

- [Vite](https://vite.dev/) + React 18
- Content lives in `src/resume.jsx`
- Styling in `src/resume.css`
- Downloadable PDF generated from the site at `src/JunWangResume.pdf`

## Available Scripts

### `npm run dev`

Runs the app in development mode. Open http://localhost:5173 to view it.

### `npm run build`

Builds the app for production into the `dist` folder.

### `npm run preview`

Serves the production build locally.

## Deployment

Pushing to `master` triggers the GitHub Actions workflow (`.github/workflows/main.yml`),
which builds the site and deploys it to GitHub Pages at `resume.junwang.us`.
