import React, { useState } from 'react'
import AddressInputBannerView, { AddressInputBannerViewProps } from '@components/organisms/AddressInputBanner/AddressInputBannerView'
import { AccountCircle } from '@mui/icons-material'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import HomeIcon from '@mui/icons-material/Home'
export type AddressInputBannerProps = {}

const AddressInputBanner = (props: AddressInputBannerProps) => {
  const newProps = {
    iconTitles: [
      {
        icon: <PhoneIphoneIcon />,
        title: '휴대폰 번호',
        label: '번호 입력',
      },
      {
        icon: <AccountCircle />,
        title: '닉네임 (이름)',
        label: '닉네임 입력',
      },
      {
        icon: <HomeIcon />,
        title: '주소',
        label: '주소 입력',
      },
    ],
  } as AddressInputBannerViewProps

  return <AddressInputBannerView {...newProps} />
}

export default AddressInputBanner
