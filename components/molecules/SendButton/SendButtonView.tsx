import React, { ChangeEvent } from 'react'
import { Button, ButtonGroup, ButtonGroupProps, ButtonProps } from '@mui/material'
import { SendDataActionHandlersResult } from '@components/molecules/SendButton/SendButtonAction'

const SendButtonView = ({ sendData }: SendDataActionHandlersResult) => {
  const uiConfig = {
    buttonGroup: {
      variant: 'contained',
      sx: {
        width: '100%',
        marginTop: '1rem',
      },
    } as ButtonGroupProps,
    confirmBtn: {
      variant: 'contained',
      sx: {
        width: '100%',
      },
    } as ButtonProps,
  }

  return (
    <ButtonGroup {...uiConfig.buttonGroup}>
      <Button {...uiConfig.confirmBtn} onClick={sendData}>
        완료하기
      </Button>
    </ButtonGroup>
  )
}

export default SendButtonView
