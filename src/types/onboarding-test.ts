export interface OnboardingTestType {
  q1?: CompanyType
  q2?: CompanyType
  q3?: CompanyType
  q4?: string
  q5?: string
  q6?: string
}

export interface OnboardingCharacterType {
  companyTypeEnumList: CompanyType[]
  companyRatio: {
    additionalProp1: number
    additionalProp2: number
    additionalProp3: number
  }
  welfareList: string[]
  characterId: number
  characterName: string
}

export type CompanyType = 'MAJOR' | 'MID_SIZE' | 'FOREIGN' | 'UNICORN' | 'STARTUP' | 'SMALL_MEDIUM'
