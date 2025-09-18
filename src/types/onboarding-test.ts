import type { SearchItem } from '@/apis/getOnboardingResultAll'
import type { CompanyEnumType } from '@/types/signup.ts'

export interface OnboardingTestType {
  q1?: CompanyEnumType
  q2?: CompanyEnumType
  q3?: CompanyEnumType
  q4?: string
  q5?: string
  q6?: string
}

export interface OnboardingCharacterType {
  companyTypeEnumList: CompanyEnumType[]
  companyRatio: {
    FOREIGN: number
    MAJOR: number
    MID_SIZE: number
    SMALL_MEDIUM: number
    STARTUP: number
    UNICORN: number
  }
  welfareList: string[]
  characterId: number
  characterName: string
}

export interface ReOnboardingCharacterType {
  id: number
  characterId: number
  characterName: string
  searchResponses: SearchItem[]
}
