import React, { FormEvent, SyntheticEvent } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Button, ButtonProps, Container, ContainerProps, TextField, TextFieldProps, TypographyProps } from '@mui/material'
import Typography from '@mui/material/Typography'
import { COLORS } from '../../../constants/colors'
import axios, { AxiosResponse } from 'axios'
import { ResType } from '../../../utils/axios'

export type LoginBannerViewProps = {
  handleLogin: ((event: SyntheticEvent) => void) | undefined
  isSuccess: boolean
}

const LoginBannerView = (props: LoginBannerViewProps) => {
  const uiConfig = {
    container: {
      maxWidth: 'sm',
      sx: {
        marginTop: '5rem',
      },
    } as ContainerProps,
    loginTypo: {
      variant: 'h5',
      align: 'center',
      gutterBottom: true,
    } as TypographyProps,
    failTypo: {
      align: 'center',
      gutterBottom: true,
      sx: {
        color: COLORS['WARNING'],
      },
    } as TypographyProps,
    idText: {
      label: '아이디',
      name: 'username',
      variant: 'outlined',
      fullWidth: true,
      margin: 'normal',
    } as TextFieldProps,
    pwText: {
      label: '비밀번호',
      name: 'password',
      fullWidth: true,
      type: 'password',
      variant: 'outlined',
      margin: 'normal',
    } as TextFieldProps,
    loginBtn: {
      type: 'submit',
      variant: 'contained',
      color: 'primary',
      fullWidth: true,
    } as ButtonProps,
  }
  const handleLogin = async (e) => {
    axios
      .get(`${process.env.API_URL}/set-cookie`)
      .then((response: AxiosResponse<ResType>) => {
        console.log(response.data)
        if (response.data.success) {
        } else {
        }
      })
      .catch((reason) => {})
  }

  return (
    <Container {...uiConfig.container}>
      <Typography {...uiConfig.loginTypo}>로그인</Typography>
      <form onSubmit={props.handleLogin}>
        <TextField {...uiConfig.idText} />
        <TextField {...uiConfig.pwText} />
        {props.isSuccess ? null : <Typography {...uiConfig.failTypo}>아이디 또는 비밀번호를 다시 한번 확인해주세요.</Typography>}
        <Button {...uiConfig.loginBtn}>로그인</Button>
      </form>
      <button onClick={handleLogin}>로그인이다</button>
    </Container>
  )
}

export default LoginBannerView
