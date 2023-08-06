import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import ItemInputForm from '@components/molecules/ItemInputForm/ItemInputForm'
import DataGridForm from '@components/molecules/DataGridForm/DataGridForm'
import { Box } from '@mui/material'
import EventInputForm from '@components/molecules/EventInputForm/EventInputForm'
import SendButton from '@components/molecules/SendButton/SendButton'
import axios from 'axios'
import { CheckAuthenticationResponse } from '../../../utils/verifyToken'
import PATH from '../../../constants/path'

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

  const originData = responseItems.data.data.items.map((item: any) => ({
    ...item,
  }))

  const posts = await axios.get(`${process.env.API_URL}/getBandPosts`, {
    withCredentials: true,
  })

  return {
    props: {
      items: [],
      posts: posts.data.data,
    },
  }
}

export type EventInfo = {
  title: string
  startDay: Date | string
  endDay: Date | string
  store: string
  post_key: string
}

export type Item = { name: string; price: number; _id: string }
export type BandPost = {
  content: string
  post_key: string
}
type ProcessProps = {
  items: Item[]
  posts: BandPost[]
}

const Index: NextPage<ProcessProps> = ({ items, posts }: ProcessProps) => {
  const [info, setInfo] = useState<EventInfo>({ title: '', startDay: '', endDay: '', store: 'gochon_pages', post_key: '' })
  const [rows, setRows] = useState<Item[]>(items)
  const [selectionModel, setSelectionModel] = useState<any[]>([])
  return (
    <Box sx={{ padding: '3rem' }}>
      <EventInputForm info={info} setInfo={setInfo} post={posts} />
      <ItemInputForm setRows={setRows} rows={rows} selectionModel={selectionModel} />
      <DataGridForm rows={rows} selectionModel={selectionModel} setSelectionModel={setSelectionModel} />
      <SendButton rows={rows} info={info} />
    </Box>
  )
}

export default Index
