import React from 'react'
import { Box as NavbarBox, Box as Footer, BoxProps, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, RadioGroupProps } from '@mui/material'
import { PickupDeliveryRadioGroupProps } from '@components/molecules/PickupDeliveryRadioGroup/PickupDeliveryRadioGroup'
import { FONTS } from '../../../constants/fonts'
import { PickupDeliveryRadioGroupActionHandlersResult } from '@components/molecules/PickupDeliveryRadioGroup/PickupDeliveryRadioGroupAction'
import { PICKUP_DELIVERY_CONSTANTS } from '@components/molecules/PickupDeliveryForm/PickupDeliveryForm'

export type PickupDeliveryRadioGroupViewProps = {} & PickupDeliveryRadioGroupProps & PickupDeliveryRadioGroupActionHandlersResult

const PickupDeliveryRadioGroupView = (props: PickupDeliveryRadioGroupViewProps) => {
  const uiConfig = {
    RadioGroup: {
      defaultValue: PICKUP_DELIVERY_CONSTANTS.DELIVERY,
      sx: {
        display: 'flex',
        flexDirection: 'row',
        fontFamily: FONTS.PRETENDARD,
      },
      value: props.value,
      onChange: props.onChange,
    } as RadioGroupProps,
  }

  return (
    <FormControl>
      <FormLabel>배달 / 픽업 선택</FormLabel>
      <RadioGroup {...uiConfig.RadioGroup}>
        <FormControlLabel value={PICKUP_DELIVERY_CONSTANTS.DELIVERY} control={<Radio />} label='배달 받기' />
        <FormControlLabel value={PICKUP_DELIVERY_CONSTANTS.PICKUP} control={<Radio />} label='픽업 하기' />
      </RadioGroup>
    </FormControl>
  )
}

export default PickupDeliveryRadioGroupView
