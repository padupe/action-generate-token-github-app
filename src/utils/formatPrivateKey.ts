export function formatPrivateKey(PEM: string) {
  const initiaValue = PEM.replace(/\n/g, '\\n')
    .replace(/\s+/g, '')
    .replace('-----BEGINRSAPRIVATEKEY-----', '-----BEGIN RSA PRIVATE KEY-----')
    .replace('-----ENDRSAPRIVATEKEY-----', '-----END RSA PRIVATE KEY-----')

  const privateKeyFormat = initiaValue.replace(/\\n/g, '\n')

  return privateKeyFormat
}
