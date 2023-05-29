import React from 'react'
import { Box as NavbarBox, Box as Footer, BoxProps } from '@mui/material'
import { COLORS } from '@styles/colors'
import { BottomTotalBarProps } from '@components/molecules/BottomTotalBar/BottomTotalBar'
import Total, { TotalProps } from '@components/atoms/Total/Total'
import BuyPanel from '@components/atoms/BuyPanel/BuyPanel'
import DeletePanel from '@components/atoms/DeletePanel/DeletePanel'

export type BottomTotalBarViewProps = {} & BottomTotalBarProps

const BottomTotalBarView = (props: BottomTotalBarViewProps & TotalProps) => {
  const uiConfig = {
    Footer: {
      sx: {
        width: '100%',
        position: 'fixed',
        left: '0',
        bottom: '0',
        borderTop: `1px solid ${COLORS.BORDER}`,
        backgroundColor: `${COLORS.BACKGROUND}`,
        padding: '1rem',
      },
    } as BoxProps,
    NavbarBox: {
      sx: {
        padding: '0 0.25rem',
        marginBottom: '0.5rem',
      },
    } as BoxProps,
    TotalCountBox: {
      sx: {
        display: 'flex',
      },
    } as BoxProps,
  }

  return (
    <Footer {...uiConfig.Footer}>
      <NavbarBox {...uiConfig.NavbarBox}>
        <Total {...props} />
      </NavbarBox>
      <NavbarBox {...uiConfig.TotalCountBox}>
        <DeletePanel />
        <BuyPanel />
      </NavbarBox>
    </Footer>
  )
}

export default BottomTotalBarView
