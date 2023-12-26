import { create } from 'zustand'

interface InterfaceError {
  id: number
  message: string
}

interface ErrorState {
  errors: InterfaceError[] | null
  setErrors: Function
  clearErrors: Function
}

export const useErrorStore = create<ErrorState>((set) => ({
  errors: null,
  setErrors: (...error: InterfaceError[]) => set({ errors: [...error] }),
  clearErrors: () => set({ errors: null })
}))
