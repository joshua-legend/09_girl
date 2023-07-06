import React from 'react'
import AppBar, { AppBarProps } from '@mui/material/AppBar'
import { Box, Box as ImgBox, BoxProps, ButtonProps } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { COLORS } from '../../../constants/colors'
import { FONTS } from '../../../constants/fonts'
import { IMAGES } from '../../../constants/images'
import { HeaderProps } from '@components/molecules/Header/Header'
import { useRouter } from 'next/router'

export type HeaderViewProps = {} & HeaderProps

const HeaderView = ({ isAdmin = false, isStore = false }: HeaderViewProps) => {
  const { push } = useRouter()

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
    xBox: {
      sx: {
        display: 'flex',
        justifyContent: 'center',
      },
      onClick: () => {
        push('/select')
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
        <Typography {...uiConfig.Typo}>공구하는 뇨자 {isAdmin ? '관리자 페이지' : null}</Typography>
        {isStore ? (
          <Box {...uiConfig.xBox}>
            <svg width='30' height='30' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <line x1='10' y1='10' x2='30' y2='30' stroke='black' strokeWidth='2' />
              <line x1='30' y1='10' x2='10' y2='30' stroke='black' strokeWidth='2' />
            </svg>
          </Box>
        ) : null}
      </Toolbar>
    </AppBar>
  )
}

export default HeaderView
