import { getInput } from '@actions/core'
import { generateJWT } from '../utils/generateJWT'
import { createOctokitClient } from './octokit'

const appId = Number(getInput('appId'))
const privateKey = getInput('privateKey')

const tokenJWT = generateJWT(appId, privateKey)

export const auth = createOctokitClient(tokenJWT)
