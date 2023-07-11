import React, { useEffect } from 'react'
import { ItemPickerBannerActionHandlers } from '@components/organisms/ItemPickerBanner/ItemPickerBannerAction'
import { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'
import BuyStore, { Item } from '../../../store/BuyStore'

export type ItemCounterActionProps = {
  setQuantity: React.Dispatch<React.SetStateAction<number>>
} & ItemCounterProps &
  ItemPickerBannerActionHandlers
export type ItemCounterActionResult = {
  onMinusClick: () => void
  onPlusClick: () => void
}

const ItemCounterAction = ({ setQuantity, _id }: ItemCounterActionProps): ItemCounterActionResult => {
  const { increaseQuantity, decreaseQuantity } = BuyStore()

  const onMinusClick = () =>
    setQuantity((prevQuantity) => {
      if (prevQuantity === 0) return prevQuantity
      else {
        decreaseQuantity(_id)
        return prevQuantity - 1
      }
    })
  const onPlusClick = () => {
    setQuantity((prevQuantity) => {
      increaseQuantity(_id)
      return prevQuantity + 1
    })
  }

  return {
    onMinusClick,
    onPlusClick,
  }
}

export default ItemCounterAction
