import type { EducationEnumType, JobGroupEnumType } from '@/types/signup.ts'

export type Job = {
  jobGroups: JobGroupEnumType
  jobPositions: []
  companyTypes: []
  education: EducationEnumType
  workExperience: number
  address: string
  transport: TransportEnumType
  maxCommuteMinutes: number
  receivingEmail: string
}

export type Profile = {
  id: number
  name: string
  email: string
  characterId: number | null
  characterName: string | null
  mypageModifyResponse: Job
}
