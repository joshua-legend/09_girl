import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import jwt from 'jsonwebtoken'
import StoreCard from '@components/molecules/StoreCard/StoreCard'
import { Box, BoxProps, TypographyProps } from '@mui/system'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../constants/fonts'
import { verifyToken } from '../../utils/verifyToken'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const isTokenValid = await verifyToken(context)
  if (!isTokenValid) {
    return { redirect: { destination: '/', permanent: false } }
  }
  const { req } = context
  const JWT_SECRET = process.env.JWT_SECRET
  try {
    const token = req.cookies.token
    const payload = jwt.verify(token, JWT_SECRET)
    return { props: { payload } }
  } catch (error) {
    return { redirect: { destination: '/', permanent: false } }
  }
}
type ProcessProps = {
  payload: any
}
const Index: NextPage = ({ payload }: ProcessProps) => {
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
        fontFamily: FONTS.DONGLE,
        fontSize: '45px',
        marginLeft: '10px',
      },
    } as TypographyProps,
  }

  return (
    <>
      <Box {...uiConfig.Container}>
        <Typography {...uiConfig.Title}>지점 선택</Typography>
        <StoreCard image={'/static/gurae.png'} title={'운양점'} location={'1'} />
        <StoreCard image={'/static/janggi.png'} title={'장기점'} location={'2'} />
        <StoreCard image={'/static/gochun.jpg'} title={'고촌 캐파점'} location={'3'} />
      </Box>
    </>
  )
}

export default Index
