import React, { useState } from 'react'
import AddressInputBannerView, { AddressInputBannerViewProps } from '@components/organisms/AddressInputBanner/AddressInputBannerView'
import { AccountCircle } from '@mui/icons-material'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
export type AddressInputBannerProps = {
  mobile: string
  nickname: string
}

const AddressInputBanner = (props: AddressInputBannerProps) => {
  const newProps = {
    iconTitlesInputs: [
      {
        icon: <PhoneIphoneIcon fontSize={'small'} />,
        title: '휴대폰 번호',
        label: 'mobile',
        text: props.mobile,
        type: 'number',
        placeholder: 'ex) 01012345678',
        isNecessary: true,
        multiline: false,
        limitLength: 11,
      },
      {
        icon: <AccountCircle fontSize={'small'} />,
        title: '닉네임 (이름)',
        label: 'nickname',
        text: props.nickname,
        isNecessary: true,
        multiline: false,
        limitLength: 20,
      },
      {
        icon: <AccountCircle fontSize={'small'} />,
        title: '배달 요청사항',
        label: 'require',
        isNecessary: false,
        multiline: true,
        limitLength: 50,
      },
    ],
    iconTitlesInputsAddress: [
      {
        icon: <PhoneIphoneIcon fontSize={'small'} />,
        title: '주소 입력',
        label: 'address',
        placeholder: 'ex) 101동',
        isNecessary: true,
        multiline: false,
        limitLength: 30,
      },
      {
        icon: <AccountCircle fontSize={'small'} />,
        title: '상세 주소 입력',
        label: 'detail',
        placeholder: 'ex) 101호',
        isNecessary: true,
        multiline: false,
        limitLength: 30,
      },
      {
        icon: <AccountCircle fontSize={'small'} />,
        title: '공동현관문 출입 정보',
        label: 'common',
        isNecessary: false,
        multiline: false,
        limitLength: 30,
      },
    ],
  } as AddressInputBannerViewProps

  return <AddressInputBannerView {...newProps} />
}

export default AddressInputBanner
