import React, { useEffect, useState } from 'react'
import ItemCounterView, { ItemCounterViewProps } from '@components/molecules/ItemCounter/ItemCounterView'
import ItemCounterAction, { ItemCounterActionProps, ItemCounterActionResult } from '@components/molecules/ItemCounter/ItemCounterAction'
import { ItemPickerBannerActionHandlers } from '@components/organisms/ItemPickerBanner/ItemPickerBannerAction'

export type ItemCounterProps = {
  _id: any
  name: string
  price: number
} & ItemCounterViewProps

const ItemCounter = (props: ItemCounterProps & ItemPickerBannerActionHandlers) => {
  const [quantity, setQuantity] = useState<number>(0)
  const actionsHandlers = ItemCounterAction({ setQuantity, ...props })
  const newProps = {
    quantity,
    ...props,
    onPlusClick: actionsHandlers.onPlusClick,
    onMinusClick: actionsHandlers.onMinusClick,
  } as ItemCounterViewProps & ItemCounterActionResult
  return <ItemCounterView {...newProps} />
}

export default ItemCounter
