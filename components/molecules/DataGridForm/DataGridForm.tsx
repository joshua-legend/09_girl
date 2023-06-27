import React, { useState } from 'react'
import ItemInputFormView, { ItemInputFormViewProps } from '@components/molecules/ItemInputForm/ItemInputFormView'
import ItemInputFormAction, { ItemInputFormActionHandlersResult } from '@components/molecules/ItemInputForm/ItemInputFormAction'
import DataGridFormView, { DataGridFormViewProps } from '@components/molecules/DataGridForm/DataGridFormView'
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import numeral from 'numeral'
import DataGridFormAction, { DataGridFormActionProps } from '@components/molecules/DataGridForm/DataGridFormAction'

export type Item = { name: string; price: number; _id: string }

export type DataGridFormProps = {
  items: Item[]
}
const DataGridForm = ({ items }: DataGridFormProps) => {
  const [rows, setRows] = useState<Item[]>(items)
  const [selectionModel, setSelectionModel] = useState([])
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
