import React, { ChangeEvent } from 'react'
import { Button, ButtonGroup, ButtonGroupProps, ButtonProps } from '@mui/material'
import { DataButtonGroupActionHandlersResult } from '@components/molecules/DataButtonGroup/DataButtonGroupAction'

export type DataButtonGroupViewProps = {}

const DataButtonGroupView = ({ refreshPage, postRows, deleteRows }: DataButtonGroupViewProps & DataButtonGroupActionHandlersResult) => {
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
      <Button {...uiConfig.confirmBtn} onClick={deleteRows}>
        삭제하기
      </Button>
      <Button {...uiConfig.confirmBtn} onClick={refreshPage}>
        복구하기
      </Button>
      <Button {...uiConfig.confirmBtn} onClick={postRows}>
        확정하기
      </Button>
    </ButtonGroup>
  )
}

export default DataButtonGroupView
