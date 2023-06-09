import { getInput } from '@actions/core'
import { sign } from 'jsonwebtoken'
import { formatPrivateKey } from './formatPrivateKey'

const expiresMinutes = Number(getInput('expiresMinutes'))

export function generateJWT(appId: number, privateKey: string) {
  const payload = {
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + expiresMinutes * 60,
    iss: appId,
  }

  const pem = formatPrivateKey(privateKey)

  const jwt = sign(payload, pem, { algorithm: 'RS256' })

  return jwt
}
