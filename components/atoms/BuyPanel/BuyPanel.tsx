import React from 'react'
import BuyPanelView from '@components/atoms/BuyPanel/BuyPanelView'

export type BuyPanelProps = {
  onClick: (e: MouseEvent) => void
}

const BuyPanel = (props: BuyPanelProps) => {
  return <BuyPanelView {...props} />
}

export default BuyPanel
