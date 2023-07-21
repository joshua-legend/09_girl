import React, { ChangeEvent } from 'react'
import { Box, Box as PickupDeliveryRadioGroupBox, BoxProps, Button, ButtonProps, TextField, TextFieldProps, TypographyProps } from '@mui/material'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../../constants/fonts'

export type PageInputFormViewProps = {
  name: string
  addItem: () => void
  deleteRows: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const PageInputFormView = ({ name, addItem, deleteRows }: PageInputFormViewProps) => {
  const uiConfig = {
    FormBox: {
      sx: {
        paddingBottom: '1rem',
      },
    } as BoxProps,
    InputBox: {
      sx: {
        display: 'flex',
      },
    } as BoxProps,
    Box: {
      sx: {
        flex: '4',
      },
    } as BoxProps,
    Typo: {
      variant: 'h6',
      sx: {
        marginBottom: '1rem',
        fontFamily: FONTS.PRETENDARD,
      },
    } as TypographyProps,
    Add: {
      variant: 'contained',
      onClick: addItem,
      sx: {
        marginRight: '1rem',
      },
    } as ButtonProps,
    Delete: {
      variant: 'contained',
      onClick: deleteRows,
      sx: {},
    } as ButtonProps,
  }

  return (
    <Box {...uiConfig.FormBox}>
      <Typography {...uiConfig.Typo}>{name} 설문폼 리스트</Typography>
      <Box {...uiConfig.InputBox}>
        <Box {...uiConfig.Box}>
          {/*<TextField {...uiConfig.Item} />*/}
          <Button {...uiConfig.Add}>추가하기</Button>
          <Button {...uiConfig.Delete}>삭제하기</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default PageInputFormView
