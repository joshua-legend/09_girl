import React from 'react'
import DeletePanelView, { DeletePanelViewProps } from '@components/atoms/DeletePanel/DeletePanelView'
import DeletePanelAction, { DeletePanelActionHandlersResult } from '@components/atoms/DeletePanel/DeletePanelAction'

export type DeletePanelProps = {}

const DeletePanel = (props: DeletePanelProps) => {
  const actionHandlers = DeletePanelAction()
  const newProps = {
    ...props,
    onDelete: actionHandlers.onDelete,
  } as DeletePanelViewProps & DeletePanelActionHandlersResult
  return <DeletePanelView {...newProps} />
}

export default DeletePanel
