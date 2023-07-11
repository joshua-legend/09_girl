import { create } from 'zustand'
import { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'

export type Address = {
  mobile?: string
  nickname?: string
  require?: string
  isDelivery?: boolean
  address?: string
  detail?: string
  common?: string
}

export type AddressGeneric = {
  addressInfo: Address
  setAddress: (newAddress: Partial<Address> | { [p: string]: string }) => void
}

const AddressStore = create<AddressGeneric>((set) => ({
  addressInfo: {
    mobile: '',
    nickname: '',
    require: '',
    isDelivery: true,
    address: '',
    detail: '',
    common: '',
  },
  setAddress: (newAddress: Partial<Address>) =>
    set((state) => ({
      addressInfo: {
        ...state.addressInfo,
        ...newAddress,
      },
    })),
}))

export default AddressStore
