import React, { CSSProperties } from 'react'
import AppBar, { AppBarProps } from '@mui/material/AppBar'
import { Box, Box as ImgBox, BoxProps, ButtonProps } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography, { TypographyProps } from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import { HeaderActionProps } from './HeaderAction'
import { COLORS } from '@styles/colors'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import { FONTS } from '@styles/fonts'
import { SvgIconProps } from '@mui/material'

type HeaderViewProps = {} & HeaderActionProps

const HeaderView = ({}: HeaderViewProps) => {
  const uiConfig = {
    Appbar: {
      style: {
        position: 'fixed',
        width: '100vw',
        backgroundColor: COLORS.PRIMARY,
      },
    } as AppBarProps,
    Box: {
      sx: {
        width: '70px',
        height: '100%',
      },
    } as BoxProps,
    ImgBox: {
      component: 'img',
      src: '/static/09_girl.png',
      alt: 'The house from the offer.',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    } as BoxProps,
    Typo: {
      variant: 'h5',
      style: {
        flexGrow: 1,
        fontFamily: FONTS.TITLE,
        color: COLORS.SECONDARY,
      },
    } as TypographyProps,
    Button: {
      style: {
        color: COLORS.SECONDARY,
      },
    } as ButtonProps,
  }

  return (
    <AppBar {...uiConfig.Appbar}>
      <Toolbar>
        <Box {...uiConfig.Box}>
          <ImgBox {...uiConfig.ImgBox} />
        </Box>
        <Typography {...uiConfig.Typo}>공구하는 여자</Typography>
        <Button {...uiConfig.Button}>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderView
