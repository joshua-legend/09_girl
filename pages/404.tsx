// pages/404.tsx
import React from 'react'
import { Box, BoxProps } from '@mui/system'
import { Button, ButtonProps, SvgIconProps, Typography, TypographyProps } from '@mui/material'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import { FONTS } from '../constants/fonts'
import { COLORS } from '../constants/colors'
import { useRouter } from 'next/router'

const Custom404 = () => {
  const { push } = useRouter()

  const uiConfig = {
    Box: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '10rem',
        padding: ' 1rem 3rem',
      },
    } as BoxProps,
    WarnIcon: {
      sx: {
        width: '60px',
        height: '60px',
        marginBottom: '1rem',
      },
    } as SvgIconProps,
    Typos: {
      sx: {
        fontSize: '28px',
        fontFamily: FONTS.DONGLE,
      },
    } as TypographyProps,
    Button: {
      variant: 'contained',
      onClick: () => {
        push('/select')
      },
      sx: {
        marginTop: '1rem',
        fontSize: '24px',
        fontFamily: FONTS.DONGLE,
        color: COLORS.TEXT,
        backgroundColor: COLORS.PRIMARY,
      },
    } as ButtonProps,
  }

  return (
    <Box {...uiConfig.Box}>
      <RemoveShoppingCartIcon {...uiConfig.WarnIcon} />
      <Typography {...uiConfig.Typos}>페이지를 찾을 수 없습니다.</Typography>
      <Typography {...uiConfig.Typos}>주소를 잘못 입력하시거나, 삭제되어서 요청하신 페이지는 찾을 수 없습니다.</Typography>
      <Button {...uiConfig.Button}>메인 페이지로</Button>
    </Box>
  )
}

export default Custom404
