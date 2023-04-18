import { getInput } from '@actions/core'
import { generateJWT } from '../utils/generateJWT'
import { createOctokitClient } from './octokit'

const appId = Number(getInput('appId'))
const privateKey = getInput('privateKey')

console.log(`auth.ts -> appId: ${appId}`)
console.log(`auth.ts -> privateKey: ${privateKey}`)

const tokenJWT = generateJWT(appId, privateKey)

console.log(`auth.ts -> tokenJWT: ${tokenJWT}`)

export const auth = createOctokitClient(tokenJWT)
