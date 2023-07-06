import React, { SyntheticEvent } from 'react'

export type DeletePanelActionProps = {}
export type DeletePanelActionHandlersResult = {
  onDelete: () => void
}

const DeletePanelAction = (): DeletePanelActionHandlersResult => {
  const onDelete = () => {
    console.log('asd')
  }

  return {
    onDelete,
  }
}

export default DeletePanelAction
