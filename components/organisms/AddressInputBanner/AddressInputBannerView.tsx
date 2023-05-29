import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as Banner, BoxProps, Button, ButtonProps, TypographyProps } from '@mui/material'
import { AddressInputBannerActionHandlers } from './AddressInputBannerAction'
import Typography from '@mui/material/Typography'
import { FONTS } from '@styles/fonts'
import { AddressInputBannerProps } from '@components/organisms/AddressInputBanner/AddressInputBanner'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import PickupDeliveryRadioGroup from '@components/molecules/PickupDeliveryRadioGroup/PickupDeliveryRadioGroup'

export type AddressInputBannerViewProps = {} & AddressInputBannerProps

const AddressInputBannerView = (props: AddressInputBannerViewProps & AddressInputBannerActionHandlers) => {
  const uiConfig = {
    Banner: {
      sx: {
        width: '100%',
      },
    } as BoxProps,
    Title: {
      sx: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',
        fontFamily: FONTS.PRETENDARD,
        fontSize: '18px',
        fontWeight: '500',
      },
    } as TypographyProps,
    ItemBox: {
      sx: {
        margin: '1rem',
      },
    } as BoxProps,
    Truck: {
      sx: {
        marginRight: '0.2rem',
      },
    },
  }

  return (
    <Banner {...uiConfig.Banner}>
      <Typography {...uiConfig.Title}>
        <LocalShippingIcon {...uiConfig.Truck} /> 배송 정보 입력
      </Typography>
      {/*<ItemCountersBox {...uiConfig.ItemBox}>*/}
      {/*  {props.items.map((item, index) => {*/}
      {/*    return <ItemCounter {...item} {...props} key={index} />*/}
      {/*  })}*/}
      {/*</ItemCountersBox>*/}
    </Banner>
  )
}

export default AddressInputBannerView
