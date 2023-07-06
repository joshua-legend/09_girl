import React, { SyntheticEvent } from 'react'
import { Item } from '../../../store/BuyStore'

export type BottomTotalBarActionProps = {
  items?: Item[]
}
export type BottomTotalBarActionHandlersResult = {
  onClick: (e: MouseEvent) => void
}

const BottomTotalBarAction = ({ items }: BottomTotalBarActionProps): BottomTotalBarActionHandlersResult => {
  const onClick = (e: MouseEvent) => {
    console.log(items)
  }

  return {
    onClick,
  }
}

export default BottomTotalBarAction
