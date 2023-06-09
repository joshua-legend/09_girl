import React, { useState } from 'react'
import BottomTotalBarView, { BottomTotalBarViewProps } from './BottomTotalBarView'
import BottomTotalBarAction from '@components/molecules/BottomTotalBar/BottomTotalBarAction'
import { TotalProps } from '@components/atoms/Total/Total'
import useTotalStore from '../../../store/useTotalStore'
import { useRouter } from 'next/router'

export type BottomTotalBarProps = {}
const BottomTotalBar = (props: BottomTotalBarProps) => {
  const router = useRouter()
  const { total } = useTotalStore()
  const actions = BottomTotalBarAction()
  const newProps = {
    total,
    isAdminPage: router.pathname.includes('/admin'),
  } as BottomTotalBarViewProps & TotalProps

  return <BottomTotalBarView {...newProps} />
}

export default BottomTotalBar
