import fetch from 'node-fetch'
import { signJWT } from '@utils/jsonwebtoken'
import { getInput, setFailed, setOutput } from '@actions/core'
import { ITokenForGitHubApp } from './interfaces'

const expiresMinutes = Number(getInput('expiresMinutes'))

export async function generateTokenGitHubApp(
  appId: number,
  installationId: number,
  privateKey: string,
): Promise<string> {
  const payload = {
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + expiresMinutes * 60,
    iss: appId,
  }

  const pem = privateKey.replace(/\\n/g, '\n')

  const jwt = signJWT(payload, pem, { algorithm: 'RS256' })

  const response = await fetch(
    `https://api.github.com/app/installations/${installationId}/access_tokens`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwt}`,
        Accept: 'application/vnd.github.v3+json',
      },
    },
  )

  const data = (await response.json()) as ITokenForGitHubApp

  if (response.status != 201) {
    setFailed(
      `Unable to generate token for GitHub App with installation id ${installationId}.`,
    )
  }

  setOutput('GitHub App Token', data.token)

  return data.token
}
