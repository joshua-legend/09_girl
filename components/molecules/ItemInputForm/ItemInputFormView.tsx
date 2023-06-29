import React, { ChangeEvent } from 'react'
import { Box, Box as PickupDeliveryRadioGroupBox, BoxProps, Button, ButtonProps, TextField, TextFieldProps, TypographyProps } from '@mui/material'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../../constants/fonts'
import { ItemInputFormActionHandlersResult } from '@components/molecules/ItemInputForm/ItemInputFormAction'
import { ItemInputFormProps } from '@components/molecules/ItemInputForm/ItemInputForm'

export type ItemInputFormViewProps = {
  name: string
  price: string
  addItem: () => void
}

const ItemInputFormView = ({ storeName, name, price, addItem, handleName, handlePrice }: ItemInputFormProps & ItemInputFormViewProps & ItemInputFormActionHandlersResult) => {
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
    Item: {
      placeholder: '제품명',
      variant: 'outlined',
      size: 'small',
      value: name,
      onChange: handleName,
      sx: {
        marginBottom: '1rem',
      },
    } as TextFieldProps,
    Price: {
      placeholder: '가격',
      variant: 'outlined',
      size: 'small',
      value: price,
      onChange: handlePrice,
    } as TextFieldProps,
    Add: {
      variant: 'contained',
      onClick: addItem,
      sx: {
        flex: '1',
      },
    } as ButtonProps,
  }

  return (
    <Box {...uiConfig.FormBox}>
      <Typography {...uiConfig.Typo}>{storeName} 아이템 추가</Typography>
      <Box {...uiConfig.InputBox}>
        <Box {...uiConfig.Box}>
          <TextField {...uiConfig.Item} />
          <TextField {...uiConfig.Price} />
        </Box>
        <Button {...uiConfig.Add}>추가하기</Button>
      </Box>
    </Box>
  )
}

export default ItemInputFormView
