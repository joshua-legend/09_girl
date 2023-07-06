import React from 'react'
import AdBannerView from '@components/organisms/AdBanner/AdBannerView'
import { StoreCardProps } from '@components/molecules/StoreCard/StoreCard'

export type AdBannerProps = {
  adCards: StoreCardProps[]
}

const AdBanner = (props: AdBannerProps) => {
  return <AdBannerView {...props} />
}

export default AdBanner
