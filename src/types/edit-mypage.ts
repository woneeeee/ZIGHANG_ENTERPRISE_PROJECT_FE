import type {
  CompanyEnumType,
  EducationEnumType,
  JobGroupEnumType,
  JobPositionEnumType,
  TransportEnumType,
} from '@/types/signup.ts'

export interface EditMyInfoType {
  jobGroups: JobGroupEnumType | undefined | null
  jobPositions: JobPositionEnumType[] | undefined | null
  companyTypes: CompanyEnumType[] | undefined | null
  education: EducationEnumType | undefined | null
  workExperience: number | undefined | null
  address: string | undefined | null
  transport: TransportEnumType | undefined | null
  maxCommuteMinutes: number | undefined | null
}
