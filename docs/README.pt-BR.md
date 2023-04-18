# action-generate-token-github-app

## Índice

- [Descrição](#descrição)
- [Fluxo](#fluxo)
- [Requisitos](#requisitos)
  - [_Secrets_](#secrets)
- [Uso](#uso)
  - [Uso "separado"](#uso-separado)
  - [Uso geral](#uso-geral)
- [_Output_](#output)
- [Contribua com o Projeto](#contribua-com-o-projeto)

## Descrição

_Action_ que gera Token para ser consumido nas interações via [API do GitHub](https://docs.github.com/pt/rest?apiVersion=2022-11-28).

Útil para organizações que possuem [GitHub App's](https://docs.github.com/en/apps).

## Fluxo

![](./assets/flow.png)

## Requisitos

### _Secrets_

A _secret_ `CREDENTIALS_GITHUB_APP_PRIVATE_KEY` deve ser informada no seguinte formato (sem quebra de linhas):

`-----BEGIN RSA PRIVATE KEY-----\n ... \n-----END RSA PRIVATE KEY-----`

## Uso

### Uso "separado"

> Por mais que não faça sentido, caso o usuário deseje um "fluxo separado" para obter um Token.<br>
> O fluxo seria parecido com o exibido abaixo.

1. Crie o diretório `.github/workflows` na "raiz" do seu projeto;

2. Crie o arquivo `generate-token-github-app.yaml` com o conteúdo semelhante ao apresentado a seguir:

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
        uses: padupe/action-generate-token-github-app@1.0.1
        with:
          appId: ${{ secrets.CREDENTIALS_GITHUB_APP_ID }}
          installationId: ${{ secrets.CREDENTIALS_GITHUB_APP_INSTALLATION_ID }}
          privateKey: ${{ secrets.CREDENTIALS_GITHUB_APP_PRIVATE_KEY }}
```

### Uso geral

O uso mais adequado (e que faz mais sentido), é implementando esta _action_ como uma etapa de um fluxo:

```yaml
[...]
      - name: Generate Token from GitHub App
        id: generate-token-github-app
        uses: padupe/action-generate-token-github-app@1.0.1
        with:
          appId: ${{ secrets.CREDENTIALS_GITHUB_APP_ID }}
          installationId: ${{ secrets.CREDENTIALS_GITHUB_APP_INSTALLATION_ID }}
          privateKey: ${{ secrets.CREDENTIALS_GITHUB_APP_PRIVATE_KEY }}
[...]
```

## _Output_

Token para ser utilizado nas interações via [API do GitHub](https://docs.github.com/pt/rest?apiVersion=2022-11-28).

## Contribua com o Projeto

Confira nosso guia para [CONTRIBUIÇÃO](../CONTRIBUTING.md) na língua inglesa.
