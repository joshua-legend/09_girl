import React, { ComponentProps, Dispatch } from 'react'

export type ItemCounterActionsResult = {
  onMinusClick: () => void
  onPlusClick: () => void
}

export type ItemCounterActionProps = {
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
}

const ItemCounterAction = ({ quantity, setQuantity }: ItemCounterActionProps): ItemCounterActionsResult => {
  const onMinusClick = () =>
    setQuantity((prevState) => {
      if (prevState === 0) return prevState
      else return prevState - 1
    })
  const onPlusClick = () =>
    setQuantity((prevState) => {
      return prevState + 1
    })

  return {
    onMinusClick,
    onPlusClick,
  }
}

export default ItemCounterAction
