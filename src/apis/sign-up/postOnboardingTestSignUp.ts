import api from '@/apis/api'
import type { ApiResponse } from '@/types/common.ts'
import type { SignUpDataResponseType, SignUpDataType } from '@/types/signup.ts'

export const postOnboardingTestSignUp = async (
  signUpData: SignUpDataType,
): Promise<ApiResponse<SignUpDataResponseType>> => {
  const res = await api.post<ApiResponse<SignUpDataResponseType>>(
    `/onboardings/test/signup`,
    signUpData,
  )

  return res.data
}
