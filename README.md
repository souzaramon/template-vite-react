![master](https://github.com/souzaramon/template-vite-react/actions/workflows/cd.yml/badge.svg)

# template-vite-react
A mininal setup of React + TailWind with a good setup of tests and a ci/cd ready to deploy with gh-pages

## Features
- end-to-end tests with [playwright](https://playwright.dev/)
- unit tests with [vitest](https://vitest.dev/) and [testing-library](https://testing-library.com/)
- style system with [tailwindcss](https://tailwindcss.com/)
- decent structure ci & cd configuration

## Getting started
- Click on `use this template`
- Create a new repo with a really cool name like `supercool-frontend`
- Go to Settings > Pages > Branch
  - and set **gh-pages**
- Update vite.config.ts
  ```diff
  - base: '/template-vite-react/',
  + base: '/supercool-frontend/',
  ```
- Update package.json
  ```diff
  - "name": "template-vite-react",
  + "name": "supercool-frontend",
  ```
- You will probably want to update this files as well `README.md`, `LICENSE`, `index.html`
