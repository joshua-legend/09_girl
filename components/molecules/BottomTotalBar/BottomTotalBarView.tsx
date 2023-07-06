import React from 'react'
import { Box as NavbarBox, Box as Footer, BoxProps } from '@mui/material'
import { COLORS } from '../../../constants/colors'
import { BottomTotalBarProps } from '@components/molecules/BottomTotalBar/BottomTotalBar'
import Total, { TotalProps } from '@components/atoms/Total/Total'
import BuyPanel from '@components/atoms/BuyPanel/BuyPanel'
import DeletePanel from '@components/atoms/DeletePanel/DeletePanel'
import { BottomTotalBarActionHandlersResult } from '@components/molecules/BottomTotalBar/BottomTotalBarAction'

export type BottomTotalBarViewProps = {
  isAdminPage: boolean
} & BottomTotalBarProps &
  BottomTotalBarActionHandlersResult

const BottomTotalBarView = (props: BottomTotalBarViewProps & TotalProps) => {
  const uiConfig = {
    Footer: {
      sx: {
        display: props.isAdminPage ? 'none' : 'block',
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
        <Total />
      </NavbarBox>
      <NavbarBox {...uiConfig.TotalCountBox}>
        <DeletePanel />
        <BuyPanel onClick={props.onClick} />
      </NavbarBox>
    </Footer>
  )
}

export default BottomTotalBarView
