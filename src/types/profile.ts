import type { EducationEnumType, JobGroupEnumType, TransportEnumType } from '@/types/signup.ts'

export type Job = {
  jobGroups: JobGroupEnumType
  jobPositions: []
  companyTypes: []
  education: EducationEnumType
  workExperience: number
  address: string
  transport: TransportEnumType
  maxCommuteMinutes: number
}

export type Profile = {
  id: number
  name: string
  email: string
  characterId: number | null
  characterName: string | null
  mypageResponseDto: Job
}
