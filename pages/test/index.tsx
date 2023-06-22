import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React, { useState } from 'react'
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid'
import { useDemoData } from '@mui/x-data-grid-generator'

type CheckAuthenticationResponse = {
  success: boolean
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  // const clientCookie = context.req.headers.cookie ?? ''
  // const response = await axios.get<CheckAuthenticationResponse>(`${process.env.API_URL}/checkAuthentication`, {
  //   headers: {
  //     ...(clientCookie && { Cookie: clientCookie }),
  //   },
  //   withCredentials: true,
  // })
  //
  // if (!response?.data.success) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: PATH.ADMIN_LOGIN_PAGE,
  //     },
  //   }
  // }
  //
  // const responseItems = await axios.get(`${process.env.API_URL}/getItemsByStore/1`, {
  //   withCredentials: true,
  // })
  //
  // const itemsWithId = responseItems.data.data.items.map((item, idx) => {
  //   return {
  //     ...item,
  //     id: idx,
  //   }
  // })

  return {
    props: {},
  }
}

const Index: NextPage = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  })

  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>([])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          console.log(newRowSelectionModel)
          setRowSelectionModel(newRowSelectionModel)
        }}
        rowSelectionModel={rowSelectionModel}
        {...data}
      />
    </div>
  )
}

export default Index
