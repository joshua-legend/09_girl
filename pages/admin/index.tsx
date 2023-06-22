import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import PATH from '../../constants/path'
import { DataGrid, GridColDef, GridRowsProp, GridValueGetterParams, useGridApiRef } from '@mui/x-data-grid'
import { IntroBannerProps } from '@components/molecules/IntroBanner/IntroBanner'
import { Box, BoxProps, Button, ButtonProps, ContainerProps, TextField, TextFieldProps, TypographyProps } from '@mui/material'
import numeral from 'numeral'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../constants/fonts'

type CheckAuthenticationResponse = {
  success: boolean
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const clientCookie = context.req.headers.cookie ?? ''
  const response = await axios.get<CheckAuthenticationResponse>(`${process.env.API_URL}/checkAuthentication`, {
    headers: {
      ...(clientCookie && { Cookie: clientCookie }),
    },
    withCredentials: true,
  })

  if (!response?.data.success) {
    return {
      redirect: {
        permanent: false,
        destination: PATH.ADMIN_LOGIN_PAGE,
      },
    }
  }

  const responseItems = await axios.get(`${process.env.API_URL}/getItemsByStore/1`, {
    withCredentials: true,
  })

  return {
    props: {
      storeName: responseItems.data.data.storeName,
      items: responseItems.data.data.items,
    },
  }
}
type Item = { name: string; price: number; _id: string }

type ProcessProps = {
  storeName?: IntroBannerProps
  items: Item[]
}

const Index: NextPage<ProcessProps> = ({ items }: ProcessProps) => {
  console.log(items)
  const columns: GridColDef[] = [
    { field: 'name', headerName: '제품명', flex: 1, headerAlign: 'center', align: 'center', disableColumnMenu: true, sortable: false },
    { field: 'price', headerName: '가격', flex: 1, headerAlign: 'center', align: 'center', disableColumnMenu: true, sortable: false, valueGetter: (params: GridValueGetterParams) => `${numeral(params.row.price).format('0,0')}` },
    // {
    //   description: 'This column has a value getter and is not sortable.',
    //   valueGetter: (params: GridValueGetterParams) => `${params.row.name || ''} ${params.row.lastName || ''}`,
    // },
  ]

  const [rows, setRows] = useState<Item[]>(items)
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [selectionModel, setSelectionModel] = useState([])

  const uiConfig = {
    Typo: {
      variant: 'h6',
      sx: {
        marginBottom: '1rem',
        fontFamily: FONTS.PRETENDARD,
      },
    } as TypographyProps,
    item: {
      placeholder: '제품명',
      variant: 'outlined',
      size: 'small',
      value: name,
      onChange: (e) => {
        setName(e.target.value)
      },
      sx: {
        marginBottom: '1rem',
      },
    } as TextFieldProps,
    price: {
      placeholder: '가격',
      variant: 'outlined',
      size: 'small',
      value: price,
      onChange: (e) => {
        setPrice(e.target.value)
      },
    } as TextFieldProps,
    buttonBox: {
      sx: {
        display: 'flex',
        marginTop: '1rem',
        justifyContent: 'space-around',
      },
    } as BoxProps,
    deleteBtn: {
      variant: 'contained',
      sx: {
        width: '45%',
      },
    } as ButtonProps,
  }

  const addItem = (e) => {
    setRows((prevState) => [
      ...prevState,
      {
        name: name,
        price: parseInt(price) || 0,
        _id: uuidv4(),
      },
    ])
    setName('')
    setPrice('')
  }
  const deleteRows = (e) => {
    const filteredItems = rows.filter((item) => !selectionModel.includes(item._id))
    setRows(filteredItems)
  }
  const router = useRouter()
  const refreshPage = () => {
    router.reload()
  }

  const postButton = async () => {
    const data = rows.map(({ _id, ...rest }) => rest)
    const response = await axios.post(`${process.env.API_URL}/postItemsByStore/1`, data)
    console.log(response)
  }

  return (
    <>
      <Box sx={{ padding: '1rem' }}>
        <Typography {...uiConfig.Typo}>아이템 추가</Typography>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <TextField {...uiConfig.item} />
            <TextField {...uiConfig.price} />
          </Box>
          <Button variant={'contained'} onClick={addItem}>
            추가하기
          </Button>
        </Box>
      </Box>

      <div style={{ padding: '1rem' }}>
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
        <Box {...uiConfig.buttonBox}>
          <Button {...uiConfig.deleteBtn} onClick={refreshPage}>
            복구하기
          </Button>
          <Button {...uiConfig.deleteBtn} onClick={deleteRows}>
            삭제하기
          </Button>
        </Box>
      </div>

      <Button variant={'contained'} onClick={postButton}>
        전송하기
      </Button>
    </>
  )
}

export default Index
