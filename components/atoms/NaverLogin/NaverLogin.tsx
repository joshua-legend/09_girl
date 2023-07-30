import React, { useEffect } from 'react'

const NaverLogin = () => {
  const naverLogin = () => {
    const redirectURI = encodeURIComponent('http://localhost:3001/test') // 여기에 앱의 콜백 URL을 입력합니다.
    let naverLoginUrl = 'https://nid.naver.com/oauth2.0/authorize?response_type=code'
    naverLoginUrl += '&client_id=' + `${process.env.NAVER_CLIENT_ID}`
    naverLoginUrl += '&redirect_uri=' + redirectURI
    naverLoginUrl += '&state=' + 'false' // 이 함수는 랜덤한 문자열을 반환해야 합니다. 이 문자열은 공격을 방어하기 위한 CSRF 토큰 역할을 합니다.
    window.location.href = naverLoginUrl
  }

  return (
    <div>
      <button onClick={naverLogin}>네이버로 로그인</button>
    </div>
  )
}

export default NaverLogin
