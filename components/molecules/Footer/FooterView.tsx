import React from 'react'
import { AppBarProps } from '@mui/material/AppBar'
import { BottomNavigation, BottomNavigationAction, BottomNavigationProps, Box, Box as Footer, BoxProps, ButtonProps } from '@mui/material'
import { COLORS } from '@styles/colors'
import { FooterProps } from '@components/molecules/Footer/Footer'
import StorefrontIcon from '@mui/icons-material/Storefront'
import { FooterActionHandlersResult, FooterActionProps } from '@components/molecules/Footer/FooterAction'

export type FooterViewProps = {
  value: number
} & FooterProps

const FooterView = ({ value, onChange }: FooterViewProps & FooterActionProps & FooterActionHandlersResult) => {
  const uiConfig = {
    Box: {
      sx: {
        width: '100%',
        position: 'fixed',
        left: '0',
        bottom: '0',
        borderTop: `1px solid ${COLORS.BORDER}`,
      },
    } as BoxProps,
    BottomNavigation: {
      showLabels: true,
      value,
      onChange,
    } as BottomNavigationProps,
  }

  return (
    <Footer {...uiConfig.Box}>
      <BottomNavigation {...uiConfig.BottomNavigation}>
        <BottomNavigationAction label='장기점' icon={<StorefrontIcon />} />
        <BottomNavigationAction label='운양점' icon={<StorefrontIcon />} />
        <BottomNavigationAction label='고촌점' icon={<StorefrontIcon />} />
      </BottomNavigation>
    </Footer>
  )
}

export default FooterView
