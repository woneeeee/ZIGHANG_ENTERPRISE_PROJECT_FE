import api from '@/apis/api'
import type { ApiResponse } from '@/types/common.ts'
import type { SignUpDataResponseType, SignUpDataType } from '@/types/signup.ts'

export const postOnboardingSignUp = async (
  signUpData: SignUpDataType,
): Promise<ApiResponse<SignUpDataResponseType>> => {
  const res = await api.post<ApiResponse<SignUpDataResponseType>>(
    `/onboardings/signup`,
    signUpData,
  )

  return res.data
}
