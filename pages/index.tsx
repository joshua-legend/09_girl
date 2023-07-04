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
    Container: {
      sx: {
        margin: '90px 30px 40px;',
        textAlign: 'center',
      },
    } as BoxProps,
    Image: {
      sx: {
        marginBottom: '30px',
        width: '211px',
        height: '170px',
      },
    } as BoxProps,
    MainTypo: {
      sx: {
        marginTop: '10px',
        marginBottom: '8px',
        fontSize: '22px',
        lineHeight: '26px',
      },
    } as TypographyProps,
    SubTypo: {
      sx: {
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16px',
      },
    } as TypographyProps,
    Buttons: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem 3rem 3rem',
      },
    } as BoxProps,
    Footer: {
      component: 'footer',
      sx: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 1rem',
        background: '#f5f5f7',
        color: 'rgba(50,48,56,.54)',
      },
    } as BoxProps,
    FooterName: {
      component: 'span',
      sx: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '21px',
      },
    } as TypographyProps,
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
      <Box {...uiConfig.Container}>
        <Box>
          <img style={{ width: '100%', height: '100%', borderRadius: '4px' }} src={'/static/main.jpg'} alt='' />
        </Box>
        <Typography {...uiConfig.MainTypo}>
          공구하는 뇨자,
          <br />
          이제는 쉽게 예약하자!
        </Typography>
        <Typography {...uiConfig.SubTypo}>네이버밴드부터 공구까지</Typography>
      </Box>
      <Box {...uiConfig.Buttons}>
        <LoginButton sns={'네이버'} href={'/auth/naver'} bgColor={'#1EC800'} logo={'/images/logo/naver_logo.png'} />
        <LoginButton sns={'카카오'} href={'/auth/kakao'} color={'rgb(59, 29, 30)'} bgColor={'#FEE500'} logo={'/images/logo/kakao_logo.png'} />
        <LoginButton sns={'구글'} href={'/auth/naver'} color={'rgb(59, 29, 30)'} bgColor={'white'} logo={'/images/logo/google_logo.png'} />
      </Box>
      <Box {...uiConfig.Footer}>
        <Typography {...uiConfig.FooterName}>(주)공구하는뇨자</Typography>
        <Typography {...uiConfig.FooterName}>사업자 등록번호: 0123-1234-1234</Typography>
        <Typography {...uiConfig.FooterName}>대표: 박지은</Typography>
        <Typography {...uiConfig.FooterName}>전자상거래업 | 전자상거래 소매업</Typography>
        <Typography {...uiConfig.FooterName}>경기도 김포시 고촌읍 수기로 136, 203동 203호(캐슬앤파밀리에시티 2단지)</Typography>
      </Box>
      {/*<Button {...uiConfig.Logout}>회원탈퇴</Button>*/}
    </>
  )
}

export default Home
