[&laquo; Back to recipes](https://github.com/bent10/module-starter#recipes)

# Release automation

As our repo gets bigger, handling the release process can be a pain point and time consuming. We're going to simplify the [GitHub releases](https://help.github.com/articles/about-releases) process using GitHub action, which will take care of the releases when we do `git push` on the repo.

- [Features](#features)
- [Workflow](#workflow)
  - [Environment Variables](#environment-variables)
  - [Release configuration](#release-configuration)
- [Related](#related)

## Features

- Analyze commits with [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
- Generate changelog content with [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) then update `changelog.md` file
- Commit release assets to the repository
- Publish [GitHub releases](https://help.github.com/articles/about-releases)
- Publish NPM packages

## Workflow

The [`release`](../workflows/release.yml) workflow will kick in as soon as changes land on branches `main`, `next`, `next-major`, `beta`, `alpha`, and `*.x`. Then running the tasks to build and releases. Below are the steps you have to do:

### Environment Variables

To run this workflow, you will need to add the following [environment variables](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) to your GitHub repository:

`GH_TOKEN`

Copy and paste your [GitHub personal access token](https://github.com/settings/tokens) (with ‘repo’ scope) in the **value** field.

`NPM_TOKEN`

Copy and paste your [NPM token](https://docs.npmjs.com/about-access-tokens) in the **value** field.

### Release configuration

After you have added the environment variables, you just need to add the following configuration into your `package.json` file:

```json
{
  "release": {
    "branches": [
      "+([0-9])?(.{+([0-9]),x}).x",
      "main",
      "next",
      "next-major",
      {
        "name": "beta",
        "prerelease": true
      },
      {
        "name": "alpha",
        "prerelease": true
      }
    ],
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      [
        "@semantic-release/changelog",
        {
          "changelogFile": "changelog.md"
        }
      ],
      [
        "@semantic-release/git",
        {
          "assets": ["changelog.md"],
          "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }
      ],
      "@semantic-release/github",
      "@semantic-release/npm"
    ]
  }
}
```

And create `release.yml` file in the `.github/workflows/` folder, then copy the code below:

```yml
name: Release
on:
  repository_dispatch:
    # curl -v -H "Accept: application/vnd.github.everest-preview+json" -H "Authorization: token ${GH_TOKEN}"
    # https://api.github.com/repos/bent10/mymodule/dispatches -d '{ "event_type": "semantic-release" }'
    types: [semantic-release]
  push:
    branches:
      - main
      - next
      - next-major
      - beta
      - alpha
      - '*.x'

jobs:
  release:
    name: Releasing
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 14.17
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm test

      - name: Installing release dependencies
        run: |
          npm i -g semantic-release
          npm i -g @semantic-release/changelog
          npm i -g @semantic-release/git
      - name: Semantic release
        env:
          GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: semantic-release
```

## Related

For more detailed configuration, below are the best place to go:

- [semantic-release](https://github.com/semantic-release/semantic-release)
- [@semantic-release/error](https://github.com/semantic-release/error)
- [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer)
- [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator)
- [@semantic-release/changelog](https://github.com/semantic-release/changelog)
- [@semantic-release/git](https://github.com/semantic-release/git)
- [@semantic-release/github](https://github.com/semantic-release/github)
- [@semantic-release/npm](https://github.com/semantic-release/npm)
