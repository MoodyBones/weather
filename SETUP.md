# Set up

## node and yarn versions

Ensure you have the correct versions of node and nvm installed.

We recommend you to install [nvm](https://github.com/nvm-sh/nvm): `brew install nvm`

- If you have `nvm` installed, run `nvm use`

Otherwise:

- the version of `node` is specified in `.nvmrc` (our dependencies require a minimum of ^14.17.0 || ^16.11.0)
- the version of `yarn` is specified in `package.json`

## Dependencies

We use `yarn` as our package manager.

- Install dependencies with `yarn install`
  - This will also install `husky` as pre-commit hook

## Prettier

NOTE: we're actually currently moving more towards eslint and there's some issues with using both together
We use [Prettier](https://prettier.io/) as linter.

### Use Prettier plugin to format on save

- [VSCode instructions](https://scottsauber.com/2017/06/10/prettier-format-on-save-never-worry-about-formatting-javascript-again/)
- [IntelliJ IDEA Ultimate instructions](https://www.jetbrains.com/help/idea/prettier.html#ws_prettier_reformat_code)

### Use it in command line

- If not, a [**pre-commit hook (lint-staged)**](https://prettier.io/docs/en/precommit.html) on `git commit` will run it,
  but we recommend to use format on save to see when you are working on a file.

## Debugging

- Add [Chrome Vue.js Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) or [Firefox Vue.js Devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/) to find and inspect components
