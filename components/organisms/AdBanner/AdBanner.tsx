import React from 'react'
import AdBannerView from '@components/organisms/AdBanner/AdBannerView'
import { AdCardProps } from '@components/molecules/AdCard/AdCard'

export type AdBannerProps = {
  adCards: AdCardProps[]
}

const AdBanner = (props: AdBannerProps) => {
  return <AdBannerView {...props} />
}

export default AdBanner
