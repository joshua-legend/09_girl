import React, { CSSProperties } from 'react'
import { Box as Left, Box as Right, Box as Banner, BoxProps, ButtonProps } from '@mui/material'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { CardActionProps } from './CardAction'
import { FONTS } from '@styles/fonts'

type CardViewProps = {} & CardActionProps

const CardView = ({}: CardViewProps) => {
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

export default CardView
