import React, { useEffect, useState } from 'react'
import { TotalProps } from '@components/atoms/Total/Total'
import PickupDeliveryFormView, { PickupDeliveryFormViewProps } from '@components/molecules/PickupDeliveryForm/PickupDeliveryFormView'
import PickupDeliveryFormAction, { PickupDeliveryFormActionHandlersResult } from '@components/molecules/PickupDeliveryForm/PickupDeliveryFormAction'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import { AccountCircle } from '@mui/icons-material'
import { IconTitleInputProps } from '@components/molecules/IconTitleInput/IconTitleInput'
import AddressStore from '../../../store/AddressStore'

export const PICKUP_DELIVERY_CONSTANTS = { DELIVERY: 'delivery', PICKUP: 'pickup' }
export type PickupDeliveryFormProps = {
  iconTitlesInputsAddress: IconTitleInputProps[]
}
const PickupDeliveryForm = (props: PickupDeliveryFormProps) => {
  const [value, setValue] = useState(PICKUP_DELIVERY_CONSTANTS.DELIVERY)

  const actions = PickupDeliveryFormAction({ setValue })
  const newProps = {
    value,
    onChange: actions.onChange,
    ...props,
  } as PickupDeliveryFormViewProps & PickupDeliveryFormActionHandlersResult

  const { setAddress } = AddressStore()
  useEffect(() => {
    setAddress({ isDelivery: value === 'delivery' })
  }, [value])

  return <PickupDeliveryFormView {...newProps} />
}

export default PickupDeliveryForm
