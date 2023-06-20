import React, { useEffect, useState } from 'react'
import ItemCounterView, { ItemCounterViewProps } from '@components/molecules/ItemCounter/ItemCounterView'
import ItemCounterAction, { ItemCounterActionProps, ItemCounterActionResult } from '@components/molecules/ItemCounter/ItemCounterAction'
import { ItemPickerBannerActionHandlers } from '@components/organisms/ItemPickerBanner/ItemPickerBannerAction'
import useTotalStore from '../../../store/useTotalStore'

export type ItemCounterProps = {} & ItemCounterViewProps

const ItemCounter = (props: ItemCounterProps & ItemPickerBannerActionHandlers) => {
  const { total } = useTotalStore()
  useEffect(() => {
    if (total === 0) setQuantity(0)
  }, [total])

  const [quantity, setQuantity] = useState<number>(0)
  const actionsHandlers = ItemCounterAction({ setQuantity, ...props })
  const newProps = {
    quantity,
    ...props,
    ...actionsHandlers,
  } as ItemCounterViewProps & ItemCounterActionResult
  return <ItemCounterView {...newProps} />
}

export default ItemCounter
