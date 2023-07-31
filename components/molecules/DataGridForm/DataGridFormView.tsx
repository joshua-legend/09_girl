import React, { ChangeEvent } from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { DataGridFormActionHandlersResult, DataGridFormActionProps } from '@components/molecules/DataGridForm/DataGridFormAction'
import { Item, PageType } from '../../../pages/admin'
import { Stack } from '@mui/system'

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
        const selectedRowsData = newSelectionModel.map((id) => rows.find((row) => row._id === id)?._id || '0')
        setSelectionModel(selectedRowsData)
      }}
      rowSelectionModel={selectionModel}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      components={{
        NoRowsOverlay: () => (
          <Stack height='100%' alignItems='center' justifyContent='center'>
            상품을 등록해 주세요.
          </Stack>
        ),
        NoResultsOverlay: () => (
          <Stack height='100%' alignItems='center' justifyContent='center'>
            Local filter returns no result
          </Stack>
        ),
      }}
    />
  )
}

export default DataGridFormView
