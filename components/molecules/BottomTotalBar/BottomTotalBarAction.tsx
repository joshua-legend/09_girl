import React, { SyntheticEvent } from 'react'
import BuyStore, { Item } from '../../../store/BuyStore'
import SnackStore from '../../../store/SnackStore'
import AddressStore, { Address } from '../../../store/AddressStore'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { info } from 'next/dist/build/output/log'
import { useRouter } from 'next/router'

export type BottomTotalBarActionProps = {}
export type BottomTotalBarActionHandlersResult = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const BottomTotalBarAction = ({}: BottomTotalBarActionProps): BottomTotalBarActionHandlersResult => {
  const { itemsStore } = BuyStore()
  const { addressInfo } = AddressStore()
  const { setSnack, setMsg } = SnackStore()
  const router = useRouter()

  const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { isDelivery } = addressInfo
    const isPurchased = itemsStore.every((value) => value.quantity === 0)
    const total = itemsStore.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity
    }, 0)

    if (isPurchased) {
      setMsg('구매하신 물품이 없습니다.😥')
      setSnack(true)
      return
    }

    const necessaryFields: (keyof Address)[] = ['mobile', 'nickname'] // 'require'를 제거합니다.
    const necessaryDeliveryFields: (keyof Address)[] = ['address', 'detail']
    const fieldMessages: Record<keyof Address, string> = {
      mobile: '휴대폰 번호가 비어있습니다. 채워주세요 😥',
      nickname: '닉네임이 비어있습니다. 채워주세요 😥',
      address: '주소가 비어있습니다. 채워주세요 😥',
      detail: '상세 주소가 비어있습니다. 채워주세요 😥',
      require: '필요한 정보가 비어있습니다. 채워주세요 😥', // 이 부분을 추가합니다.
      isDelivery: '배송 여부를 선택해주세요 😥',
      common: '공통 정보가 비어있습니다. 채워주세요 😥',
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
      const now = new Date()
      const year = now.getFullYear()
      const month = (now.getMonth() + 1).toString().padStart(2, '0') // getMonth는 0부터 시작하기 때문에 1을 더합니다.
      const date = now.getDate().toString().padStart(2, '0')
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const formattedDate = `${year}-${month}-${date}-${hours}:${minutes}`

      const { id: userId, ...restAddressInfo } = addressInfo
      const receipt = {
        ...restAddressInfo,
        userId,
        total,
        purchaseDate: formattedDate,
        purchased_items: itemsStore.filter((value) => value.quantity > 0),
      }
      const path = window.location.pathname.split('/')[2]
      const _id = uuidv4()
      const responses = await axios.post(`${process.env.API_URL}/postReceiptByUser`, { _id, path, receipt })
      if (responses.status === 200) {
        await router.push('/done')
      } else console.log('실패')
    }
  }

  return {
    onClick,
  }
}

export default BottomTotalBarAction
