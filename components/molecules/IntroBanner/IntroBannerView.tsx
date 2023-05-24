import React from 'react'
import { Box as Left, Box as Right, Box as Banner, BoxProps } from '@mui/material'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { IntroBannerActionProps } from './IntroBannerAction'
import { FONTS } from '@styles/fonts'

export type IntroBannerViewProps = {}

const IntroBannerView = ({}: IntroBannerViewProps & IntroBannerActionProps) => {
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
        <Typography {...uiConfig.Typo}>고촌점 캐파점입니다.😍</Typography>
      </Left>
      <Right></Right>
    </Banner>
  )
}

export default IntroBannerView
