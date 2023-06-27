import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import PATH from '../../constants/path'
import { DataGrid, GridColDef, GridRowsProp, GridValueGetterParams, useGridApiRef } from '@mui/x-data-grid'
import { IntroBannerProps } from '@components/molecules/IntroBanner/IntroBanner'
import { Box, BoxProps, Button, ButtonGroup, ButtonGroupProps, ButtonProps, ContainerProps, TextField, TextFieldProps, TypographyProps } from '@mui/material'
import numeral from 'numeral'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../constants/fonts'
import ItemInputForm from '@components/molecules/ItemInputForm/ItemInputForm'
import DataGridForm from '@components/molecules/DataGridForm/DataGridForm'
import DataButtonGroup from '@components/molecules/DataButtonGroup/DataButtonGroup'

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
type Item = { name: string; price: number; _id: string }

type ProcessProps = {
  storeName?: IntroBannerProps
  items: Item[]
}

const Index: NextPage<ProcessProps> = ({ items }: ProcessProps) => {
  const [rows, setRows] = useState<Item[]>(items)
  const [selectionModel, setSelectionModel] = useState([])
  return (
    <>
      <ItemInputForm setRows={setRows} />
      <div style={{ padding: '1rem' }}>
        <DataGridForm rows={rows} selectionModel={selectionModel} setSelectionModel={setSelectionModel} />
        <DataButtonGroup storeID={1} originData={items} selectionModel={selectionModel} rows={rows} setRows={setRows} />
      </div>
    </>
  )
}

export default Index
