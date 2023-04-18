export interface IGitHubRepository {
  generateToken: (installationId: number) => Promise<string>
}
