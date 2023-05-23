import React from 'react'
import AdBannerContainer, { AdBannerContainerProps } from './AdBannerContainer'

export type AdBannerProps = {} & AdBannerContainerProps

const AdBanner = ({ cards }: AdBannerProps) => {
  return <AdBannerContainer cards={cards} />
}

export default AdBanner
