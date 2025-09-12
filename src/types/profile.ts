export type Job = {
  jobGroups: string
  jobPositions: []
  companyTypes: []
  education: string
  workExperience: number
  address: string
  transport: string
  maxCommuteMinutes: number
  receivingEmail: string
}

export type Profile = {
  id: number
  name: string
  email: string
  characterId: number
  characterName: string
  mypageModifyResponse: Job
}
