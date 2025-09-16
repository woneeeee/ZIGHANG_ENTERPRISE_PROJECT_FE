import api from '@/apis/api'
import type { ApiResponse } from '@/types/common.ts'
import type {
  OnboardingCharacterType,
  OnboardingTestType,
  ReOnboardingCharacterType,
} from '@/types/onboarding-test.ts'

export const postOnboardingCharacter = async (
  onboardingTestData: OnboardingTestType,
): Promise<ApiResponse<OnboardingCharacterType>> => {
  const res = await api.post<ApiResponse<OnboardingCharacterType>>(
    `/onboardings/character`,
    onboardingTestData,
  )

  return res.data
}

export const repostOnboardingCharacter = async (
  onboardingTestData: OnboardingTestType,
): Promise<ApiResponse<ReOnboardingCharacterType>> => {
  const res = await api.post<ApiResponse<ReOnboardingCharacterType>>(
    `/onboardings/afterOnboading/character`,
    onboardingTestData,
  )

  return res.data
}
