import { Octokit } from '@octokit/core'
import { IGitHubRepository } from './IGitHubRepository'
import { setFailed } from '@actions/core'
import { auth } from '../auth/auth'

export class GitHubRepository implements IGitHubRepository {
  private readonly repository: Octokit

  constructor() {
    this.repository = auth
  }

  async generateToken(installationId: number): Promise<string> {
    const token = await this.repository.request(
      'POST /app/installations/{installation_id}/access_tokens',
      {
        installation_id: installationId,
      },
    )

    if (token.status !== 201) {
      setFailed(
        `Error generate token for GitHub App with installatioId: ${installationId}`,
      )
    }

    return token.data.token
  }
}
