import React from 'react'
import SNSLoginsView from '@components/molecules/SNSLogins/SNSLoginsView'

export type SNSLoginsProps = {
  image?: string
  title?: string
  subtitle?: string
}

const SNSLogins = (props: SNSLoginsProps) => {
  return <SNSLoginsView {...props} />
}

export default SNSLogins
