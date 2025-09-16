import type {
  CompanyEnumType,
  EducationEnumType,
  JobGroupEnumType,
  JobPositionEnumType,
  TransportEnumType,
} from '@/types/signup.ts'

export interface EditMyInfoType {
  jobGroups: JobGroupEnumType | undefined
  jobPositions: JobPositionEnumType[] | undefined
  companyTypes: CompanyEnumType[]
  education: EducationEnumType | undefined
  workExperience: number | undefined
  address: string | undefined
  transport: TransportEnumType
  maxCommuteMinutes: number
}
