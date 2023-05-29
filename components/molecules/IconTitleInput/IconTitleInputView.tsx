import React from 'react'
import { Box as NavbarBox, Box as Footer, BoxProps, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { IconTitleInputProps } from '@components/molecules/IconTitleInput/IconTitleInput'

export type IconTitleInputViewProps = {} & IconTitleInputProps

const IconTitleInputView = (props: IconTitleInputViewProps) => {
  const uiConfig = {}

  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup defaultValue='female'>
        <FormControlLabel value='delivery' control={<Radio />} label='배달 받기' />
        <FormControlLabel value='pickup' control={<Radio />} label='픽업 하기' />
      </RadioGroup>
    </FormControl>
  )
}

export default IconTitleInputView
