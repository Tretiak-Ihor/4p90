export const getUrlFromRequest = ({ req }) => {
  const host = req ? req.headers.host : ''
  const protocol = host.startsWith('localhost') || host.startsWith('127.0.0.1') ? 'http://' : 'https://'

  return `${protocol}${host}`
}

export const getApiUrlFromRequest = ({ req, route }) => {
  const url = getUrlFromRequest({ req })

  return `${url}/api/${route}`
}
