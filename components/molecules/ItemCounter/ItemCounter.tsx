import React, { useState } from 'react'
import ItemCounterView, { ItemCounterViewProps } from '@components/molecules/ItemCounter/ItemCounterView'
import ItemCounterAction, { ItemCounterActionProps, ItemCounterActionResult } from '@components/molecules/ItemCounter/ItemCounterAction'
import { ItemPickerBannerActionHandlers } from '@components/organisms/ItemPickerBanner/ItemPickerBannerAction'

export type ItemCounterProps = {
  // item: ItemCounterViewProps
  name?: string
  price?: number
  quantity?: number
  isNeedOption?: boolean
} & ItemPickerBannerActionHandlers

const ItemCounter = ({ item, onAdd, onSubtract }: ItemCounterProps) => {
  const [quantity, setQuantity] = useState<number>(0)
  const actionsHandlers = ItemCounterAction({ price: item.price ?? 0, setQuantity, onAdd, onSubtract })
  const props = {
    ...item,
    quantity,
    ...actionsHandlers,
  } as ItemCounterViewProps & ItemCounterActionResult

  return <ItemCounterView {...props} />
}

export default ItemCounter
