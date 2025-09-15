import api from '@/apis/api'
import type { Profile } from '@/types/profile'
import type { ApiResponse } from '@/types/common.ts'


export const getProfileInfo = async (): Promise<Profile> => {
  const res = await api.get<ApiResponse<Profile>>(`/users/my-page`)

  return res.data.result
}
