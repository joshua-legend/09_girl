import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as Banner, Box as IconTitleBox, Box as PickupDeliveryRadioGroupBox, BoxProps, TypographyProps } from '@mui/material'
import { AddressInputBannerActionHandlers } from './AddressInputBannerAction'
import Typography from '@mui/material/Typography'
import { FONTS } from '@styles/fonts'
import { AddressInputBannerProps } from '@components/organisms/AddressInputBanner/AddressInputBanner'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import IconTitleInput, { IconTitleInputProps } from '@components/molecules/IconTitleInput/IconTitleInput'
import PickupDeliveryRadioGroup from '@components/molecules/PickupDeliveryRadioGroup/PickupDeliveryRadioGroup'
import IconTitleSelector, { IconTitleSelectorProps } from '@components/molecules/IconTitleSelector/IconTitleSelector'

export type AddressInputBannerViewProps = {
  iconTitlesInputs: IconTitleInputProps[]
} & AddressInputBannerProps

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
    IconTitleBox: {
      sx: {
        margin: '1rem 2rem',
      },
    } as BoxProps,
    PickupDeliveryRadioGroupBox: {
      sx: {
        margin: '1rem 2rem',
      },
    } as BoxProps,
  }

  return (
    <Banner {...uiConfig.Banner}>
      <Typography {...uiConfig.Title}>
        <LocalShippingIcon {...uiConfig.Truck} /> 배송 정보 입력
      </Typography>
      <IconTitleBox {...uiConfig.IconTitleBox}>
        {props.iconTitlesInputs.map((iconTitle, index) => {
          return <IconTitleInput {...iconTitle} key={index} />
        })}
      </IconTitleBox>
      <PickupDeliveryRadioGroupBox {...uiConfig.PickupDeliveryRadioGroupBox}>
        <PickupDeliveryRadioGroup />
      </PickupDeliveryRadioGroupBox>
    </Banner>
  )
}

export default AddressInputBannerView
