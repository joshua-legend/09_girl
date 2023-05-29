import React from 'react'
import { Box as NavbarBox, Box as Footer, BoxProps, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { PickupDeliveryRadioGroupProps } from '@components/molecules/PickupDeliveryRadioGroup/PickupDeliveryRadioGroup'

export type PickupDeliveryRadioGroupViewProps = {} & PickupDeliveryRadioGroupProps

const PickupDeliveryRadioGroupView = (props: PickupDeliveryRadioGroupViewProps) => {
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

export default PickupDeliveryRadioGroupView
