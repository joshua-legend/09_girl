import React from 'react'

export type ItemPickerBannerActionHandlers = {
  onSubtract: (price: number) => void
  onAdd: (price: number) => void
}
export type ItemPickerBannerActionProps = {
  setTotal: React.Dispatch<React.SetStateAction<number>>
}

const ItemPickerBannerAction = ({ setTotal }: ItemPickerBannerActionProps): ItemPickerBannerActionHandlers => {
  const onSubtract = (price) => setTotal((prevTotal) => prevTotal - price)
  const onAdd = (price) => setTotal((prevTotal) => prevTotal + price)
  return {
    onSubtract,
    onAdd,
  }
}

export default ItemPickerBannerAction
