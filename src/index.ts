import { getInput, info, setFailed } from '@actions/core'
import { generateTokenGitHubApp } from './service/generateTokenGitHubApp'

const appId = Number(getInput('appId'))
const installationId = Number(getInput('installationId'))

async function run(): Promise<void> {
  try {
    info('Start Proccess!')
    if (appId) {
      await generateTokenGitHubApp(installationId)
    } else {
      setFailed('"appID" is required!')
    }
  } catch (error) {
    setFailed(`Error at action: ${error}`)
  }
}

void run()
