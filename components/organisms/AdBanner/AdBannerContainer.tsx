import React from 'react'
import AdBannerView, { AdBannerViewProps } from './AdBannerView'
import AdBannerAction, { AdBannerActionProps } from './AdBannerAction'

export type AdBannerContainerProps = {} & AdBannerViewProps

const AdBannerContainer = ({ cards }: AdBannerContainerProps) => {
  return <AdBannerView {...AdBannerAction} cards={cards} />
}

export default AdBannerContainer
