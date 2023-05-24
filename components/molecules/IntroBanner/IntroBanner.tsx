import React from 'react'
import IntroBannerView, { IntroBannerViewProps } from '@components/molecules/IntroBanner/IntroBannerView'
import IntroBannerAction from '@components/molecules/IntroBanner/IntroBannerAction'
import { HeaderViewProps } from '@components/molecules/Header/HeaderView'

export type IntroBannerProps = {
  IntroBanner: IntroBannerViewProps
}

const IntroBanner = ({ IntroBanner }: IntroBannerProps) => {
  return <IntroBannerView {...IntroBannerAction} {...IntroBanner} />
}

export default IntroBanner
