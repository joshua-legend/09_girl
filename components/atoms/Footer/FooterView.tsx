import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box, BoxProps, Button, ButtonProps, Typography } from '@mui/material'
import { FooterProps } from '@components/atoms/Footer/Footer'
import { TypographyProps } from '@mui/system'

export type FooterViewProps = {} & FooterProps

const FooterView = ({}: FooterViewProps) => {
  const uiConfig = {
    Footer: {
      component: 'footer',
      sx: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 1rem',
        background: '#f5f5f7',
        color: 'rgba(50,48,56,.54)',
      },
    } as BoxProps,
    FooterName: {
      component: 'span',
      sx: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '21px',
      },
    } as TypographyProps,
  }

  return (
    <Box {...uiConfig.Footer}>
      <Typography {...uiConfig.FooterName}>(주)공구하는뇨자</Typography>
      <Typography {...uiConfig.FooterName}>사업자 등록번호: 0123-1234-1234</Typography>
      <Typography {...uiConfig.FooterName}>대표: 박지은</Typography>
      <Typography {...uiConfig.FooterName}>전자상거래업 | 전자상거래 소매업</Typography>
      <Typography {...uiConfig.FooterName}>경기도 김포시 고촌읍 수기로 136, 203동 203호(캐슬앤파밀리에시티 2단지)</Typography>
    </Box>
  )
}

export default FooterView
