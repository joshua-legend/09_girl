import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import TotalView from '@components/atoms/Total/TotalView'

export type TotalProps = {}

const Total = (props: TotalProps) => {
  return <TotalView {...props} />
}

export default Total
