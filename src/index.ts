import { getInput, info, setFailed } from '@actions/core'
import { generateTokenGitHubApp } from '@service/generateTokenGitHubApp'

export const appId = Number(getInput('appId'))
export const installationId = Number(getInput('installationId'))
export const privateKey = getInput('privateKey')

async function run(): Promise<void> {
  try {
    info('Start Proccess!')
    if (appId) {
      await generateTokenGitHubApp(appId, installationId, privateKey)
    } else {
      setFailed('"appID" is required!')
    }
  } catch (error) {
    setFailed(`Error at action: ${error}`)
  }
}

void run()
