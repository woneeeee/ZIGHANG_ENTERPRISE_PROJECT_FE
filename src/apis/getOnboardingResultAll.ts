import api from '@/apis/api'

export type SearchItem = { title: string; companyName: string }

export type MyPageAll = {
  id: number
  characterId: number | null
  characterName: string
  searchResponses: SearchItem[]
}

export type ApiEnvelope<T> = {
  isSuccess: boolean
  code: string
  message: string
  result: T
}

export async function getMyPageAll(): Promise<MyPageAll> {
  const res = await api.get<ApiEnvelope<MyPageAll>>('/users/my-page/all')

  if (!res.data.isSuccess) {
    throw new Error(res.data.message || 'Failed to fetch my-page/all')
  }
  return res.data.result
}
