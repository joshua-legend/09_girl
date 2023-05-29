import React, { useState } from 'react'
import ItemPickerBannerView, { ItemPickerBannerViewProps } from '@components/organisms/ItemPickerBanner/ItemPickerBannerView'
import ItemPickerBannerAction, { ItemPickerBannerActionHandlers } from '@components/organisms/ItemPickerBanner/ItemPickerBannerAction'
import { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'
import { TotalProps } from '@components/atoms/Total/Total'
import AddressInputBannerAction from '@components/organisms/AddressInputBanner/AddressInputBannerAction'
import AddressInputBannerView from '@components/organisms/AddressInputBanner/AddressInputBannerView'

export type AddressInputBannerProps = {
}

const AddressInputBanner = (props: AddressInputBannerProps) => {
  const [total, setTotal] = useState<number>(0)
  return <AddressInputBannerView {...props} />
}

export default AddressInputBanner
