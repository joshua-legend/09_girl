import React, { useState } from 'react'
import ItemInputFormView, { ItemInputFormViewProps } from '@components/molecules/ItemInputForm/ItemInputFormView'
import ItemInputFormAction, { ItemInputFormActionHandlersResult } from '@components/molecules/ItemInputForm/ItemInputFormAction'
import DataButtonGroupAction, { DataButtonGroupActionHandlersResult } from '@components/molecules/DataButtonGroup/DataButtonGroupAction'
import { Item } from '@components/molecules/DataGridForm/DataGridForm'
import DataButtonGroupView, { DataButtonGroupViewProps } from '@components/molecules/DataButtonGroup/DataButtonGroupView'

export type DataButtonGroupProps = {
  rows: Item[]
  setRows: React.Dispatch<React.SetStateAction<any>>
  storeID: number
  originData: Item[]
  selectionModel: any
}
const DataButtonGroup = ({ rows, setRows, storeID, originData, selectionModel }: DataButtonGroupProps) => {
  const actions = DataButtonGroupAction({ originData, rows, setRows, storeID, selectionModel })
  const newProps = {
    ...actions,
  } as DataButtonGroupViewProps & DataButtonGroupActionHandlersResult

  return <DataButtonGroupView {...newProps} />
}

export default DataButtonGroup
