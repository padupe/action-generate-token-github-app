# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.1.3](https://github.com/padupe/action-generate-token-github-app/releases/tag/1.1.3) - 2023-04-27

### What's Change?

Action has been adapted to be able to handle the PEM (Private Key) in its original format.

```
-----BEGIN RSA PRIVATE KEY-----
  3333333333333333333333333333333333333333333333333333333333333333
  5555555555555555555555555555555555555555555555555555555555555555
  4444444444444444444444444444444444444444444444444444444444444444
  7777777777777777777777777777777777777777777777777777777777777777
  3333333333333333333333333333333333333333333333333333333333333333
  8888888888888888888888888888888888888888888888888888888888888888
  2222222222222222222222222222222222222222222222222222222222222222
  9999999999999999999999999999999999999999999999999999999999999999
  QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
  PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
  nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
  mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
  llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
  jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
  iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
  hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
  gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
  dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
  eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
  cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  fffffffffffffffffffffffffffffffff
  -----END RSA PRIVATE KEY-----
```

- Added `formatPrivateKey` function to handle the responsibility of "formatting" the PEM;

- The `generateJWT` function is no longer responsible for performing this formatting.

New directory structure `src/utils`:

- `DIR src`
  - `DIR auth`
  - `DIR repositories`
  - `DIR service`
  - `DIR utils`
    - `formatPrivateKey.ts`
    - `generateJWT.ts`
    - `index.ts`

## [1.0.3 - Debug](https://github.com/padupe/action-generate-token-github-app/releases/tag/1.0.3) - 2023-04-18

### What's Change?

Remove "Debug".

## [1.0.2 - Output Name](https://github.com/padupe/action-generate-token-github-app/releases/tag/1.0.2) - 2023-04-18

### What's Change?

- Output Name
  - **It Was:**
    - `token`.
  - **Became:**
    - `gitHubToken`.

## [1.0.1 - Change Strategy](https://github.com/padupe/action-generate-token-github-app/releases/tag/1.0.1) - 2023-04-18

### What's Change?

- Change Strategey
  - **It Was:**
    - `node-fech` was used to perform the request on the GitHub API to generate a token.
  - **New Strategy:**
    - Use of the [Octokit](https://www.npmjs.com/package/@octokit/core) library for requests with the GitHub API;
    - Segmentation of the code, emphasizing good practices.

## [1.0.0 - First Version](https://github.com/padupe/action-generate-token-github-app/releases/tag/1.0.0) - 2023-04-17

### Added

- Action's initial structure
    - `DIR .github`
      - `pull_request_template.md`
    - `DIR docss`
      - `DIR assets`
        - `flow.png`
      - `README.pt-BR.md`
    - `DIR dist`
      - `index.js`
      - `index.js.map`
      - `license.txt`
      - `sourcemap-register.js`
    - `DIR src`
      - `DIR service`
        - `generateTokenGitHubApp.ts`
        - `index.ts`
        - `interfaces.ts`
      - `DIR utils`
        - `index.ts`
        - `jsonwebtoken.ts`
      - `index.ts`
    - `.editorconfig`
    - `.eslintignore`
    - `.eslintrc.js`
    - `.gitignore`
    - `.prettierignore`
    - `.prettierrc`
    - `.swcrc`
    - `action.yaml`
    - `CHANGELOG.md`
    - `CODEOWNERS`
    - `CONTRIBUTING.md`
    - `package.json`
    - `README.md`
    - `tsconfig.json`
    - `yarn.lock`
