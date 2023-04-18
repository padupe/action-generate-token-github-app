import { gitHubService } from './gitHubService'

export async function generateTokenGitHubApp(
  installationId: number,
): Promise<any> {
  await gitHubService(installationId)
}
