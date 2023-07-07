import { create } from 'zustand'
import { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'

export type Item = {
  _id: any
  name: string
  price: number
  quantity: number
  located?: string
}

export type BuyStoreType = {
  itemsStore: Item[]
  setItems: (items: ItemCounterProps[] | undefined) => void
  increaseQuantity: (_id: any) => void
  decreaseQuantity: (_id: any) => void
}

const BuyStore = create<BuyStoreType>((set) => ({
  itemsStore: [],
  setItems: (items) => set(() => ({ itemsStore: items })),
  increaseQuantity: (id: any) =>
    set((state) => {
      const newItems = state.itemsStore.map((i) => (i._id === id ? { ...i, quantity: i.quantity + 1 } : i))
      return { itemsStore: newItems }
    }),
  decreaseQuantity: (id: any) =>
    set((state) => {
      const newItems = state.itemsStore.map((i) => (i._id === id && i.quantity > 0 ? { ...i, quantity: i.quantity - 1 } : i))
      return { itemsStore: newItems }
    }),
}))

export default BuyStore
