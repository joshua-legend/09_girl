import create from 'zustand'

type TotalStore = {
  total: number
  add: (amount: number) => void
  subtract: (amount: number) => void
}

const useTotalStore = create<TotalStore>((set) => ({
  total: 0,
  add: (amount) => set((state) => ({ total: state.total + amount })),
  subtract: (amount) => set((state) => ({ total: state.total - amount })),
}))

export default useTotalStore
