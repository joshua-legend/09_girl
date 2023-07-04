import type { NextPage } from 'next'
import React, { useState } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import cookie from 'react-cookies'
import { Box, Button, ButtonProps, TextField, TextFieldProps, Typography } from '@mui/material'
import axios from 'axios'
import { BoxProps, fontSize, height, lineHeight, margin, TypographyProps } from '@mui/system'
import LoginButton from '@components/atoms/LoginButton/LoginButton'
import { auto, bottom } from '@popperjs/core'
import { static } from 'express'
import Footer from '@components/atoms/Footer/Footer'
import MainPanel from '@components/atoms/MainPanel/MainPanel'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  }
}
type ProcessProps = {
  props: {}
}
const Home: NextPage = ({}: ProcessProps) => {
  const uiConfig = {
    Buttons: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem 3rem 3rem',
      },
    } as BoxProps,
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
      <MainPanel />
      <Box {...uiConfig.Buttons}>
        <LoginButton sns={'네이버'} href={'/auth/naver'} bgColor={'#1EC800'} logo={'/images/logo/naver_logo.png'} />
        <LoginButton sns={'카카오'} href={'/auth/kakao'} color={'rgb(59, 29, 30)'} bgColor={'#FEE500'} logo={'/images/logo/kakao_logo.png'} />
        <LoginButton sns={'구글'} href={'/auth/naver'} color={'rgb(59, 29, 30)'} bgColor={'white'} logo={'/images/logo/google_logo.png'} />
      </Box>
      <Footer />
      {/*<Button {...uiConfig.Logout}>회원탈퇴</Button>*/}
    </>
  )
}

export default Home
