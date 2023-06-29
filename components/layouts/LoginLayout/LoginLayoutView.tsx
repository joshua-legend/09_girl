import React from 'react'
import { Box as Main, BoxProps } from '@mui/material'
import { LoginLayoutProps } from '@components/layouts/LoginLayout/LoginLayout'

type LoginLayoutViewProps = {}

const LoginLayoutView = ({ children }: LoginLayoutViewProps & LoginLayoutProps) => {
  const uiConfig = {
    Main: {
      component: 'main',
      sx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        margin: '60px 0',
      },
    } as BoxProps,
  }

  return (
    <>
      <Main {...uiConfig.Main}>{children}</Main>
    </>
  )
}

export default LoginLayoutView
