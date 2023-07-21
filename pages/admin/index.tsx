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
import EventInputForm from '@components/molecules/EventInputForm/EventInputForm'
import SendButton from '@components/molecules/SendButton/SendButton'
import PageGridForm from '@components/molecules/PageGridForm/PageGridForm'
import PageInputForm from '@components/molecules/PageInputForm/PageInputForm'

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

  const unyangItems = await axios.get(`${process.env.API_URL}/getPagesByStore/1`, {
    withCredentials: true,
  })
  const janggiItems = await axios.get(`${process.env.API_URL}/getPagesByStore/2`, {
    withCredentials: true,
  })
  const gochunItems = await axios.get(`${process.env.API_URL}/getPagesByStore/3`, {
    withCredentials: true,
  })

  const unyangData = unyangItems.data.data.items
  const janggiData = janggiItems.data.data.items
  const gochonData = gochunItems.data.data.items
  return {
    props: {
      unyangData,
      janggiData,
      gochonData,
    },
  }
}

export type PageType = {
  _id: string
  title: string
  startDay: Date | string
  endDay: Date | string
  store: string
  items: Item[]
}

export type Item = { name: string; price: number; _id: string }
type ProcessProps = {
  unyangData: PageType[]
  janggiData: PageType[]
  gochonData: PageType[]
}

const Index: NextPage<ProcessProps> = ({ unyangData, janggiData, gochonData }: ProcessProps) => {
  const [unyangRows, setUnyangRows] = useState<PageType[]>(unyangData)
  const [unyangModel, setUnyangModel] = useState<any[]>([])
  const [janggiRows, setJanggiRows] = useState<PageType[]>(janggiData)
  const [janggiModel, setJanggiModel] = useState<any[]>([])
  const [gochonRows, setGochonRows] = useState<PageType[]>(gochonData)
  const [gochonModel, setGochonModel] = useState<any[]>([])
  return (
    <>
      <Box sx={{ padding: '3rem' }}>
        <PageInputForm name={'고촌점'} setRows={setGochonRows} rows={gochonRows} selectionModel={gochonModel} />
        <PageGridForm rows={gochonRows} selectionModel={gochonModel} setSelectionModel={setGochonModel} />
      </Box>
      <Box sx={{ padding: '3rem' }}>
        <PageInputForm name={'장기점'} setRows={setJanggiRows} rows={janggiRows} selectionModel={janggiModel} />
        <PageGridForm rows={janggiRows} selectionModel={janggiModel} setSelectionModel={setJanggiModel} />
      </Box>
      <Box sx={{ padding: '3rem' }}>
        <PageInputForm name={'운양점'} setRows={setUnyangRows} rows={unyangRows} selectionModel={unyangModel} />
        <PageGridForm rows={unyangRows} selectionModel={unyangModel} setSelectionModel={setUnyangModel} />
      </Box>
    </>
  )
}

export default Index
