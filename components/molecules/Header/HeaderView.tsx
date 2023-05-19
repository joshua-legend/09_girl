import React, { CSSProperties } from 'react'
import AppBar, { AppBarProps } from '@mui/material/AppBar'
import { Box, Box as ImgBox, BoxProps } from '@mui/material'
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
  const Wrapper = styled(ImgBox)`
    flex-grow: 1;
  `
  const attrs = {
    appbar: {
      style: {
        position: 'fixed',
        backgroundColor: COLORS.PRIMARY,
      },
    } as AppBarProps,
    imgBox: {
      component: 'img',
      src: '/static/09_girl.png',
      alt: 'The house from the offer.',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    } as BoxProps,
    typo: {
      variant: 'h5',
      style: {
        flexGrow: 1,
        fontFamily: FONTS.TITLE,
      },
    } as TypographyProps,
  }

  return (
    <Wrapper>
      <AppBar {...attrs.appbar}>
        <Toolbar>
          {/*<LocalShippingIcon {...attrs.icon} />*/}
          <Box sx={{ width: '100px', height: '100px' }}>
            <ImgBox {...attrs.imgBox} />
          </Box>
          <Typography {...attrs.typo}>공구하는 여자</Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </Wrapper>
  )
}

export default HeaderView
