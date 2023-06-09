import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as Total, BoxProps, Button, ButtonProps, TypographyProps } from '@mui/material'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../../constants/fonts'
import { COLORS } from '../../../constants/colors'
import { TotalProps } from '@components/atoms/Total/Total'

export type TotalViewProps = {} & TotalProps

const TotalView = ({ total = 0 }: TotalViewProps) => {
  const uiConfig = {
    Total: {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    } as BoxProps,
    BuyTypo: {
      sx: {
        fontFamily: FONTS.PRETENDARD,
        fontSize: '18px',
        fontWeight: '500',
      },
    } as TypographyProps,
    TotalTypo: {
      sx: {
        fontFamily: FONTS.PRETENDARD,
        fontSize: '18px',
        fontWeight: '500',
      },
    } as TypographyProps,
  }

  return (
    <Total {...uiConfig.Total}>
      <Typography {...uiConfig.BuyTypo}>구매 금액</Typography>
      <Typography {...uiConfig.TotalTypo}>{total}원</Typography>
    </Total>
  )
}

export default TotalView
