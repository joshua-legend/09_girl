import React from 'react'
import StoreCardView from './StoreCardView'

export type StoreCardProps = {
  image?: string
  title?: string
  location?: string
}

const StoreCard = (props: StoreCardProps) => {
  return <StoreCardView {...props} />
}

export default StoreCard
