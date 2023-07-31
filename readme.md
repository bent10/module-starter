<!-- Make sure you overwrite all the contents of this readme file with yours on your real project! -->

<!-- [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bent10/module-starter/Release?style=flat-square)](https://github.com/bent10/module-starter/actions/workflows/release.yml) -->

# Module Starter

Module Starter is a bare-bones template designed for modern web projects. It provides a lightweight starting point for developers to create web modules using the latest syntax and output to any JavaScript format. The template offers various features and automation tools to streamline the development process.

## Features

- **Fast and efficient:** Designed to provide a quick and efficient starting point for your web projects.
- **Latest syntax support:** Write your code using the latest JavaScript syntax and features.
- **Flexible output:** Allows developers to output their code in any JavaScript format that suits their project requirements.
- **Auto updates dependencies:** Automatically updates dependencies, keeping the project up-to-date with the latest versions.
- **GitHub auto releases:** Automated release process after each push, making it easy to manage project versions.
- **NPM auto publish:** Automatically publishes the project to NPM after each push, simplifying the package distribution process.
- **Auto updates changelog:** Automates the process of updating the changelog file, making it easier to track project changes.

## Install

To start a new project using Module Starter, you can either **click the "Use this template"** button on GitHub or manually clone the repository. After cloning, navigate to the project directory and install the required dependencies using the following command:

```bash
npm i
```

Alternatively, you can use the `npx degit` command to clone the template into a new project directory and install the dependencies:

```bash
npx degit "bent10/module-starter" my-project
cd my-project
npm i
```

## Available Commands

Use the following commands in the project directory:

- `npm start`: Alias for `npm run dev`.
- `npm run dev`: Runs the development build and watches for changes.
- `npm run build`: Builds the project using Vite and runs the type checking.
- `npm test`: Runs tests with the `vitest` command, using the UI.
- `npm run coverage`: Runs tests with the `vitest` command and generates code coverage.
- `npm run types`: Runs the TypeScript compiler to emit declaration files (`*.d.ts`) to the `./dist` directory. Resolves TypeScript path aliases using `resolve-tspaths`.
- `npm run lint`: Runs the TypeScript compiler with `--noEmit` flag to perform type checking and runs ESLint to lint the project.
- `npm run format`: Runs Prettier to format the project files.

Feel free to use these commands according to your development needs.

## Recipes

- [Automated dependency updates](.github/recipes/setup-renovate.md) – Explains how to set up automated dependency updates using Renovate.
- [Release automation](.github/recipes/release-automation.md) - Guides you on automating the release process of your project.

## Related

- [monorepo-starter](https://github.com/bent10/monorepo-starter) – A monorepo starter template using native NPM workspace
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

A project by [Stilearning](https://stilearning.com) &copy; 2021-2023.
