import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as DeleteBox, BoxProps, Button, ButtonProps, TypographyProps } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { FONTS } from '../../../constants/fonts'
import { COLORS } from '../../../constants/colors'
import { DeletePanelProps } from '@components/atoms/DeletePanel/DeletePanel'
import { DeletePanelActionHandlersResult } from '@components/atoms/DeletePanel/DeletePanelAction'

export type DeletePanelViewProps = {} & DeletePanelProps

const DeletePanelView = (props: DeletePanelViewProps & DeletePanelActionHandlersResult) => {
  const uiConfig = {
    Delete: {
      sx: {
        display: 'flex',
        alignItems: 'center',
      },
    } as BoxProps,
    Button: {
      variant: 'contained',
      disableElevation: true,
      onClick: props.onDelete,
      style: {
        width: '100%',
        backgroundColor: COLORS.GRAY,
        padding: '0.5rem 1.25rem',
        height: '80%',
        margin: '0.25rem',
      },
    } as ButtonProps,
  }

  return (
    <DeleteBox {...uiConfig.Delete}>
      <Button {...uiConfig.Button}>
        <DeleteIcon />
      </Button>
    </DeleteBox>
  )
}

export default DeletePanelView
