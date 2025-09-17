import { create } from 'zustand'
import type {
  OnboardingCharacterType,
  OnboardingTestType,
  ReOnboardingCharacterType,
} from '@/types/onboarding-test.ts'
import { persist } from 'zustand/middleware'

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

export const useOnboardingTestStore = create<OnboardingTestStoreType>()(
  persist(
    (set) => ({
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
    }),
    {
      name: 'onboarding-test-storage', // localStorage 키 이름
      partialize: (state) => ({
        onboardingCharacterData: state.onboardingCharacterData
      }), // onboardingCharacterData만 저장
    }
  )
)

// persist 미들웨어가 적용된 ReOnboarding 스토어
export const useReOnboardingTestStore = create<ReOnboardingTestStoreType>()(
  persist(
    (set) => ({
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
    }),
    {
      name: 'reonboarding-test-storage', // localStorage 키 이름
      // 선택적으로 특정 필드만 저장하고 싶다면:
      partialize: (state) => ({
        reonboardingCharacterData: state.reonboardingCharacterData,
        // reonboardingTestData도 저장하고 싶다면 주석 해제:
        // reonboardingTestData: state.reonboardingTestData,
      }),
      // 데이터 복원 완료 시 콜백
      onRehydrateStorage: () => (state) => {
        console.log('ReOnboarding 데이터 복원 완료:', state?.reonboardingCharacterData)
      },
    }
  )
)
