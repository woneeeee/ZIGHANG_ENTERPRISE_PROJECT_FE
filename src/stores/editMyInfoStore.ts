import { create } from 'zustand'
import type { EditMyInfoType } from '@/types/edit-mypage.ts'

interface SetEditMyInfoStoreType {
  editMyInfoData: EditMyInfoType
}

interface EditMyInfoStoreType {
  editMyInfoData: EditMyInfoType | undefined
  setState: (params: SetEditMyInfoStoreType) => void
}

export const useEditMyInfoStore = create<EditMyInfoStoreType>((set) => ({
  editMyInfoData: undefined,
  setState: (params: SetEditMyInfoStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
