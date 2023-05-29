import React, { useState } from 'react'
import { TotalProps } from '@components/atoms/Total/Total'
import PickupDeliveryRadioGroupView, { PickupDeliveryRadioGroupViewProps } from '@components/molecules/PickupDeliveryRadioGroup/PickupDeliveryRadioGroupView'
import PickupDeliveryRadioGroupAction from '@components/molecules/PickupDeliveryRadioGroup/PickupDeliveryRadioGroupAction'

export type PickupDeliveryRadioGroupProps = {}
const PickupDeliveryRadioGroup = (props: PickupDeliveryRadioGroupProps) => {
  const actions = PickupDeliveryRadioGroupAction()
  const newProps = {} as PickupDeliveryRadioGroupViewProps & TotalProps

  return <PickupDeliveryRadioGroupView {...newProps} />
}

export default PickupDeliveryRadioGroup
