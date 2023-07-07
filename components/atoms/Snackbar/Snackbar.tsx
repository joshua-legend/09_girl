import React, { useState } from 'react'
import SnackbarView, { SnackbarViewProps } from '@components/atoms/Snackbar/SnackbarView'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SnackStore from '../../../store/SnackStore'

export type SnackBarProps = {}

const Snackbar = (props: SnackBarProps) => {
  const { snack, setSnack, msg } = SnackStore()
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setSnack(false)
  }
  const action = (
    <IconButton size={'small'} aria-label={'close'} color={'inherit'} onClick={() => setSnack(false)}>
      <CloseIcon fontSize={'small'} />
    </IconButton>
  )
  const newProps = {
    open: snack,
    autoHideDuration: 3000,
    message: msg,
    action,
    onClose: handleClose,
  } as SnackbarViewProps

  return <SnackbarView {...newProps} />
}

export default Snackbar
