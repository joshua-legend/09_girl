import React, { ChangeEvent, useState } from 'react'
import { Box as IconWithTitle, Box as Text, BoxProps, Chip, ChipProps, Grid, InputAdornment, Stack, StackProps, TextField, TextFieldProps, Typography, TypographyProps } from '@mui/material'
import { IconTitleInputProps } from '@components/molecules/IconTitleInput/IconTitleInput'
import { AccountCircle } from '@mui/icons-material'
import { COLORS } from '../../../constants/colors'
import { FONTS } from '../../../constants/fonts'

export type IconTitleInputViewProps = {} & IconTitleInputProps

const IconTitleInputView = (props: IconTitleInputViewProps) => {
  const [currentLength, setCurrentLength] = useState(0)

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    if (value.length <= 50) {
      setCurrentLength(value.length)
    } else {
      event.target.value = value.substring(0, 50)
    }
  }

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
    Title: {
      sx: {
        fontFamily: FONTS.PRETENDARD,
      },
    } as TypographyProps,
    Chip: {
      sx: {
        fontSize: '10px',
      },
    } as ChipProps,
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
      rows: 4,
      onChange: handleChange,
      InputProps: props.multiline
        ? {
            endAdornment: (
              <InputAdornment position={'start'}>
                {currentLength}/{50}
              </InputAdornment>
            ),
          }
        : null,
    } as TextFieldProps,
  }

  return (
    <Stack {...uiConfig.Stack}>
      <IconWithTitle {...uiConfig.IconWithTitle}>
        <Typography {...uiConfig.Title}>{props.title}</Typography>
        {props.isNecessary ? <Chip size={'small'} label='필수' sx={{ marginLeft: '4px', fontSize: '10px', fontFamily: FONTS.PRETENDARD, backgroundColor: COLORS.PRIMARY }} /> : null}
      </IconWithTitle>
      <Text {...uiConfig.Text}>
        <TextField {...uiConfig.TextField} />
      </Text>
    </Stack>
  )
}

export default IconTitleInputView
