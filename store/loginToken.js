import { create } from 'zustand'

export const useLoginStore = create((set) => ({
  token: "",
  id: "",
  type: "",
  setLoginTokens: (token, id, type) => set({ token: token, id: id, type: type }),
}))
