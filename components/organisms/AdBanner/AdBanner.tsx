import React from 'react'
import AdBannerView, { AdBannerViewProps } from '@components/organisms/AdBanner/AdBannerView'
import AdBannerAction from '@components/organisms/AdBanner/AdBannerAction'

export type AdBannerProps = {
  adBanner: AdBannerViewProps
}

const AdBanner = ({ adBanner }: AdBannerProps) => {
  return <AdBannerView {...AdBannerAction} {...adBanner} />
}

export default AdBanner
