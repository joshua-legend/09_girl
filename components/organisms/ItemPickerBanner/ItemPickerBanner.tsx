import React, { useState } from 'react'
import ItemPickerBannerView, { ItemPickerBannerViewProps } from '@components/organisms/ItemPickerBanner/ItemPickerBannerView'
import ItemPickerBannerAction, { ItemPickerBannerActionHandlers, ItemPickerBannerActionProps } from '@components/organisms/ItemPickerBanner/ItemPickerBannerAction'
import { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'
import { TotalProps } from '@components/atoms/Total/Total'

export type ItemPickerBannerProps = {
  items: ItemCounterProps[]
}

const ItemPickerBanner = (props: ItemPickerBannerProps) => {
  const [total, setTotal] = useState<number>(0)
  const actionHandlers = ItemPickerBannerAction({ setTotal })
  const newProps = {
    items: props.items,
    total,
    onAdd: actionHandlers.onAdd,
    onSubtract: actionHandlers.onSubtract,
  } as ItemPickerBannerViewProps & ItemPickerBannerActionHandlers & TotalProps
  return <ItemPickerBannerView {...newProps} />
}

export default ItemPickerBanner
