import { getInput } from '@actions/core'
import { sign } from 'jsonwebtoken'

const expiresMinutes = Number(getInput('expiresMinutes'))

export function generateJWT(appId: number, privateKey: string) {
  console.log('Chamou "generateJWT"')
  const payload = {
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + expiresMinutes * 60,
    iss: appId,
  }

  console.log(`generateJWT -> appId: ${appId}`)
  console.log(`generateJWT -> privateKey: ${privateKey}`)

  const pem = privateKey.replace(/\\n/g, '\n')

  const jwt = sign(payload, pem, { algorithm: 'RS256' })

  console.log(`generateJWT -> jwt gerado: ${jwt}`)

  return jwt
}
