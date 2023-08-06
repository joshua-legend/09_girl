import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box, BoxProps, Button, ButtonProps } from '@mui/material'
import { LoginButtonProps } from '@components/atoms/LoginButton/LoginButton'
import { FONTS } from '../../../constants/fonts'
import axios from 'axios'

export type LoginButtonViewProps = {} & LoginButtonProps

const LoginButtonView = ({ sns, href, bgColor, logo, color = 'white' }: LoginButtonViewProps) => {
  const fetchTokenData = async () => {
    try {
      const response = await axios.get(`${process.env.API_URL}/auth/naver/disconnect`)
      return response.data
    } catch (error) {
      console.error('Error:', error)
    }
  }
  const uiConfig = {
    Buttons: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 3rem',
      },
    } as BoxProps,
    Confirm: {
      variant: 'contained',
      onClick: () => {
        const redirectURI = encodeURIComponent(`${process.env.API_URL}/auth/naver/callback`) // 여기에 앱의 콜백 URL을 입력합니다.
        let naverLoginUrl = 'https://nid.naver.com/oauth2.0/authorize?response_type=code'
        naverLoginUrl += '&client_id=' + 'xepzSwvaERHPUsbzSaVP'
        naverLoginUrl += '&redirect_uri=' + redirectURI
        naverLoginUrl += '&state=' + 'false' // 이 함수는 랜덤한 문자열을 반환해야 합니다. 이 문자열은 공격을 방어하기 위한 CSRF 토큰 역할을 합니다.
        window.location.href = naverLoginUrl
      },
      sx: {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        width: '100%',
        height: '50px',
        margin: '0.5rem 0',
        borderRadius: '4px',
        border: `1px solid transparent`,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
        fontSize: '16px',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px',
        lineHeight: '17px',
        fontFamily: FONTS.PRETENDARD,
      },
    } as ButtonProps,
    Logo: {
      sx: {
        background: `url(${logo}) no-repeat center / cover`,
        width: '20px',
        height: '20px',
      },
    } as BoxProps,
  }

  return (
    <>
      <Button {...uiConfig.Confirm}>
        <Box {...uiConfig.Logo} />
        {sns}로 쉬운 시작
      </Button>
    </>
  )
}

export default LoginButtonView
