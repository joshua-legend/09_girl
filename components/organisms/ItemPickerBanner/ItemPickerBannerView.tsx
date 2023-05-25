import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as ItemCountersBox, Box as Banner, BoxProps, TypographyProps } from '@mui/material'
import { ItemPickerBannerActionProps } from './ItemPickerBannerAction'
import Typography from '@mui/material/Typography'
import { FONTS } from '@styles/fonts'
import ItemCounter, { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'

export type ItemPickerBannerViewProps = {
  items: ItemCounterProps[]
}

const ItemPickerBannerView = ({ items }: ItemPickerBannerViewProps & ItemPickerBannerActionProps) => {
  const uiConfig = {
    Banner: {
      sx: {
        width: '100%',
      },
    } as BoxProps,
    Title: {
      sx: {
        paddingLeft: '20px',
        fontFamily: FONTS.TITLE,
        fontSize: '18px',
        fontWeight: '500',
      },
    } as TypographyProps,
    ItemBox: {
      sx: {
        margin: '1rem',
      },
    },
  }

  return (
    <Banner {...uiConfig.Banner}>
      <Typography {...uiConfig.Title}>원하는 공구템을 골라주세요!</Typography>
      <ItemCountersBox {...uiConfig.ItemBox}>
        {items.map((value, index) => {
          return <ItemCounter {...value} key={index} />
        })}
      </ItemCountersBox>
    </Banner>
  )
}

export default ItemPickerBannerView
