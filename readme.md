<!-- Make sure you overwrite all the contents of this readme file with yours on your real project! -->

<!-- [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bent10/module-starter/Release?style=flat-square)](https://github.com/bent10/module-starter/actions/workflows/release.yml) -->

# Module starter

A minimalist template for modern web development.

## Features

- **Quick start:** Efficient starting point for Web and Node.js projects
- **Modern syntax:** Supports the latest JavaScript features
- **Flexible output:** Output in any JavaScript format
- **Automatic updates:** Keeps your dependencies up to date. See [recipes](#recipes) for more info
- **Automated releases:** Automatically handles GitHub releases, NPM publishing, and changelog updates. Check out [recipes](#recipes) for details

## Installation

To start a new project with this template, use one of the following methods:

### Clone from GitHub

Click the "Use this template" button above or clone the repository. Then, install dependencies:

```bash
npm i
```

### Use `npx degit`

Clone the template and install dependencies:

```bash
npx degit "bent10/module-starter" my-project
cd my-project
npm i
```

## Commands

- `npm start`: Alias for `npm run dev`
- `npm run dev`: Starts development mode and watches for changes
- `npm run build`: Builds the project and checks types
- `npm test`: Runs tests with Vitest
- `npm run coverage`: Generates test coverage reports
- `npm run types`: Generates TypeScript declaration files
- `npm run lint`: Checks types and lints the project
- `npm run format`: Formats code using Prettier

Use these commands to manage your development workflow.

## Recipes

- [Automated dependency updates](.github/recipes/setup-renovate.md) – Set up automated updates with Renovate
- [Release automation](.github/recipes/release-automation.md) – Automate your project's release process

## Related

- [monorepo-starter](https://github.com/bent10/monorepo-starter) – A starter template for a monorepo using NPM workspaces
- [doogu](https://github.com/bent10/doogu) – A wrapper around modern JavaScript tools

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

## License

![GitHub](https://img.shields.io/github/license/bent10/module-starter)

A project by [Stilearning](https://stilearning.com) &copy; 2021-2024.
