import React, { ChangeEvent, useState } from 'react'
import { Box as IconWithTitle, Box as Text, BoxProps, Chip, ChipProps, Grid, InputAdornment, Stack, StackProps, TextField, TextFieldProps, Typography, TypographyProps } from '@mui/material'
import { IconTitleInputProps } from '@components/molecules/IconTitleInput/IconTitleInput'
import { COLORS } from '../../../constants/colors'
import { FONTS } from '../../../constants/fonts'
import { IconTitleInputActionHandlersResult } from '@components/molecules/IconTitleInput/IconTitleInputAction'

export type PageTitleInputViewProps = {} & IconTitleInputProps

const PageTitleInputView = (props: PageTitleInputViewProps & IconTitleInputActionHandlersResult) => {
  const uiConfig = {
    Stack: {
      sx: {
        margin: '1rem 0',
        ...props.sx,
      },
    } as StackProps,
    Title: {
      sx: {
        fontFamily: FONTS.PRETENDARD,
      },
    } as TypographyProps,
    Text: {
      sx: {},
    } as BoxProps,
    TextField: {
      sx: {
        width: '100%',
        backgroundColor: COLORS.BACKGROUND,
        borderRadius: '4px',
        '& fieldset': { border: 'none' },
        '& ::placeholder': { fontFamily: FONTS.PRETENDARD, fontSize: '12px' },
      },
      size: 'small',
      placeholder: props.placeholder,
      multiline: props.multiline,
      rows: 3,
      type: props.type ?? 'text',
      value: props.text,
      onChange: props.handleChange,
    } as TextFieldProps,
  }

  return (
    <Stack {...uiConfig.Stack}>
      <IconWithTitle>
        <Typography {...uiConfig.Title}>{props.title}</Typography>
      </IconWithTitle>
      <Text {...uiConfig.Text}>
        <TextField {...uiConfig.TextField} />
      </Text>
    </Stack>
  )
}

export default PageTitleInputView
