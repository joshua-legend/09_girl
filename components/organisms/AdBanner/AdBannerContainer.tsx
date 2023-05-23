import React from 'react'
import AdBannerView, { AdBannerViewProps } from './AdBannerView'
import AdBannerAction, { AdBannerActionProps } from './AdBannerAction'

export type AdBannerContainerProps = {} & AdBannerViewProps

const AdBannerContainer = ({}: AdBannerContainerProps) => {
  return <AdBannerView {...AdBannerAction} />
}

export default AdBannerContainer
