import React from 'react'
import SNSLoginsView, { SNSLoginsViewProps } from '@components/molecules/SNSLogins/SNSLoginsView'
import { color } from '@mui/system'

export type SNSLoginsProps = {}

const SNSLogins = (props: SNSLoginsProps) => {
  const newProps = {
    loginButtons: [
      {
        sns: '네이버',
        href: '/auth/naver/callback',
        bgColor: '#1EC800',
        logo: '/images/logo/naver_logo.png',
      },
      // {
      //   sns: '카카오',
      //   href: '/auth/kakao',
      //   color: 'rgb(59, 29, 30)',
      //   bgColor: '#FEE500',
      //   logo: '/images/logo/kakao_logo.png',
      // },
      // {
      //   sns: '구글',
      //   href: '/auth/naver',
      //   color: 'rgb(59, 29, 30)',
      //   bgColor: 'white',
      //   logo: '/images/logo/google_logo.png',
      // },
    ],
  } as SNSLoginsViewProps

  return <SNSLoginsView {...newProps} />
}

export default SNSLogins
