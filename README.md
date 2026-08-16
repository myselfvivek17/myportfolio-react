# Portfolio — Vivek Arcot

Personal portfolio site. Single page: intro, about, skills, experience, education, and a projects grid.

**Live:** https://myportfolio-react-beta.vercel.app/

---

## Stack

- **React 18** — ejected Create React App (webpack 5 + Babel live in `config/` and `scripts/`, not `react-scripts`)
- **Framer Motion** — scroll progress bar, staggered card reveals, back-to-top button
- **Plain CSS** — one stylesheet per component, design tokens as CSS custom properties in `App.css`

No UI framework and no CSS-in-JS. Colours, fonts, radii and spacing are all variables (`--color-accent`, `--font-display`, …) defined once at the top of `App.css`.

## Run it

```bash
npm install
npm start      # dev server on http://localhost:3000
npm run build  # production bundle into build/
npm test       # jest, watch mode
```

Requires Node 16+.

## Layout

```
src/
├── App.js            page shell — sections, scroll progress, back-to-top
├── App.css           design tokens (colours, fonts, spacing, radii)
├── Header.js         nav
├── Page1.js          hero — TextArea (copy) + Image (portrait)
├── Page2.js          about — Skills, Experience, Education, AboutMe
├── Projects.js       project cards + "View All Projects"
├── Footer*.js        contact links
└── assets/           screenshots and icons
```

`config/` and `scripts/` are the ejected CRA build setup. You rarely need to touch them.

## Adding a project

Cards are plain objects in `src/Projects.js`. The first four render immediately; the rest sit behind the **View All Projects** button in `moreData`.

```js
{
  id: 15,
  header: 'Project Name',
  repo: `${GH}/project-name`,          // optional — turns the title into a link
  cover: 'project-name --serve',       // used when there's no screenshot
  tech: ['Go', 'SQLite'],
  text: 'One or two sentences on what it does.',
}
```

To use a real screenshot instead, `import` it at the top of the file and set `imageUrl` to it — then `cover` is ignored. With no `imageUrl`, the card renders a gradient tile showing `cover` as a terminal line, so a project with no presentable UI still gets a card that fits the grid.

Keep `cover` a command the project actually accepts. It's on the tile as `$ …`, so a made-up flag reads as a real one.

## Deploying

Hosted on **Vercel**, built from `main`. Build settings live in the Vercel dashboard; there's no `vercel.json` in the repo.

One thing to leave alone: `"homepage": "."` in `package.json`. An absolute `homepage` makes the bundle load from the wrong path on Vercel and the page renders blank.

The `predeploy` / `deploy` scripts are left over from the old GitHub Pages setup and aren't part of the current deploy.
