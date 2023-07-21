import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as Banner, Box as IconTitleBox, Box as PickupDeliveryRadioGroupBox, BoxProps, TypographyProps } from '@mui/material'
import { AddressInputBannerActionHandlers } from './AddressInputBannerAction'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../../constants/fonts'
import { AddressInputBannerProps } from '@components/organisms/AddressInputBanner/AddressInputBanner'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import IconTitleInput, { IconTitleInputProps } from '@components/molecules/IconTitleInput/IconTitleInput'
import PickupDeliveryForm from '@components/molecules/PickupDeliveryForm/PickupDeliveryForm'

export type AddressInputBannerViewProps = {
  iconTitlesInputs: IconTitleInputProps[]
  iconTitlesInputsAddress: IconTitleInputProps[]
} & AddressInputBannerProps

const AddressInputBannerView = (props: AddressInputBannerViewProps & AddressInputBannerActionHandlers) => {
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
  }
  return (
    <Banner {...uiConfig.Banner}>
      <Typography {...uiConfig.Title}>배송 정보 입력</Typography>
      <IconTitleBox {...uiConfig.IconTitleBox}>
        {props.iconTitlesInputs.map((iconTitle, index) => {
          return <IconTitleInput {...iconTitle} key={index} />
        })}
      </IconTitleBox>
      <PickupDeliveryForm {...props} />
    </Banner>
  )
}

export default AddressInputBannerView
