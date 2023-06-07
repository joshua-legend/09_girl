import React, { useState } from 'react'
import PickupDeliveryRadioGroupView, { PickupDeliveryRadioGroupViewProps } from '@components/molecules/PickupDeliveryRadioGroup/PickupDeliveryRadioGroupView'
import PickupDeliveryRadioGroupAction, { PickupDeliveryRadioGroupActionHandlersResult, PickupDeliveryRadioGroupActionProps } from '@components/molecules/PickupDeliveryRadioGroup/PickupDeliveryRadioGroupAction'

export type PickupDeliveryRadioGroupProps = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
} & PickupDeliveryRadioGroupActionProps
const PickupDeliveryRadioGroup = (props: PickupDeliveryRadioGroupProps) => {
  const actions = PickupDeliveryRadioGroupAction({})
  const newProps = {
    ...props,
    ...actions,
  } as PickupDeliveryRadioGroupViewProps & PickupDeliveryRadioGroupActionHandlersResult

  return <PickupDeliveryRadioGroupView {...newProps} />
}

export default PickupDeliveryRadioGroup
