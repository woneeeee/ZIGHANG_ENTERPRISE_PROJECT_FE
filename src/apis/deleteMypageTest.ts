import api from '@/apis/api'

export type ReOnboarding = {
  userId: number
  name: string
  message: string
}

export type ApiEnvelope<T> = {
  isSuccess: boolean
  code: string
  message: string
  result: T
}

export async function deleteReOnboarding(): Promise<ReOnboarding> {
  const res = await api.delete<ApiEnvelope<ReOnboarding>>('/users/my-page/re-onboarding')

  if (!res.data.isSuccess) {
    throw new Error(res.data.message || 'Failed to fetch users/my-page/re-onboarding')
  }
  return res.data.result
}
