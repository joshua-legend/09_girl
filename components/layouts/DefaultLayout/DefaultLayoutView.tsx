import React from 'react'
import { DefaultLayoutActionProps } from './DefaultLayoutAction'
import { Box as Main, BoxProps } from '@mui/material'
import { FONTS } from '@styles/fonts'
import { TypographyProps } from '@mui/material/Typography'

type ButtonViewProps = {} & DefaultLayoutActionProps

const DefaultLayoutView = ({ children }: ButtonViewProps) => {
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
