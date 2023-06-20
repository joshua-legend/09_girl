import React from 'react'
import AppBar, { AppBarProps } from '@mui/material/AppBar'
import { Box, Box as ImgBox, BoxProps, ButtonProps } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { COLORS } from '../../../constants/colors'
import { FONTS } from '../../../constants/fonts'
import { IMAGES } from '../../../constants/images'

export type HeaderViewProps = {
  isAdmin: boolean
}

const HeaderView = ({ isAdmin = false }: HeaderViewProps) => {
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
      src: IMAGES.GIRL,
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
        <Typography {...uiConfig.Typo}>공구하는 여자 {isAdmin ? '관리자 페이지' : null}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderView
