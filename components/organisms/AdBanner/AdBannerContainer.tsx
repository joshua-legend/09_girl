import React from 'react'
import AdBannerView from './AdBannerView'
import AdBannerAction from './AdBannerAction'

const AdBannerContainer = () => {
  return <AdBannerView {...AdBannerAction} />
}

export default AdBannerContainer
