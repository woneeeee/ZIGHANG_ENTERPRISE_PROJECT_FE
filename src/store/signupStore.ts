import { create } from 'zustand'
import type { SignUpDataType } from '@/types/signup.ts'

interface SetSignUpStoreType {
  signUpData: SignUpDataType
}

interface SignUpStoreType {
  signUpData: SignUpDataType | undefined
  setState: (params: SetSignUpStoreType) => void
}

export const useSignUpStore = create<SignUpStoreType>((set) => ({
  signUpData: undefined,
  setState: (params: SetSignUpStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
