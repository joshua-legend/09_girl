import React, { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as Total, BoxProps, Button, ButtonProps, TypographyProps } from '@mui/material'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../../constants/fonts'
import { COLORS } from '../../../constants/colors'
import total, { TotalProps } from '@components/atoms/Total/Total'
import BuyStore from '../../../store/BuyStore'

export type TotalViewProps = {} & TotalProps

const TotalView = ({}: TotalViewProps) => {
  const [total, setTotal] = useState(0)
  const { itemsStore } = BuyStore()

  useEffect(() => {
    const total = itemsStore.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity
    }, 0)
    setTotal(total)
  }, [itemsStore])

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
