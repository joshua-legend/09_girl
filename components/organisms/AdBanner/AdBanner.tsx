import React from 'react'
import AdBannerContainer, { AdBannerContainerProps } from './AdBannerContainer'
import { AdBannerViewProps } from '@components/organisms/AdBanner/AdBannerView'

export type AdBannerProps = {} & AdBannerContainerProps

const AdBanner = ({}: AdBannerProps) => {
  return <AdBannerContainer />
}

export default AdBanner
