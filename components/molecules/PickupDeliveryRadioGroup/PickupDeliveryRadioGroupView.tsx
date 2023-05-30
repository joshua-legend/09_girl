import React from 'react'
import { Box as NavbarBox, Box as Footer, BoxProps, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, RadioGroupProps } from '@mui/material'
import { PickupDeliveryRadioGroupProps } from '@components/molecules/PickupDeliveryRadioGroup/PickupDeliveryRadioGroup'
import { FONTS } from '@styles/fonts'

export type PickupDeliveryRadioGroupViewProps = {} & PickupDeliveryRadioGroupProps

const PickupDeliveryRadioGroupView = (props: PickupDeliveryRadioGroupViewProps) => {
  const uiConfig = {
    RadioGroup: {
      defaultValue: 'delivery',
      sx: {
        display: 'flex',
        flexDirection: 'row',
        fontFamily: FONTS.PRETENDARD,
      },
    } as RadioGroupProps,
  }

  return (
    <FormControl>
      <FormLabel>배달 / 픽업 선택</FormLabel>
      <RadioGroup {...uiConfig.RadioGroup}>
        <FormControlLabel value='delivery' control={<Radio />} label='배달 받기' />
        <FormControlLabel value='pickup' control={<Radio />} label='픽업 하기' />
      </RadioGroup>
    </FormControl>
  )
}

export default PickupDeliveryRadioGroupView
