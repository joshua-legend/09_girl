import React from 'react'
import { Box as PickupDeliveryRadioGroupBox, BoxProps, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, RadioGroupProps } from '@mui/material'
import { PICKUP_DELIVERY_CONSTANTS, PickupDeliveryFormProps } from '@components/molecules/PickupDeliveryForm/PickupDeliveryForm'
import { PickupDeliveryFormActionHandlersResult } from '@components/molecules/PickupDeliveryForm/PickupDeliveryFormAction'
import PickupDeliveryRadioGroup, { PickupDeliveryRadioGroupProps } from '@components/molecules/PickupDeliveryRadioGroup/PickupDeliveryRadioGroup'
import IconTitleInput, { IconTitleInputProps } from '@components/molecules/IconTitleInput/IconTitleInput'

export type PickupDeliveryFormViewProps = {
  iconTitlesInputsAddress: IconTitleInputProps[]
} & PickupDeliveryFormProps &
  PickupDeliveryFormActionHandlersResult &
  PickupDeliveryRadioGroupProps

const PickupDeliveryFormView = (props: PickupDeliveryFormViewProps) => {
  const uiConfig = {
    PickupDeliveryFormBox: {
      sx: {
        margin: '1rem 2rem',
      },
    } as BoxProps,
  }
  return (
    <PickupDeliveryRadioGroupBox {...uiConfig.PickupDeliveryFormBox}>
      <PickupDeliveryRadioGroup {...props} />
      {props.value === PICKUP_DELIVERY_CONSTANTS.DELIVERY && props.iconTitlesInputsAddress.map((iconTitle, index) => <IconTitleInput {...iconTitle} key={index} />)}
    </PickupDeliveryRadioGroupBox>
  )
}

export default PickupDeliveryFormView
