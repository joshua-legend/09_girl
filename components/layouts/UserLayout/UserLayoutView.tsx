import React from 'react'
import { Box as Main, BoxProps } from '@mui/material'
import { UserLayoutProps } from '@components/layouts/UserLayout/UserLayout'

type UserLayoutViewProps = {} & UserLayoutProps

const UserLayoutView = ({ children }: UserLayoutViewProps) => {
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

export default UserLayoutView
