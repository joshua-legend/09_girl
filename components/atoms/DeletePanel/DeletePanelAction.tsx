import React, { SyntheticEvent } from 'react'
import BuyStore from '../../../store/BuyStore'

export type DeletePanelActionProps = {}
export type DeletePanelActionHandlersResult = {
  onDelete: () => void
}

const DeletePanelAction = (): DeletePanelActionHandlersResult => {
  const { setItems, itemsStore } = BuyStore()

  const onDelete = () => {
    const itemsWithQuantity = itemsStore.map((item) => ({
      ...item,
      quantity: 0,
    }))
    setItems(itemsWithQuantity)
  }

  return {
    onDelete,
  }
}

export default DeletePanelAction
