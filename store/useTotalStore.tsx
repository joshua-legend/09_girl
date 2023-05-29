import create from 'zustand'

export type TotalStore = {
  total: number
  deleteAll: () => void
  add: (amount: number) => void
  subtract: (amount: number) => void
}

const useTotalStore = create<TotalStore>((set) => ({
  total: 0,
  deleteAll: () => set((state) => ({ total: 0 })),
  add: (amount) => set((state) => ({ total: state.total + amount })),
  subtract: (amount) => set((state) => ({ total: state.total - amount })),
}))

export default useTotalStore
