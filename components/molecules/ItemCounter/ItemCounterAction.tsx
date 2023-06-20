import React, { useEffect } from 'react'
import { ItemPickerBannerActionHandlers } from '@components/organisms/ItemPickerBanner/ItemPickerBannerAction'
import { ItemCounterViewProps } from '@components/molecules/ItemCounter/ItemCounterView'

export type ItemCounterActionProps = {
  setQuantity: React.Dispatch<React.SetStateAction<number>>
} & ItemCounterViewProps &
  ItemPickerBannerActionHandlers
export type ItemCounterActionResult = {
  onMinusClick: () => void
  onPlusClick: () => void
}

const ItemCounterAction = ({ price, setQuantity, onAdd, onSubtract }: ItemCounterActionProps): ItemCounterActionResult => {
  const onMinusClick = () =>
    setQuantity((prevQuantity) => {
      if (prevQuantity === 0) return prevQuantity
      else {
        onSubtract(price ?? 0)
        return prevQuantity - 1
      }
    })
  const onPlusClick = () => {
    setQuantity((prevQuantity) => {
      onAdd(price ?? 0)
      return prevQuantity + 1
    })
  }

  return {
    onMinusClick,
    onPlusClick,
  }
}

export default ItemCounterAction
