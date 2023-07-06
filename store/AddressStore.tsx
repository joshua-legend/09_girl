import { create } from 'zustand'
import { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'

export type Address = {
  mobile: string
  nickname: string
  require: string
  isDelivery: boolean
  address: string
  detail: string
  common: string
}

export type AddressGeneric = {
  addressState: Address
}

const AddressStore = create<AddressGeneric>((set) => ({
  addressState: {
    mobile: '',
    nickname: '',
    require: '',
    isDelivery: true,
    address: '',
    detail: '',
    common: '',
  },
}))

export default AddressStore
