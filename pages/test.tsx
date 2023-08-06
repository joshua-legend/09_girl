import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Box, BoxProps } from '@mui/system'
import { Button, ButtonProps, SvgIconProps, Typography, TypographyProps } from '@mui/material'
import { FONTS } from '../constants/fonts'
import { COLORS } from '../constants/colors'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import Cookies from 'universal-cookie'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const clientId = `${process.env.NAVER_CLIENT_ID}`
  const clientSecret = `${process.env.NAVER_CLIENT_SECRET}`
  const code = context.query.code
  const state = context.query.state

  try {
    const response = await axios({
      method: 'post',
      url: 'https://nid.naver.com/oauth2.0/token',
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        state: state,
        code: code,
        redirect_uri: 'http://localhost:3001/test',
      },
    })
    console.log(response.data)
    const token = response.data.access_token
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    const profileResponse = await axios.get('https://openapi.naver.com/v1/nid/me', { headers })
    const profile = profileResponse.data.response
    const naver = await axios.post(`${process.env.API_URL}/auth/naver`, profile)
    console.log('naver', naver)
    return {
      props: {
        data: naver.data,
      },
    }
  } catch (error) {
    console.error(`Failed to get access token: ${error}`)
    return {
      props: {
        data: null,
      },
    }
  }
}
type ProcessProps = {
  props: {
    data: any
    profile: any
  }
}
const Test: NextPage = (props: ProcessProps) => {
  console.log(props)
  useEffect(() => {
    // const { data } = props
  }, [])

  const { push } = useRouter()

  const uiConfig = {
    Box: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '10rem',
        padding: ' 1rem 3rem',
      },
    } as BoxProps,
    WarnIcon: {
      sx: {
        width: '60px',
        height: '60px',
        marginBottom: '1rem',
      },
    } as SvgIconProps,
    FireFlake: {
      sx: {
        fontSize: '60px',
        fontFamily: FONTS.DONGLE,
      },
    } as TypographyProps,
    Typos: {
      sx: {
        fontSize: '28px',
        fontFamily: FONTS.DONGLE,
      },
    } as TypographyProps,
    Button: {
      variant: 'contained',
      onClick: () => {
        push('https://band.us/band/78819150')
      },
      sx: {
        marginTop: '1rem',
        fontSize: '24px',
        fontFamily: FONTS.DONGLE,
        color: COLORS.TEXT,
        backgroundColor: COLORS.PRIMARY,
      },
    } as ButtonProps,
  }

  return (
    <Box {...uiConfig.Box}>
      <Typography {...uiConfig.FireFlake}>🎉</Typography>
      <Typography {...uiConfig.Typos}>최초 로그인이 완료 되었습니다!.🥰</Typography>
      <Typography {...uiConfig.Typos}>다시 한번만 재접속 부탁드립니다.😥</Typography>
      <Button {...uiConfig.Button}>메인 페이지로</Button>
    </Box>
  )
}

export default Test
