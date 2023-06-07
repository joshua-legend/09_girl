import React, { useState } from 'react'
import AddressInputBannerView, { AddressInputBannerViewProps } from '@components/organisms/AddressInputBanner/AddressInputBannerView'
import { AccountCircle } from '@mui/icons-material'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
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
    iconTitlesInputsAddress: [
      {
        icon: <PhoneIphoneIcon fontSize={'small'} />,
        title: '주소 입력',
        label: '주소 입력',
        placeholder: 'ex) 101동',
        isNecessary: true,
        multiline: false,
      },
      {
        icon: <AccountCircle fontSize={'small'} />,
        title: '상세 주소 입력',
        label: '상세 주소 입력',
        placeholder: 'ex) 101호',
        isNecessary: false,
        multiline: false,
      },
      {
        icon: <AccountCircle fontSize={'small'} />,
        title: '공동현관문 출입 정보',
        label: '',
        isNecessary: false,
        multiline: false,
      },
    ],
  } as AddressInputBannerViewProps

  return <AddressInputBannerView {...newProps} />
}

export default AddressInputBanner
