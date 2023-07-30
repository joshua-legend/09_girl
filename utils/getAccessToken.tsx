import axios from 'axios'

const getAccessToken = async (code, state) => {
  const clientId = `${process.env.NAVER_CLIENT_ID}`
  const clientSecret = `${process.env.NAVER_CLIENT_SECRET}`
  const redirectURI = 'http://localhost:3001/test'

  try {
    const response = await axios({
      method: 'post',
      url: 'https://nid.naver.com/oauth2.0/token',
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        state: state,
        code: code,
        redirect_uri: redirectURI,
      },
    })

    return response.data.access_token
  } catch (error) {
    console.error(`Failed to get access token: ${error}`)
    return null
  }
}
