import React, { useState } from 'react'
import ItemInputFormView, { ItemInputFormViewProps } from '@components/molecules/ItemInputForm/ItemInputFormView'
import ItemInputFormAction, { ItemInputFormActionHandlersResult } from '@components/molecules/ItemInputForm/ItemInputFormAction'
import DataGridFormView, { DataGridFormViewProps } from '@components/molecules/DataGridForm/DataGridFormView'
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import numeral from 'numeral'
import DataGridFormAction, { DataGridFormActionProps } from '@components/molecules/DataGridForm/DataGridFormAction'
import { Item } from '../../../pages/admin'

export type DataGridFormProps = {
  rows: Item[]
  selectionModel: any[]
  setSelectionModel: React.Dispatch<React.SetStateAction<any[]>>
}
const DataGridForm = ({ rows, selectionModel, setSelectionModel }: DataGridFormProps) => {
  const columns: GridColDef[] = [
    { field: 'name', headerName: '제품명', flex: 1, headerAlign: 'center', align: 'center', disableColumnMenu: true, sortable: false },
    { field: 'price', headerName: '가격', flex: 1, headerAlign: 'center', align: 'center', disableColumnMenu: true, sortable: false, valueGetter: (params: GridValueGetterParams) => `${numeral(params.row.price).format('0,0')}` },
  ]

  const actions = DataGridFormAction({})
  const newProps = {
    rows,
    columns,
    ...actions,
    selectionModel,
    setSelectionModel,
  } as DataGridFormViewProps & DataGridFormActionProps

  return <DataGridFormView {...newProps} />
}

export default DataGridForm
