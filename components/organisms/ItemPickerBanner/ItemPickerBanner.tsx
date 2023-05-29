import React, { useState } from 'react'
import ItemPickerBannerView, { ItemPickerBannerViewProps } from '@components/organisms/ItemPickerBanner/ItemPickerBannerView'
import ItemPickerBannerAction, { ItemPickerBannerActionHandlers } from '@components/organisms/ItemPickerBanner/ItemPickerBannerAction'
import { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'

export type ItemPickerBannerProps = {
  items: ItemCounterProps[]
}

const ItemPickerBanner = (props: ItemPickerBannerProps) => {
  const actionHandlers = ItemPickerBannerAction()
  const newProps = {
    items: props.items,
    onAdd: actionHandlers.onAdd,
    onSubtract: actionHandlers.onSubtract,
  } as ItemPickerBannerViewProps & ItemPickerBannerActionHandlers
  return <ItemPickerBannerView {...newProps} />
}

export default ItemPickerBanner
