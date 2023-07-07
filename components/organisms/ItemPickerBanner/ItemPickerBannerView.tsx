import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as ItemCountersBox, Box as Banner, BoxProps, TypographyProps } from '@mui/material'
import { ItemPickerBannerActionHandlers } from './ItemPickerBannerAction'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../../constants/fonts'
import { ItemPickerBannerProps } from '@components/organisms/ItemPickerBanner/ItemPickerBanner'
import ItemCounter from '@components/molecules/ItemCounter/ItemCounter'
import { Item } from '../../../store/BuyStore'
import styled from '@emotion/styled'
import Divider from '@components/atoms/Divider/Divider'

export type ItemPickerBannerViewProps = {
  items: Item[]
} & ItemPickerBannerProps

const ItemPickerBannerView = (props: ItemPickerBannerViewProps & ItemPickerBannerActionHandlers) => {
  const uiConfig = {
    Banner: {
      sx: {
        width: '100%',
        marginTop: '10px',
      },
    } as BoxProps,
    Title: {
      sx: {
        paddingLeft: '20px',
        fontFamily: FONTS.PRETENDARD,
        fontSize: '17px',
        lineHeight: '115%',
        fontWeight: '700',
        letterSpacing: '-0.2px',
        color: 'rgb(88, 89, 91)',
      },
    } as TypographyProps,
    ItemBox: {
      sx: {
        margin: '1rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      },
    } as BoxProps,
  }

  return (
    <>
      <Banner {...uiConfig.Banner}>
        <Typography {...uiConfig.Title}>원하는 공구템을 골라주세요!</Typography>
        <ItemCountersBox {...uiConfig.ItemBox}>
          {props.items.map((item, index) => {
            return <ItemCounter {...item} {...props} key={index} />
          })}
        </ItemCountersBox>
      </Banner>
      <Divider />
    </>
  )
}

export default ItemPickerBannerView
