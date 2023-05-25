import React, { useState } from 'react'
import ItemCounterView, { ItemCounterViewProps } from '@components/molecules/ItemCounter/ItemCounterView'
import ItemCounterAction, { ItemCounterActionProps } from '@components/molecules/ItemCounter/ItemCounterAction'

export type ItemCounterProps = {
  item: ItemCounterViewProps
}

const ItemCounter = ({ item }: ItemCounterProps) => {
  const [quantity, setQuantity] = useState<number>(0)
  const itemWithQuantity = { ...item, quantity }
  const actionProps = {
    quantity,
    setQuantity,
  } as ItemCounterActionProps
  const actions = ItemCounterAction(actionProps)
  return <ItemCounterView {...actions} {...itemWithQuantity} />
}

export default ItemCounter
