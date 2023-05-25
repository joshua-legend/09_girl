import React, { useState } from 'react'
import ItemPickerBannerView, { ItemPickerBannerViewProps } from '@components/organisms/ItemPickerBanner/ItemPickerBannerView'
import ItemPickerBannerAction, { ItemPickerBannerActionHandlers, ItemPickerBannerActionProps } from '@components/organisms/ItemPickerBanner/ItemPickerBannerAction'

export type ItemPickerBannerProps = {
  itemPickerBanner: ItemPickerBannerViewProps
}

const ItemPickerBanner = ({ itemPickerBanner }: ItemPickerBannerProps) => {
  const [total, setTotal] = useState<number>(0)
  const actionHandlers = ItemPickerBannerAction({ setTotal })
  const props = {
    items: itemPickerBanner.items,
    total,
    onAdd: actionHandlers.onAdd,
    onSubtract: actionHandlers.onSubtract,
  } as ItemPickerBannerViewProps & ItemPickerBannerActionHandlers

  return <ItemPickerBannerView {...props} />
}

export default ItemPickerBanner
