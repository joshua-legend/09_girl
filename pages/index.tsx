import type { NextPage } from 'next'
import React, { useState } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import cookie from 'react-cookies'
import { Box, Button, ButtonProps, TextField, TextFieldProps } from '@mui/material'
import axios from 'axios'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {
      a: 'myCookie',
    },
  }
}
type ProcessProps = {
  props: {
    a: any
  }
}
const Home: NextPage = ({ a }: ProcessProps) => {
  const uiConfig = {
    Confirm: {
      variant: 'contained',
      onClick: async () => {
        const res = await axios.get(`${process.env.API_URL}/auth/naver`, { withCredentials: true })
        console.log(res)
      },
      sx: {},
    } as ButtonProps,
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Button {...uiConfig.Confirm}>로그인 하기</Button>
        <a href='http://localhost:8080/auth/naver'>test</a>
      </Box>
    </>
  )
}

export default Home
