import React, { useEffect, useState } from 'react'
import BottomTotalBarView, { BottomTotalBarViewProps } from './BottomTotalBarView'
import BottomTotalBarAction, { BottomTotalBarActionHandlersResult } from '@components/molecules/BottomTotalBar/BottomTotalBarAction'
import { TotalProps } from '@components/atoms/Total/Total'
import { useRouter } from 'next/router'
import BuyStore from '../../../store/BuyStore'

export type BottomTotalBarProps = {}
const BottomTotalBar = (props: BottomTotalBarProps) => {
  const router = useRouter()
  const { items } = BuyStore()

  useEffect(() => {}, [items])

  const actions = BottomTotalBarAction({ items })
  const newProps = {
    items: items,
    ...actions,
    isAdminPage: router.pathname.includes('/admin'),
  } as BottomTotalBarViewProps & BottomTotalBarActionHandlersResult & TotalProps

  return <BottomTotalBarView {...newProps} />
}

export default BottomTotalBar
