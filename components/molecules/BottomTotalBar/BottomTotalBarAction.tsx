import React, { SyntheticEvent } from 'react'
import BuyStore, { Item } from '../../../store/BuyStore'
import SnackStore from '../../../store/SnackStore'
import AddressStore, { Address } from '../../../store/AddressStore'

export type BottomTotalBarActionProps = {}
export type BottomTotalBarActionHandlersResult = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const BottomTotalBarAction = ({}: BottomTotalBarActionProps): BottomTotalBarActionHandlersResult => {
  const { itemsStore } = BuyStore()
  const { addressInfo } = AddressStore()
  const { setSnack, setMsg } = SnackStore()
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { isDelivery } = addressInfo
    const isPurchased = itemsStore.every((value) => value.quantity === 0)

    if (isPurchased) {
      setMsg('구매하신 물품이 없습니다.😥')
      setSnack(true)
      return
    }

    const necessaryFields: (keyof Address)[] = ['mobile', 'nickname'] // 'require'를 제거합니다.
    const necessaryDeliveryFields: (keyof Address)[] = ['address', 'detail']

    const fieldMessages: Record<keyof Address, string> = {
      mobile: '휴대폰 번호가 비어있습니다. 채워주세요😥',
      nickname: '닉네임이 비어있습니다. 채워주세요😥',
      address: '주소가 비어있습니다. 채워주세요😥',
      detail: '상세 주소가 비어있습니다. 채워주세요😥',
      require: '필요한 정보가 비어있습니다. 채워주세요😥', // 이 부분을 추가합니다.
      isDelivery: '배송 여부를 선택해주세요😥',
      common: '공통 정보가 비어있습니다. 채워주세요😥',
    }
    const checkFields = (fields: string[], info: Address) => {
      for (const field of fields) {
        if (field in info && !info[field as keyof Address]) return fieldMessages[field as keyof Address]
      }
      return null
    }
    const missingNecessaryFieldMsg = checkFields(necessaryFields, addressInfo) || ''
    const missingNecessaryDeliveryFieldMsg = isDelivery ? checkFields(necessaryDeliveryFields, addressInfo) || '' : ''

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
