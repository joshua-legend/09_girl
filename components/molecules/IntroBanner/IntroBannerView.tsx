import React from 'react'
import { Box as Left, Box as Right, Box as Banner, BoxProps } from '@mui/material'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { FONTS } from '../../../constants/fonts'
import { IntroBannerProps } from '@components/molecules/IntroBanner/IntroBanner'
import { height, spacing } from '@mui/system'
import { left } from '@popperjs/core'
import Divider from '@components/atoms/Divider/Divider'

export type IntroBannerViewProps = {} & IntroBannerProps

const IntroBannerView = ({ title }: IntroBannerViewProps) => {
  const uiConfig = {
    Banner: {
      sx: {
        padding: '20px 20px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        justifyContent: 'space-between',
      },
    } as BoxProps,
    Main: {
      variant: 'subtitle1',
      sx: {
        fontFamily: FONTS.PRETENDARD,
        fontSize: '24px',
        lineHeight: '115%',
        fontWeight: '700',
        letterSpacing: '-0.2px',
        color: 'rgb(88, 89, 91)',
      },
    } as TypographyProps,
    Sub: {
      variant: 'subtitle2',
      sx: {
        fontFamily: FONTS.PRETENDARD,
        fontSize: '15px',
        lineHeight: '115%',
        fontWeight: '400',
        letterSpacing: '-0.2px',
        color: 'rgb(88, 89, 91)',
      },
    } as TypographyProps,
  }

  //title로 변경해라

  return (
    <>
      <Banner {...uiConfig.Banner}>
        <Typography {...uiConfig.Main}>{title}</Typography>
        <Typography {...uiConfig.Sub}>고촌점</Typography>
      </Banner>
      <Divider />
    </>
  )
}

export default IntroBannerView
