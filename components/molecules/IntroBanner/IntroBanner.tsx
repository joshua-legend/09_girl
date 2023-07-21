import React from 'react'
import IntroBannerView from '@components/molecules/IntroBanner/IntroBannerView'

export type IntroBannerProps = {
  title: string
}

const IntroBanner = (props: IntroBannerProps) => {
  return <IntroBannerView {...props} />
}

export default IntroBanner
