import React from 'react'
import { Box as IconWithTitle, Box as Text, BoxProps, Grid, Stack, StackProps, TextField, TextFieldProps, Typography } from '@mui/material'
import { IconTitleInputProps } from '@components/molecules/IconTitleInput/IconTitleInput'
import { AccountCircle } from '@mui/icons-material'

export type IconTitleInputViewProps = {} & IconTitleInputProps

const IconTitleInputView = (props: IconTitleInputViewProps) => {
  const uiConfig = {
    Stack: {
      sx: {
        margin: '1rem 0',
      },
    } as StackProps,
    IconWithTitle: {
      sx: {
        display: 'flex',
        marginBottom: '0.5rem',
      },
    } as BoxProps,
    Text: {
      sx: {
        width: '100%',
      },
    } as BoxProps,
    TextField: {
      sx: {
        width: '100%',
      },
    } as TextFieldProps,
  }

  return (
    <Stack {...uiConfig.Stack}>
      <IconWithTitle {...uiConfig.IconWithTitle}>
        {props.icon}
        <Typography>{props.title}</Typography>
      </IconWithTitle>
      <Text {...uiConfig.Text}>
        <TextField {...uiConfig.TextField} />
      </Text>
    </Stack>
  )
}

export default IconTitleInputView
