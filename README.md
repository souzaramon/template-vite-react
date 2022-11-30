![master](https://github.com/souzaramon/template-vite-react/actions/workflows/cd.yml/badge.svg)

<div align="center">
<img src="https://vitejs.dev/logo-with-shadow.png" height="120">
</div>

# 🫰 template-vite-react

A simple template of [React + Tailwind](https://souzaramon.github.io/template-vite-react/)

### Scripts

- `yarn start`
  - using vite
- `yarn build`
  - using vite
- `yarn lint`
  - using eslint
- `yarn ladle`
  - using [ladle](https://ladle.dev/)
- `yarn test:unit`
  - using [vitest](https://vitest.dev/) and [testing-library](https://testing-library.com/)
- `yarn test:e2e`
  - using [playwright](https://playwright.dev/)

## Setup

- Click on `use this template`
- Create a new repo with a really cool name like `supercool-frontend`
- Go to:
  - Settings > Pages > Branch
  - set **gh-pages**
- Update vite.config.ts
  ```diff
  - base: '/template-vite-react/',
  + base: '/supercool-frontend/',
  ```
- You will probably want to update this files as well `README.md`, `LICENSE`, `index.html`, `package.json`
