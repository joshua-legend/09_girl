import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as Total, BoxProps, Button, ButtonProps, TypographyProps } from '@mui/material'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../../constants/fonts'
import { COLORS } from '../../../constants/colors'
import { BuyPanelProps } from '@components/atoms/BuyPanel/BuyPanel'

export type BuyPanelViewProps = {} & BuyPanelProps

const BuyPanelView = ({ onClick }: BuyPanelViewProps) => {
  const uiConfig = {
    Total: {
      sx: {
        display: 'flex',
        alignItems: 'center',
        flex: '2',
      },
    } as BoxProps,
    Button: {
      variant: 'contained',
      disableElevation: true,
      onClick,
      style: {
        width: '100%',
        backgroundColor: COLORS.PRIMARY,
        padding: '0.5rem 1.25rem',
        height: '80%',
        margin: '0.25rem',
      },
    } as ButtonProps,
    ButtonTypo: {
      sx: {
        fontFamily: FONTS.PRETENDARD,
        fontSize: '18px',
        fontWeight: '500',
      },
    } as TypographyProps,
  }

  return (
    <Total {...uiConfig.Total}>
      <Button {...uiConfig.Button}>
        <Typography {...uiConfig.ButtonTypo}>구매하기</Typography>
      </Button>
    </Total>
  )
}

export default BuyPanelView
