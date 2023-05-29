import React, { SyntheticEvent } from 'react'
import useTotalStore from '../../../store/useTotalStore'

export type DeletePanelActionProps = {}
export type DeletePanelActionHandlersResult = {
  onDelete: () => void
}

const DeletePanelAction = (): DeletePanelActionHandlersResult => {
  const { deleteAll } = useTotalStore()
  const onDelete = () => deleteAll()

  return {
    onDelete,
  }
}

export default DeletePanelAction
