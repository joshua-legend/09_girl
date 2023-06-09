import React from 'react'
import { Box as IconWithTitle, Box as Text, BoxProps, Chip, ChipProps, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, StackProps, TextField, TextFieldProps, Typography, TypographyProps } from '@mui/material'
import { IconTitleSelectorProps } from '@components/molecules/IconTitleSelector/IconTitleSelector'
import { AccountCircle } from '@mui/icons-material'
import { COLORS } from '../../../constants/colors'
import { FONTS } from '../../../constants/fonts'

export type IconTitleSelectorViewProps = {} & IconTitleSelectorProps

const IconTitleSelectorView = (props: IconTitleSelectorViewProps) => {
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
    } as TextFieldProps,
  }

  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <Stack {...uiConfig.Stack}>
      <IconWithTitle {...uiConfig.IconWithTitle}>
        <Typography {...uiConfig.Title}>{props.title}</Typography>
        {props.isNecessary ? <Chip size={'small'} label='필수' sx={{ marginLeft: '4px', fontSize: '10px', fontFamily: FONTS.PRETENDARD, backgroundColor: COLORS.PRIMARY }} /> : null}
      </IconWithTitle>
      <Text {...uiConfig.Text}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
          <InputLabel id='demo-select-small-label'>주소입력</InputLabel>
          <Select labelId='demo-select-small-label' id='demo-select-small' value={age} label='Age' onChange={handleChange}>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Text>
    </Stack>
  )
}

export default IconTitleSelectorView
