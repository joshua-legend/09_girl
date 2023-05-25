import React from 'react'
import ItemPickerBannerView, { ItemPickerBannerViewProps } from '@components/organisms/ItemPickerBanner/ItemPickerBannerView'
import ItemPickerBannerAction from '@components/organisms/ItemPickerBanner/ItemPickerBannerAction'

export type ItemPickerBannerProps = {
  itemPickerBanner: ItemPickerBannerViewProps
}

const ItemPickerBanner = ({ itemPickerBanner }: ItemPickerBannerProps) => {
  return <ItemPickerBannerView {...ItemPickerBannerAction} {...itemPickerBanner} />
}

export default ItemPickerBanner
