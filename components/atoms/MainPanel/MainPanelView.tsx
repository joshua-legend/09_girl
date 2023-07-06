import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box, BoxProps, Button, ButtonProps, Typography } from '@mui/material'
import { FooterProps } from '@components/atoms/Footer/Footer'
import { TypographyProps } from '@mui/system'
import { MainPanelProps } from '@components/atoms/MainPanel/MainPanel'
import { FONTS } from '../../../constants/fonts'

export type MainPanelViewProps = {} & MainPanelProps

const MainPanelView = ({}: MainPanelViewProps) => {
  const uiConfig = {
    Container: {
      sx: {
        margin: '90px 30px 40px;',
        textAlign: 'center',
      },
    } as BoxProps,
    Image: {
      sx: {
        marginBottom: '30px',
        width: '211px',
        height: '170px',
      },
    } as BoxProps,
    MainTypo: {
      sx: {
        marginTop: '20px',
        marginBottom: '8px',
        fontFamily: FONTS.PRETENDARD,
        fontSize: '22px',
        lineHeight: '26px',
      },
    } as TypographyProps,
    SubTypo: {
      sx: {
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16px',
      },
    } as TypographyProps,
  }

  return (
    <Box {...uiConfig.Container}>
      <Box>
        <img style={{ width: '100%', height: '100%', borderRadius: '4px' }} src={'/static/main.jpg'} alt='' />
      </Box>
      <Typography {...uiConfig.MainTypo}>
        공구하는 뇨자,
        <br />
        이제는 쉽게 예약하자!
      </Typography>
      <Typography {...uiConfig.SubTypo}>네이버밴드부터 공구까지</Typography>
    </Box>
  )
}

export default MainPanelView
