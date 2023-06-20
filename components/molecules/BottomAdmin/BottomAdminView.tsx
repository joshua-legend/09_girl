import { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Box as Footer, BoxProps } from '@mui/material'
import { BottomAdminActionHandlersResult } from '@components/molecules/BottomAdmin/BottomAdminAction'

export type BottomAdminViewProps = {
  labels: string[]
  store: number
}

const BottomAdminView = ({ labels, store, onChange }: BottomAdminViewProps & BottomAdminActionHandlersResult) => {
  const uiConfig = {
    Footer: {
      sx: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
      },
    } as BoxProps,
    Label: {
      style: {
        fontSize: '17px',
        fontWeight: '700',
      },
    },
  }

  return (
    <Footer {...uiConfig.Footer}>
      <BottomNavigation showLabels value={store} onChange={onChange}>
        {labels.map((store, index) => (
          <BottomNavigationAction label={<span {...uiConfig.Label}>{store}</span>} key={index} />
        ))}
      </BottomNavigation>
    </Footer>
  )
}

export default BottomAdminView
