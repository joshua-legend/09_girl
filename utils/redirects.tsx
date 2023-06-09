import PATH from '../constants/path'

export const redirectIfUnauthorized = (status: boolean) => {
  if (!status) {
    return {
      redirect: {
        permanent: false,
        destination: PATH.ADMIN_LOGIN_PAGE,
      },
    }
  }
}
