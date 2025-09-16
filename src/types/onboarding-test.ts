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
    additionalProp1: number
    additionalProp2: number
    additionalProp3: number
  }
  welfareList: string[]
  characterId: number
  characterName: string
}
