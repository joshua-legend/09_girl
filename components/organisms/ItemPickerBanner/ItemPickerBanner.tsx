import React, { useEffect, useState } from 'react'
import ItemPickerBannerView, { ItemPickerBannerViewProps } from '@components/organisms/ItemPickerBanner/ItemPickerBannerView'
import ItemPickerBannerAction, { ItemPickerBannerActionHandlers } from '@components/organisms/ItemPickerBanner/ItemPickerBannerAction'
import { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'
import BuyStore from '../../../store/BuyStore'

export type ItemPickerBannerProps = {}

const ItemPickerBanner = (props: ItemPickerBannerProps) => {
  const { itemsStore } = BuyStore()

  useEffect(() => {}, [itemsStore])

  const newProps = {
    items: itemsStore,
  } as ItemPickerBannerViewProps & ItemPickerBannerActionHandlers
  return <ItemPickerBannerView {...newProps} />
}

export default ItemPickerBanner
