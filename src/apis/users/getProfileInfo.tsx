import api from '@/apis/api'
import type { Profile } from '@/types/profile'

type ApiResponse<T> = {
  isSuccess: boolean
  code: string
  message: string
  result: T
}

export const getProfileInfo = async (): Promise<Profile> => {
  const res = await api.get<ApiResponse<Profile>>(`/users/my-page`)
  console.log(res.data.result)

  return res.data.result
}
