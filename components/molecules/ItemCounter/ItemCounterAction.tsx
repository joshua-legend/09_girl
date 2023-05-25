import React, { ComponentProps, Dispatch } from 'react'

export type ItemCounterActionResult = {
  onMinusClick: () => void
  onPlusClick: () => void
}

export type ItemCounterActionProps = {
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
}

const ItemCounterAction = ({ quantity, setQuantity }: ItemCounterActionProps): ItemCounterActionResult => {
  const onMinusClick = () => setQuantity((prevState) => (prevState === 0 ? prevState : prevState - 1))
  const onPlusClick = () => setQuantity((prevState) => prevState + 1)

  return {
    onMinusClick,
    onPlusClick,
  }
}

export default ItemCounterAction
