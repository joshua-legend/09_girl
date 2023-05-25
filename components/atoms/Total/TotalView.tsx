import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as Total, BoxProps, Button, ButtonProps, TypographyProps } from '@mui/material'
import Typography from '@mui/material/Typography'
import { FONTS } from '@styles/fonts'
import { COLORS } from '@styles/colors'

export type TotalViewProps = {
  total: number
}

const TotalView = ({ total = 0 }: TotalViewProps) => {
  const uiConfig = {
    Total: {
      sx: {
        display: 'flex',
        alignItems: 'center',
      },
    } as BoxProps,
    Button: {
      variant: 'contained',
      disableElevation: true,
      style: {
        width: '100%',
        backgroundColor: COLORS.PRIMARY,
      },
    } as ButtonProps,
    ButtonTitle: {
      sx: {
        fontFamily: FONTS.BUTTONTITLE,
        fontSize: '18px',
        fontWeight: '500',
      },
    } as TypographyProps,
  }

  return (
    <Total {...uiConfig.Total}>
      <Button {...uiConfig.Button}>
        <Typography {...uiConfig.ButtonTitle}>총가격 {total}원</Typography>
      </Button>
    </Total>
  )
}

export default TotalView
