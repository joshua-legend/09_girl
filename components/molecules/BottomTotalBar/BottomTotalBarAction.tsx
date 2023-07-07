import React, { SyntheticEvent } from 'react'
import BuyStore, { Item } from '../../../store/BuyStore'
import SnackStore from '../../../store/SnackStore'
import AddressStore, { Address } from '../../../store/AddressStore'

export type BottomTotalBarActionProps = {}
export type BottomTotalBarActionHandlersResult = {
  onClick: (e: MouseEvent) => void
}

const BottomTotalBarAction = ({}: BottomTotalBarActionProps): BottomTotalBarActionHandlersResult => {
  const { itemsStore } = BuyStore()
  const { addressInfo } = AddressStore()
  const { setSnack, setMsg } = SnackStore()
  const onClick = (e: MouseEvent) => {
    const { isDelivery } = addressInfo
    const isPurchased = itemsStore.every((value) => value.quantity === 0)

    if (isPurchased) {
      setMsg('구매하신 물품이 없습니다.😥')
      setSnack(true)
      return
    }

    const necessaryFields = ['mobile', 'nickname']
    const necessaryDeliveryFields = ['address', 'detail']
    const fieldMessages = {
      mobile: '휴대폰 번호가 비어있습니다. 채워주세요😥',
      nickname: '닉네임이 비어있습니다. 채워주세요😥',
      address: '주소가 비어있습니다. 채워주세요😥',
      detail: '상세 주소가 비어있습니다. 채워주세요😥',
    }
    const checkFields = (fields: string[], info: Address) => {
      for (const field of fields) {
        if (!info[field]) return fieldMessages[field]
      }
      return null
    }
    const missingNecessaryFieldMsg = checkFields(necessaryFields, addressInfo)
    const missingNecessaryDeliveryFieldMsg = isDelivery ? checkFields(necessaryDeliveryFields, addressInfo) : null

    if (missingNecessaryFieldMsg || missingNecessaryDeliveryFieldMsg) {
      setMsg(missingNecessaryFieldMsg || missingNecessaryDeliveryFieldMsg)
      setSnack(true)
    } else {
      setSnack(false)
    }
  }

  return {
    onClick,
  }
}

export default BottomTotalBarAction
