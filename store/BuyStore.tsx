import { create } from 'zustand'
import { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'
import { set } from 'zod'

export type Item = {
  _id: any
  name: string
  price: number
  quantity: number
  located?: string
}

export type BuyStoreType = {
  items: Item[]
  setItems: (items: ItemCounterProps[] | undefined) => void
  increaseQuantity: (_id: any) => void
  decreaseQuantity: (_id: any) => void
}

const BuyStore = create<BuyStoreType>((set) => ({
  items: [],
  setItems: (items) => set(() => ({ items: items })),
  increaseQuantity: (id: any) =>
    set((state) => {
      const newItems = state.items.map((i) => (i._id === id ? { ...i, quantity: i.quantity + 1 } : i))
      return { items: newItems }
    }),
  decreaseQuantity: (id: any) =>
    set((state) => {
      const newItems = state.items.map((i) => (i._id === id && i.quantity > 0 ? { ...i, quantity: i.quantity - 1 } : i))
      return { items: newItems }
    }),
}))

export default BuyStore
