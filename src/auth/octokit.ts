import { Octokit } from '@octokit/core'

export function createOctokitClient(token: string): Octokit {
  console.log('Chamou "createOctokitClient"')
  console.log(`createOctokitclient -> token: ${token}`)
  const octokit = new Octokit({
    auth: token,
  })

  console.log('Concluir "createOctokitClient".')
  return octokit
}
