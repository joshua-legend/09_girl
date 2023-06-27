import React, { useState } from 'react'
import ItemInputFormView, { ItemInputFormViewProps } from '@components/molecules/ItemInputForm/ItemInputFormView'
import ItemInputFormAction, { ItemInputFormActionHandlersResult } from '@components/molecules/ItemInputForm/ItemInputFormAction'
import DataButtonGroupAction, { DataButtonGroupActionHandlersResult } from '@components/molecules/DataButtonGroup/DataButtonGroupAction'
import { Item } from '@components/molecules/DataGridForm/DataGridForm'
import DataButtonGroupView, { DataButtonGroupViewProps } from '@components/molecules/DataButtonGroup/DataButtonGroupView'

export type DataButtonGroupProps = {
  storeID: number
  originData: Item[]
}
const DataButtonGroup = ({ storeID, originData }: DataButtonGroupProps) => {
  const [rows, setRows] = useState<Item[]>(originData)
  const [selectionModel, setSelectionModel] = useState([])
  const actions = DataButtonGroupAction({ originData, rows, setRows, storeID, selectionModel })
  const newProps = {
    ...actions,
  } as DataButtonGroupViewProps & DataButtonGroupActionHandlersResult

  return <DataButtonGroupView {...newProps} />
}

export default DataButtonGroup
