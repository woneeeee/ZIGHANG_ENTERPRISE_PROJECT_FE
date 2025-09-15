import { create } from 'zustand'
import type { OnboardingCharacterType, OnboardingTestType } from '@/types/onboarding-test.ts'

interface SetOnboardingTestStoreType {
  onboardingTestData?: OnboardingTestType
  onboardingCharacterData?: OnboardingCharacterType
}

interface OnboardingTestStoreType {
  onboardingTestData: OnboardingTestType | undefined
  onboardingCharacterData: OnboardingCharacterType | undefined
  setState: (params: SetOnboardingTestStoreType) => void
}

export const useOnboardingTestStore = create<OnboardingTestStoreType>((set) => ({
  onboardingTestData: undefined,
  onboardingCharacterData: undefined,
  setState: (params: SetOnboardingTestStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
