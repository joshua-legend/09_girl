import React, { useState } from 'react'
import DataGridFormView, { DataGridFormViewProps } from '@components/molecules/DataGridForm/DataGridFormView'
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import DataGridFormAction, { DataGridFormActionProps } from '@components/molecules/DataGridForm/DataGridFormAction'
import { Item, PageType } from '../../../pages/admin'
import PageGridFormAction from '@components/molecules/PageGridForm/PageGridFormAction'
import { IconButton, Tooltip } from '@mui/material'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'
import PageGridFormView from '@components/molecules/PageGridForm/PageGridFormView'

export type PageGridFormProps = {
  rows: PageType[]
  selectionModel: any[]
  setSelectionModel: React.Dispatch<React.SetStateAction<any[]>>
}
const PageGridForm = ({ rows, selectionModel, setSelectionModel }: PageGridFormProps) => {
  const columns: GridColDef[] = [
    { field: 'title', headerName: '이벤트 제목', flex: 1, headerAlign: 'center', align: 'center', disableColumnMenu: true, sortable: false },
    { field: 'startDay', headerName: '시작 날짜', flex: 1, headerAlign: 'center', align: 'center', disableColumnMenu: true, sortable: false },
    { field: 'endDay', headerName: '마감 날짜', flex: 1, headerAlign: 'center', align: 'center', disableColumnMenu: true, sortable: false },
    { field: 'items', headerName: '품목', flex: 1, headerAlign: 'center', align: 'center', disableColumnMenu: true, sortable: false, valueGetter: (params) => params.value.map((item: Item) => `${item.name}: ${item.price}`).join(', ') },
    {
      field: '_id',
      headerName: '링크 복사',
      flex: 0.5,
      headerAlign: 'center',
      align: 'center',
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        const handleClick = () => {
          navigator.clipboard.writeText(`${process.env.LOCAL_URL}/stores/gochon/` + params.value.toString())
        }
        return (
          <Tooltip title='Copy' placement='top'>
            <IconButton onClick={handleClick}>
              <FileCopyOutlinedIcon />
            </IconButton>
          </Tooltip>
        )
      },
    },
  ]

  const actions = PageGridFormAction({})
  const newProps = {
    rows,
    columns,
    selectionModel,
    setSelectionModel,
  }

  return <PageGridFormView {...newProps} />
}

export default PageGridForm
