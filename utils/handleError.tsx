// utils/handleError.ts

export const handleError = (error: any) => {
  if (error.response && error.response.status === 404) {
    // 404 에러에 대한 처리
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    }
  } else {
    // 다른 HTTP 에러 또는 네트워크 에러 등에 대한 처리
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    }
  }
}
