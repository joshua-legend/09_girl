import React, { ChangeEvent } from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { DataGridFormActionHandlersResult, DataGridFormActionProps } from '@components/molecules/DataGridForm/DataGridFormAction'
import { Item } from '@components/molecules/DataGridForm/DataGridForm'

export type DataGridFormViewProps = {
  rows: Item[]
  columns: GridColDef[]
  selectionModel: any[]
  setSelectionModel: (selectedRowsData: string[]) => void
}

const DataGridFormView = ({ rows, columns, selectionModel, setSelectionModel }: DataGridFormViewProps & DataGridFormActionHandlersResult) => {
  const uiConfig = {}

  return (
    <DataGrid
      autoHeight
      getRowId={(row) => row._id}
      rows={rows as GridRowsProp<any>}
      columns={columns}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      onRowSelectionModelChange={(newSelectionModel) => {
        const selectedRowsData = newSelectionModel.map((id) => rows.find((row) => row._id === id)).map((value) => value._id)
        setSelectionModel(selectedRowsData)
      }}
      rowSelectionModel={selectionModel}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
    />
  )
}

export default DataGridFormView
