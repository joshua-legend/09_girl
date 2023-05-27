import React from 'react'
import { Box as NavbarBox, Box as Footer, Box as TotalCount, BoxProps } from '@mui/material'
import { COLORS } from '@styles/colors'
import { BottomTotalBarProps } from '@components/molecules/BottomTotalBar/BottomTotalBar'
import { BottomTotalBarActionHandlersResult, BottomTotalBarActionProps } from '@components/molecules/BottomTotalBar/BottomTotalBarAction'
import Total from '@components/atoms/Total/Total'
import Typography from '@mui/material/Typography'
import { TypographyProps } from '@mui/system'
import { FONTS } from '@styles/fonts'

export type BottomTotalBarViewProps = {
} & BottomTotalBarProps

const BottomTotalBarView = ({ }: BottomTotalBarViewProps & BottomTotalBarActionProps & BottomTotalBarActionHandlersResult) => {
  const uiConfig = {
    Footer: {
      sx: {
        width: '100%',
        position: 'fixed',
        left: '0',
        bottom: '0',
        borderTop: `1px solid ${COLORS.BORDER}`,
        backgroundColor: `${COLORS.BACKGROUND}`,
        padding: '1rem'
      },
    } as BoxProps,
    NavbarBox: {
      sx: {
      },
    } as BoxProps,
    TotalCountBox: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
      },
    } as BoxProps,
  }

  return (
    <Footer {...uiConfig.Footer}>
      <NavbarBox {...uiConfig.NavbarBox}>
        <Total total={10000} />
      </NavbarBox>
      <NavbarBox {...uiConfig.NavbarBox}>
        <Total total={10000} />
      </NavbarBox>
    </Footer>
  )
}

export default BottomTotalBarView
