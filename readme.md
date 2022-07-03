<!-- Make sure you overwrite all the contents of this readme file with yours on your real project! -->

<!-- [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bent10/module-starter/Release?style=flat-square)](https://github.com/bent10/module-starter/actions/workflows/release.yml) -->

![GitHub](https://img.shields.io/github/license/bent10/module-starter)

A bare-bones template for TypeScript module.

> This package is pure [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) and requires Node.js `^12.22 || ^14.17 || >=16.10.0`

- [Features](#features)
- [Install](#install)
- [Available commands](#available-commands)
- [Recipes](#recipes)
- [Related](#related)
- [Contributing](#contributing)
- [Thank you](#thank-you)

## Features

- Fast! `build` and `test` on top of [swc](https://swc.rs/)
- Write your code using the latest syntax
- Output to any JavaScript format, see [.swcrc](https://swc.rs/docs/configuration/swcrc)
- Auto updates dependencies
- GitHub auto releases _(after `git push`)_
- NPM auto publish _(after `git push`)_
- Auto updates changelog _(after `git push`)_

## Install

**Click the “Use this template” button.**

Alternatively, you can run:

```bash
git clone https://github.com/bent10/module-starter.git
# Go to the project directory
cd module-starter
# Install dependencies
npm i

# or
npx degit "bent10/module-starter" my-project
# Go to the project directory
cd my-project
# Install dependencies
npm i
```

## Available commands

```bash
npm start             # Run build and watch for changes
npm run lint          # Lint the project
npm run build         # Build the project
npm test              # Run tests
npm run coverage      # Run code coverage
```

## Recipes

- [Automated dependency updates](.github/recipes/setup-renovate.md)
- [Release automation](.github/recipes/release-automation.md)

## Related

- [monorepo-starter](https://github.com/bent10/monorepo-starter) – A monorepo starter template using native NPM workspace
- [doogu](https://github.com/bent10/doogu) – A wrapper around modern JavaScript tools

###

## Contributing

We 💛&nbsp; issues.

When committing, please conform to [the semantic-release commit standards](https://www.conventionalcommits.org/). Please install `commitizen` and the adapter globally, if you have not already.

```bash
npm i -g commitizen cz-conventional-changelog
```

Now you can use `git cz` or just `cz` instead of `git commit` when committing. You can also use `git-cz`, which is an alias for `cz`.

```bash
git add . && git cz
```

## Thank you

A project by [Stilearning](https://stilearning.com) &copy; 2021-2022.
