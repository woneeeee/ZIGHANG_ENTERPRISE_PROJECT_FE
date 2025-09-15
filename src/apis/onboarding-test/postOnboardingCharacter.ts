import api from '@/apis/api'
import type { ApiResponse } from '@/types/common.ts'
import type { OnboardingCharacterType, OnboardingTestType } from '@/types/onboarding-test.ts'

export const postOnboardingCharacter = async (
  onboardingTestData: OnboardingTestType,
): Promise<ApiResponse<OnboardingCharacterType>> => {
  const res = await api.post<ApiResponse<OnboardingCharacterType>>(
    `/onboardings/character`,
    onboardingTestData,
  )

  return res.data
}
