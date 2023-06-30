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
    Logout: {
      variant: 'contained',
      onClick: async () => {
        try {
          const response = await axios.get(`${process.env.API_URL}/auth/naver/disconnect`)
          if (response.status === 200) {
            console.log('네이버 계정 연동 해제 성공')
          } else {
            console.log('네이버 계정 연동 해제 실패')
          }
        } catch (error) {
          console.error(error)
        }
      },
      sx: {},
    } as ButtonProps,
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Button {...uiConfig.Confirm}>로그인 하기</Button>
        <Button {...uiConfig.Logout}>로그아웃 하기</Button>
        <a href='http://localhost:8080/auth/naver'>test</a>
      </Box>
    </>
  )
}

export default Home
