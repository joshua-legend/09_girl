import React from 'react'

export type PickupDeliveryFormActionProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>
}
export type PickupDeliveryFormActionHandlersResult = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const PickupDeliveryFormAction = ({ setValue }: PickupDeliveryFormActionProps): PickupDeliveryFormActionHandlersResult => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }
  return {
    onChange: handleChange,
  }
}

export default PickupDeliveryFormAction
