import React from 'react'
import useTotalStore from '../../../store/useTotalStore'

export type ItemPickerBannerActionProps = {}

export type ItemPickerBannerActionHandlers = {
  onSubtract: (price: number) => void
  onAdd: (price: number) => void
}

const ItemPickerBannerAction = (): ItemPickerBannerActionHandlers => {
  const { total, add, subtract } = useTotalStore()

  const onSubtract = (price: number) => subtract(price)
  const onAdd = (price: number) => add(price)
  return {
    onSubtract,
    onAdd,
  }
}

export default ItemPickerBannerAction
