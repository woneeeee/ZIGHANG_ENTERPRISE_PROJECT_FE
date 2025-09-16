export type Job = {
  jobGroups: string
  jobPositions: []
  education: string
  workExperience: number
  address: string
  transport: string
  maxCommuteMinutes: number
}

export type Profile = {
  id: number
  name: string
  email: string
  characterId: number | null
  characterName: string | null
  mypageModifyResponse: Job
}
