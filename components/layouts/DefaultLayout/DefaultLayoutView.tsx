import React from 'react'
import { Box as Main, BoxProps } from '@mui/material'
import { DefaultLayoutProps } from '@components/layouts/DefaultLayout/DefaultLayout'

type DefaultLayoutViewProps = {} & DefaultLayoutProps

const DefaultLayoutView = ({ children }: DefaultLayoutViewProps) => {
  const uiConfig = {
    Main: {
      component: 'main',
      sx: {
        marginTop: '60px',
      },
    } as BoxProps,
  }

  return (
    <>
      <Main {...uiConfig.Main}>{children}</Main>
    </>
  )
}

export default DefaultLayoutView
