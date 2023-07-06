import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import PATH from '../../constants/path'
import { IntroBannerProps } from '@components/molecules/IntroBanner/IntroBanner'
import ItemInputForm from '@components/molecules/ItemInputForm/ItemInputForm'
import DataGridForm from '@components/molecules/DataGridForm/DataGridForm'
import DataButtonGroup from '@components/molecules/DataButtonGroup/DataButtonGroup'
import { Box } from '@mui/material'
import { CheckAuthenticationResponse } from '../../utils/verifyToken'

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

  const originData = responseItems.data.data.items.map((item) => ({
    ...item,
  }))

  return {
    props: {
      storeName: responseItems.data.data.storeName,
      items: originData,
    },
  }
}
export type Item = { name: string; price: number; _id: string }
type ProcessProps = {
  storeName?: IntroBannerProps
  items: Item[]
}

const Index: NextPage<ProcessProps> = ({ items }: ProcessProps) => {
  const [rows, setRows] = useState<Item[]>(items)
  const [selectionModel, setSelectionModel] = useState([])
  return (
    <Box sx={{ padding: '1rem' }}>
      <ItemInputForm setRows={setRows} />
      <DataGridForm rows={rows} selectionModel={selectionModel} setSelectionModel={setSelectionModel} />
      <DataButtonGroup storeID={1} originData={items} selectionModel={selectionModel} rows={rows} setRows={setRows} />
    </Box>
  )
}

export default Index
