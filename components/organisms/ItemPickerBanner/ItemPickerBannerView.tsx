import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as ItemCountersBox, Box as Banner, BoxProps, Button, ButtonProps, TypographyProps } from '@mui/material'
import { ItemPickerBannerActionProps, ItemPickerBannerActionHandlers } from './ItemPickerBannerAction'
import Typography from '@mui/material/Typography'
import { FONTS } from '@styles/fonts'
import ItemCounter, { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'
import { COLORS } from '@styles/colors'
import Total, { TotalProps } from '@components/atoms/Total/Total'

export type ItemPickerBannerViewProps = {
  items: ItemCounterProps[]
} & TotalProps

const ItemPickerBannerView = ({ items, total, onAdd, onSubtract }: ItemPickerBannerViewProps & ItemPickerBannerActionHandlers) => {
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
    } as BoxProps,
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
    <Banner {...uiConfig.Banner}>
      <Typography {...uiConfig.Title}>원하는 공구템을 골라주세요!</Typography>
      <ItemCountersBox {...uiConfig.ItemBox}>
        {items.map((value, index) => {
          return <ItemCounter {...value} onAdd={onAdd} onSubtract={onSubtract} key={index} />
        })}
        <Total total={total} />
      </ItemCountersBox>
    </Banner>
  )
}

export default ItemPickerBannerView
