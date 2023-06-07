import React, { useState } from 'react'
import { TotalProps } from '@components/atoms/Total/Total'
import PickupDeliveryFormView, { PickupDeliveryFormViewProps } from '@components/molecules/PickupDeliveryForm/PickupDeliveryFormView'
import PickupDeliveryFormAction, { PickupDeliveryFormActionHandlersResult } from '@components/molecules/PickupDeliveryForm/PickupDeliveryFormAction'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import { AccountCircle } from '@mui/icons-material'

export const PICKUP_DELIVERY_CONSTANTS = { DELIVERY: 'delivery', PICKUP: 'pickup' }
export type PickupDeliveryFormProps = {}
const PickupDeliveryForm = (props: PickupDeliveryFormProps) => {
  const [value, setValue] = useState(PICKUP_DELIVERY_CONSTANTS.DELIVERY)
  const actions = PickupDeliveryFormAction({ setValue })
  const newProps = {
    value,
    ...actions,
    iconTitlesInputsAddress: [
      {
        icon: <PhoneIphoneIcon fontSize={'small'} />,
        title: '주소 입력',
        label: '주소 입력',
        placeholder: 'ex) 101동',
        isNecessary: true,
        multiline: false,
      },
      {
        icon: <AccountCircle fontSize={'small'} />,
        title: '상세 주소 입력',
        label: '상세 주소 입력',
        placeholder: 'ex) 101호',
        isNecessary: false,
        multiline: false,
      },
      {
        icon: <AccountCircle fontSize={'small'} />,
        title: '공동현관문 출입 정보',
        label: '',
        isNecessary: false,
        multiline: false,
      },
    ],
  } as PickupDeliveryFormViewProps & PickupDeliveryFormActionHandlersResult

  return <PickupDeliveryFormView {...newProps} />
}

export default PickupDeliveryForm
