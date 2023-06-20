import React from 'react'
import { Box as Main, BoxProps } from '@mui/material'
import { DefaultLayoutProps } from '@components/layouts/DefaultLayout/DefaultLayout'
import { AdminLayoutProps } from '@components/layouts/AdminLayout/AdminLayout'

type AdminLayoutViewProps = {} & AdminLayoutProps

const AdminLayoutView = ({ children }: AdminLayoutViewProps) => {
  const uiConfig = {
    Main: {
      component: 'main',
      sx: {
        margin: '60px 0',
        paddingBottom: '100px',
      },
    } as BoxProps,
  }

  return (
    <>
      <Main {...uiConfig.Main}>{children}</Main>
    </>
  )
}

export default AdminLayoutView
