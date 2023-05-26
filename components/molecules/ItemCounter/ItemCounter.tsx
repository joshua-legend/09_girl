import React, { useState } from 'react'
import ItemCounterView, { ItemCounterViewProps } from '@components/molecules/ItemCounter/ItemCounterView'
import ItemCounterAction, { ItemCounterActionProps, ItemCounterActionResult } from '@components/molecules/ItemCounter/ItemCounterAction'
import { ItemPickerBannerActionHandlers } from '@components/organisms/ItemPickerBanner/ItemPickerBannerAction'

export type ItemCounterProps = {
  name?: string
  price?: number
  isNeedOption?: boolean
}

const ItemCounter = (props: ItemCounterProps & ItemPickerBannerActionHandlers) => {
  const [quantity, setQuantity] = useState<number>(0)
  const actionsHandlers = ItemCounterAction({ setQuantity, ...props })
  const newProps = {
    ...props,
    quantity,
    ...actionsHandlers,
  } as ItemCounterViewProps & ItemCounterActionResult
  return <ItemCounterView {...newProps} />
}

export default ItemCounter
