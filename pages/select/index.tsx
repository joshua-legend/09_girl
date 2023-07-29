import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import jwt from 'jsonwebtoken'
import StoreCard from '@components/molecules/StoreCard/StoreCard'
import { Box, BoxProps, TypographyProps } from '@mui/system'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../constants/fonts'
import { verifyToken } from '../../utils/verifyToken'
import Divider from '@components/atoms/Divider/Divider'
import PageInputForm from '@components/molecules/PageInputForm/PageInputForm'
import PageGridForm from '@components/molecules/PageGridForm/PageGridForm'
import { PageType } from '../admin'
import axios from 'axios'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const isTokenValid = await verifyToken(context)
  if (!isTokenValid) {
    return { redirect: { destination: '/', permanent: false } }
  }
  const { req } = context
  const JWT_SECRET = process.env.JWT_SECRET || 'defaultSecret'

  const gochunItems = await axios.get(`${process.env.API_URL}/getPagesByStore/3`, {
    withCredentials: true,
  })

  const gochonData = gochunItems.data.data.items

  try {
    const token = req.cookies.token as string
    const payload = jwt.verify(token, JWT_SECRET)
    return {
      props: {
        gochonData,
      },
    }
  } catch (error) {
    return { redirect: { destination: '/', permanent: false } }
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
  gochonData: PageType[]
}
const Index: NextPage = ({ gochonData }: ProcessProps) => {
  const [gochonRows, setGochonRows] = useState<PageType[]>(gochonData)
  const [gochonModel, setGochonModel] = useState<any[]>([])
  const uiConfig = {
    Container: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
      },
    } as BoxProps,
    Title: {
      sx: {
        fontFamily: FONTS.PRETENDARD,
        fontSize: '24px',
        lineHeight: '115%',
        fontWeight: '700',
        letterSpacing: '-0.2px',
        color: 'rgb(88, 89, 91)',
        marginLeft: '5px',
      },
    } as TypographyProps,
  }

  return (
    <>
      <Box {...uiConfig.Container}>
        <Box sx={{ padding: '3rem' }}>
          <PageInputForm name={'고촌점'} setRows={setGochonRows} rows={gochonRows} selectionModel={gochonModel} />
          <PageGridForm rows={gochonRows} selectionModel={gochonModel} setSelectionModel={setGochonModel} />
        </Box>
      </Box>
    </>
  )
}

export default Index
