# action-generate-token-github-app

> Documentation available in Portuguese (pt-BR) [here](./docs/README-pt.md).

## Index

- [Description](#description)
- [Flow](#flow)
- [Requirements](#requirements)
  - [Secrets](#secrets)
- [Use](#use)
  - ["Separate" use](#separate-use)
  - [General use](#general-use)
- [Output](#output)
- [Contribute to the Project](#contribute-to-the-project)

## Description

Action that generates Token to be consumed in interactions via [GitHub API](https://docs.github.com/en/rest?apiVersion=2022-11-28).

Useful for organizations that own [GitHub App's](https://docs.github.com/en/apps).

## Flow

![](./docs/assets/flow.png)

## Requirements

### Secrets

Secret `CREDENTIALS_GITHUB_APP_PRIVATE_KEY` on PEM format:

```
-----BEGIN RSA PRIVATE KEY-----
  9999999999999999999999999999999999999999999999999999999999999999
  QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
  ....
  -----END RSA PRIVATE KEY-----
```

## Use

### "Separate" use

> As much as it doesn't make sense, in case the user wants a "separate flow" to obtain a Token.<br>
> The flow would look like the one shown below.

1. Create directory `.github/worfklows` in the root of your project;

2. Create file `generate-token-github-app.yaml` with content similar to the following:

```yaml
name: Generate Token from GitHub App
on:
  pull_request:
    types: [opened, reopened, synchronize]
    branches:
      - main

jobs:
  generate-token-github-app:
    runs-on: ubuntu-latest
    steps:
      - name: Generate Token from GitHub App
        uses: padupe/action-generate-token-github-app@1.1.3
        with:
          appId: ${{ secrets.CREDENTIALS_GITHUB_APP_ID }}
          installationId: ${{ secrets.CREDENTIALS_GITHUB_APP_INSTALLATION_ID }}
          privateKey: ${{ secrets.CREDENTIALS_GITHUB_APP_PRIVATE_KEY }}
```

### General use

The most appropriate use (and that makes the most sense), is implementing this action as a step in a flow:

```yaml
[...]
      - name: Generate Token from GitHub App
        id: generate-token-github-app
        uses: padupe/action-generate-token-github-app@1.1.3
        with:
          appId: ${{ secrets.CREDENTIALS_GITHUB_APP_ID }}
          installationId: ${{ secrets.CREDENTIALS_GITHUB_APP_INSTALLATION_ID }}
          privateKey: ${{ secrets.CREDENTIALS_GITHUB_APP_PRIVATE_KEY }}

      - name: Content Change Validation
        uses: padupe/action-content-change-validation@1.1.4
        with:
          directoryOrFile: .github/workflows
          gitHubToken: ${{ steps.generate-token-github-app.outputs.gitHubToken }}
[...]
```

## Output

`gitHubToken`: token to be used in interactions via [GitHub API](https://docs.github.com/en/rest?apiVersion=2022-11-28).

## Contribute to the Project

Check our [CONTRIBUTING](./CONTRIBUTING.md) guidelines.
