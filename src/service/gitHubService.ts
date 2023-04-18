import { setOutput } from '@actions/core'
import { GitHubRepository } from '../repositories/GitHubRepository'

const gitHubRepository = new GitHubRepository()

export async function gitHubService(installatioId: number): Promise<any> {
  const token = await gitHubRepository.generateToken(installatioId)
  return setOutput('gitHubToken', token)
}
