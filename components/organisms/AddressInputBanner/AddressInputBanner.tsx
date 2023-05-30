import React, { useState } from 'react'
import AddressInputBannerView, { AddressInputBannerViewProps } from '@components/organisms/AddressInputBanner/AddressInputBannerView'
import { AccountCircle } from '@mui/icons-material'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import HomeIcon from '@mui/icons-material/Home'
export type AddressInputBannerProps = {}

const AddressInputBanner = (props: AddressInputBannerProps) => {
  const newProps = {
    iconTitlesInputs: [
      {
        icon: <PhoneIphoneIcon fontSize={'small'} />,
        title: '휴대폰 번호',
        label: '번호 입력',
        placeholder: 'ex) 01012345678',
        isNecessary: true,
        multiline: false,
      },
      {
        icon: <AccountCircle fontSize={'small'} />,
        title: '닉네임 (이름)',
        label: '닉네임 입력',
        isNecessary: true,
        multiline: false,
      },
      {
        icon: <AccountCircle fontSize={'small'} />,
        title: '배달 요청사항',
        label: '닉네임 입력',
        isNecessary: false,
        multiline: true,
      },
    ],
  } as AddressInputBannerViewProps

  return <AddressInputBannerView {...newProps} />
}

export default AddressInputBanner
