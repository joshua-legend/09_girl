import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import cookie from 'react-cookies'
import { Box, Button, ButtonProps, TextField, TextFieldProps } from '@mui/material'
import IntroBanner from '@components/molecules/IntroBanner/IntroBanner'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  }
}
type ProcessProps = {
  props: {}
}
const Index: NextPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  useEffect(() => {
    setIsLogin(cookie.load('09girl') || false)
  }, [])

  const uiConfig = {
    Phone: {
      placeholder: '휴대폰 번호 ex)01012345678',
      variant: 'outlined',
      size: 'medium',
      type: 'number',
      value: phoneNumber,
      onChange: (e) => {
        setPhoneNumber(e.currentTarget.value)
      },
      sx: {},
    } as TextFieldProps,
    LogOut: {
      variant: 'contained',
      onClick: () => {
        cookie.remove('09girl', { path: '/login' })
        setIsLogin(false)
      },
      sx: {},
    } as ButtonProps,
    Confirm: {
      variant: 'contained',
      onClick: () => {
        cookie.save('09girl', phoneNumber, { maxAge: 3600, path: '/login' })
        setIsLogin(true)
      },
      sx: {},
    } as ButtonProps,
  }

  return (
    <>
      {isLogin ? (
        <>
          <IntroBanner storeName={'환영'} />
          <Button {...uiConfig.LogOut}>로그아웃</Button>
          {/*<Box sx={{ display: 'flex' }}>*/}
          {/*  <TextField {...uiConfig.Phone} />*/}
          {/*  <Button {...uiConfig.Confirm}>로그인 하기</Button>*/}
          {/*</Box>*/}
        </>
      ) : (
        <>
          <IntroBanner storeName={'공구하는 뇨자'} />
          <Box sx={{ display: 'flex' }}>
            <TextField {...uiConfig.Phone} />
            <Button {...uiConfig.Confirm}>로그인 하기</Button>
          </Box>
        </>
      )}
    </>
  )
}

export default Index
