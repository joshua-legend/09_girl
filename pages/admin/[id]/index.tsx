import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { IntroBannerProps } from '@components/molecules/IntroBanner/IntroBanner'
import ItemInputForm, { ItemInputFormProps } from '@components/molecules/ItemInputForm/ItemInputForm'
import DataGridForm, { DataGridFormProps } from '@components/molecules/DataGridForm/DataGridForm'
import DataButtonGroup, { DataButtonGroupProps } from '@components/molecules/DataButtonGroup/DataButtonGroup'
import { Box } from '@mui/material'
import { redirectIfError, redirectIfUnauthorized } from '../../../utils/redirects'
import { CheckAuthenticationResponse } from '../../../utils/verifyToken'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { id } = context.query
  if (![1, 2, 3].includes(parseInt(String(id)) || 0)) return redirectIfError()

  // if ([1, 2, 3].includes(parseInt(String(!!id)) || 0)) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: PATH.ERROR404,
  //     },
  //   }
  // }

  const clientCookie = context.req.headers.cookie ?? ''
  const response = await axios.get<CheckAuthenticationResponse>(`${process.env.API_URL}/checkAuthentication`, {
    headers: {
      ...(clientCookie && { Cookie: clientCookie }),
    },
    withCredentials: true,
  })

  if (!response?.data.success) redirectIfUnauthorized()
  // if (!response?.data.success) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: PATH.ADMIN_LOGIN_PAGE,
  //     },
  //   }
  // }

  const responseItems = await axios.get(`${process.env.API_URL}/getItemsByStore/${id}`, {
    withCredentials: true,
  })

  const originData = responseItems.data.data.items.map((item: any) => ({
    ...item,
  }))
  return {
    props: {
      id,
      storeName: responseItems.data.data.storeName,
      items: originData,
    },
  }
}
export type Item = { name: string; price: number; _id: string }
type ProcessProps = {
  id: number
  storeName?: string
  items: Item[]
}

const Index: NextPage<ProcessProps> = ({ id, storeName, items }: ProcessProps) => {
  const [rows, setRows] = useState<Item[]>(items)
  const [selectionModel, setSelectionModel] = useState<any[]>([])
  const props = {
    input: { storeName, setRows } as ItemInputFormProps,
    grid: {
      rows,
      selectionModel,
      setSelectionModel,
    } as DataGridFormProps,
    buttons: {
      rows,
      setRows,
      storeID: id,
      originData: items,
      selectionModel,
    } as DataButtonGroupProps,
  }
  return (
    <Box sx={{ padding: '1rem' }}>
      <ItemInputForm {...props.input} />
      <DataGridForm {...props.grid} />
      <DataButtonGroup {...props.buttons} />
    </Box>
  )
}

export default Index
