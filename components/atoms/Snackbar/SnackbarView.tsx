import React, { SyntheticEvent } from 'react'
import { Snackbar } from '@mui/material'
import { SnackBarProps } from '@components/atoms/Snackbar/Snackbar'

export type SnackbarViewProps = {
  open: boolean
  onClose: (e: SyntheticEvent<any> | Event) => void
  action: any
  autoHideDuration: number
  message: string
} & SnackBarProps

const SnackbarView = ({ open, autoHideDuration, message, action, onClose }: SnackbarViewProps) => {
  return (
    <>
      <Snackbar sx={{ bottom: '130px' }} open={open} autoHideDuration={autoHideDuration} onClose={onClose} action={action} message={message} />
    </>
  )
}

export default SnackbarView
