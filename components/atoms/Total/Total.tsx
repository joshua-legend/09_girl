import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import TotalView, { TotalViewProps } from '@components/atoms/Total/TotalView'

export type TotalProps = {} & TotalViewProps

const Total = ({ total }: TotalProps) => {
  return <TotalView total={total} />
}

export default Total
