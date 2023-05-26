import React from 'react'
import AdCardView from './AdCardView'

export type AdCardProps = {
  image?: string
  title?: string
  subtitle?: string
}

const AdCard = (props: AdCardProps) => {
  return <AdCardView {...props} />
}

export default AdCard
