import React from 'react'
import { Box as Left, Box as Right, Box as Banner, BoxProps } from '@mui/material'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { IntroBannerActionProps } from './IntroBannerAction'
import { FONTS } from '@styles/fonts'

type IntroBannerViewProps = {} & IntroBannerActionProps

const IntroBannerView = ({}: IntroBannerViewProps) => {
  const uiConfig = {
    Banner: {
      sx: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
      },
    } as BoxProps,
    Typo: {
      variant: 'h6',
      style: {
        fontFamily: FONTS.BANNER,
      },
    } as TypographyProps,
  }

  return (
    <Banner {...uiConfig.Banner}>
      <Left>
        <Typography {...uiConfig.Typo}>안녕하세요.</Typography>
        <Typography {...uiConfig.Typo}>공구하는 뇨자입니다.</Typography>
      </Left>
      <Right></Right>
    </Banner>
  )
}

export default IntroBannerView
