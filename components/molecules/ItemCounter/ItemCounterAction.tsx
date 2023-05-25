import React from 'react'
import { ItemPickerBannerActionHandlers } from '@components/organisms/ItemPickerBanner/ItemPickerBannerAction'

export type ItemCounterActionResult = {
  onMinusClick: () => void
  onPlusClick: () => void
}

export type ItemCounterActionProps = {
  price: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
}

const ItemCounterAction = ({ price, setQuantity, onAdd, onSubtract }: ItemCounterActionProps & ItemPickerBannerActionHandlers): ItemCounterActionResult => {
  const onMinusClick = () =>
    setQuantity((prevQuantity) => {
      if (prevQuantity === 0) return prevQuantity
      else {
        onSubtract(price)
        return prevQuantity - 1
      }
    })
  const onPlusClick = () => {
    setQuantity((prevQuantity) => {
      onAdd(price)
      return prevQuantity + 1
    })
  }

  return {
    onMinusClick,
    onPlusClick,
  }
}

export default ItemCounterAction
