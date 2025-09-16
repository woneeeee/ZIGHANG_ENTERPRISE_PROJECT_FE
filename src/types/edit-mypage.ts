import type {
  CompanyEnumType,
  EducationEnumType,
  JobGroupEnumType,
  JobPositionEnumType,
  TransportEnumType,
} from '@/types/signup.ts'

export interface EditMyInfoType {
  jobGroups: JobGroupEnumType
  jobPositions: JobPositionEnumType[]
  companyTypes: CompanyEnumType[]
  education: EducationEnumType
  workExperience: number | undefined
  address: string | undefined
  transport: TransportEnumType
  maxCommuteMinutes: number
  receivingEmail: string | null
}
