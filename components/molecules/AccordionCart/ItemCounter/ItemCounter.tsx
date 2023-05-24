import React, { useState } from 'react'
import ItemCounterView, { ItemCounterViewProps } from '@components/molecules/AccordionCart/ItemCounter/ItemCounterView'
import ItemCounterAction, { ItemCounterActionProps } from '@components/molecules/AccordionCart/ItemCounter/ItemCounterActionsResult'

export type ItemCounterProps = {
  item: ItemCounterViewProps
}

const ItemCounter = ({ item }: ItemCounterProps) => {
  const [quantity, setQuantity] = useState<number>(0)

  const actionProps = {
    quantity,
    setQuantity,
  } as ItemCounterActionProps

  const actions = ItemCounterAction(actionProps)
  return <ItemCounterView {...actions} {...item} quantity={quantity} />
}

export default ItemCounter
