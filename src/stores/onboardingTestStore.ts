import { create } from 'zustand'
import type {
  OnboardingCharacterType,
  OnboardingTestType,
  ReOnboardingCharacterType,
} from '@/types/onboarding-test.ts'

interface SetOnboardingTestStoreType {
  onboardingTestData?: OnboardingTestType
  onboardingCharacterData?: OnboardingCharacterType
}

interface SetReOnboardingTestStoreType {
  onboardingTestData?: OnboardingTestType
  reonboardingCharacterData?: ReOnboardingCharacterType
}

interface OnboardingTestStoreType {
  onboardingTestData: OnboardingTestType | undefined
  onboardingCharacterData: OnboardingCharacterType | undefined
  setState: (params: SetOnboardingTestStoreType) => void
  reset: () => void
}

interface ReOnboardingTestStoreType {
  reonboardingTestData: OnboardingTestType | undefined
  reonboardingCharacterData: ReOnboardingCharacterType | undefined
  setState: (params: SetReOnboardingTestStoreType) => void
  reset: () => void
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
  reset: () => {
    set({
      onboardingTestData: undefined,
      onboardingCharacterData: undefined,
    })
  },
}))

export const useReOnboardingTestStore = create<ReOnboardingTestStoreType>((set) => ({
  reonboardingTestData: undefined,
  reonboardingCharacterData: undefined,
  setState: (params: SetReOnboardingTestStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
  reset: () => {
    set({
      reonboardingTestData: undefined,
      reonboardingCharacterData: undefined,
    })
  },
}))
