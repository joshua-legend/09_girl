import { create } from 'zustand'
import { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'

export type SnackStoreType = {
  snack: boolean
  msg: string
  setMsg: (state: string) => void
  setSnack: (state: boolean) => void
}

const SnackStore = create<SnackStoreType>((set) => ({
  snack: false,
  msg: '',
  setMsg: (state) => set(() => ({ msg: state })),
  setSnack: (state) => set(() => ({ snack: state })),
}))

export default SnackStore
