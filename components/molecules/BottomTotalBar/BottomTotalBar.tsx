import React, { useState } from 'react'
import BottomTotalBarView from './BottomTotalBarView'
import BottomTotalBarAction from '@components/molecules/BottomTotalBar/BottomTotalBarAction'

export type BottomTotalBarProps = {}
const BottomTotalBar = (props: BottomTotalBarProps) => {
  const [store, setStore] = useState(0)
  const actions = BottomTotalBarAction({ setStore })
  const newProps = {}

  return <BottomTotalBarView {...props} />
}

export default BottomTotalBar
