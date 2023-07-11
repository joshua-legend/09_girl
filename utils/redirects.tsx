import PATH from '../constants/path'

export const redirectIfUnauthorized = () => {
  return {
    redirect: {
      permanent: false,
      destination: PATH.ADMIN_LOGIN_PAGE,
    },
  }
}

export const redirectIfError = () => {
  return {
    redirect: {
      permanent: false,
      destination: PATH.ERROR404,
    },
  }
}
