import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React from 'react'
import axios, { AxiosResponse } from 'axios'
import PATH from '../../constants/path'
import { DataGrid, GridColDef, GridRowsProp, GridValueGetterParams } from '@mui/x-data-grid'
import { IntroBannerProps } from '@components/molecules/IntroBanner/IntroBanner'
import { ItemPickerBannerProps } from '@components/organisms/ItemPickerBanner/ItemPickerBanner'

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
      ...responseItems.data.data,
    },
  }
}
type ProcessProps = {
  storeName?: IntroBannerProps
  items?: ItemPickerBannerProps
}
const Index: NextPage<ProcessProps> = (props: ProcessProps) => {
  const columns: GridColDef[] = [
    { field: 'name', headerName: '제품명', flex: 1 },
    { field: 'price', headerName: '가격', flex: 1 },
    // {
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   valueGetter: (params: GridValueGetterParams) => `${params.row.name || ''} ${params.row.lastName || ''}`,
    // },
  ]

  return (
    <>
      <div style={{ padding: '1rem' }}>
        <DataGrid
          getRowId={(row) => row.name}
          rows={props.items as GridRowsProp<any>}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  )
}

export default Index
