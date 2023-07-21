import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box, BoxProps, Button, ButtonProps } from '@mui/material'
import { LoginButtonProps } from '@components/atoms/LoginButton/LoginButton'
import { FONTS } from '../../../constants/fonts'

export type LoginButtonViewProps = {} & LoginButtonProps

const LoginButtonView = ({ sns, href, bgColor, logo, color = 'white' }: LoginButtonViewProps) => {
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
        window.location.href = `${process.env.API_URL}${href}`
      },
      sx: {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        // border: '1px solid #4285F4',
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
    <Button {...uiConfig.Confirm}>
      <Box {...uiConfig.Logo} />
      {sns}로 쉬운 시작
    </Button>
  )
}

export default LoginButtonView