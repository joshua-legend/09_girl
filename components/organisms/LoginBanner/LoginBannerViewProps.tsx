import React, { FormEvent, SyntheticEvent } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Button, ButtonProps, Container, ContainerProps, TextField, TextFieldProps, TypographyProps } from '@mui/material'
import Typography from '@mui/material/Typography'

export type LoginBannerViewProps = {
  handleLogin: ((event: SyntheticEvent) => void) | undefined
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

  return (
    <Container {...uiConfig.container}>
      <Typography {...uiConfig.loginTypo}>로그인</Typography>
      <form onSubmit={props.handleLogin}>
        <TextField {...uiConfig.idText} />
        <TextField {...uiConfig.pwText} />
        <Button {...uiConfig.loginBtn}>로그인</Button>
      </form>
    </Container>
  )
}

export default LoginBannerView
