import React, { useState } from 'react'
import BottomTotalBarView, { BottomTotalBarViewProps } from './BottomTotalBarView'
import BottomTotalBarAction from '@components/molecules/BottomTotalBar/BottomTotalBarAction'
import { TotalProps } from '@components/atoms/Total/Total'
import useTotalStore from '../../../store/useTotalStore'

export type BottomTotalBarProps = {}
const BottomTotalBar = (props: BottomTotalBarProps) => {
  const { total } = useTotalStore()
  const actions = BottomTotalBarAction()
  const newProps = {
    total,
  } as BottomTotalBarViewProps & TotalProps

  return <BottomTotalBarView {...newProps} />
}

export default BottomTotalBar
