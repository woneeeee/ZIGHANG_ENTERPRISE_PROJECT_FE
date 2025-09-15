export interface JobPostingListType {
  jobs: JobPostingType[]
  hasNext: boolean
}
export interface JobPostingType {
  jobPostingId: number
  companyName: string
  jobPostingTitle: string
  workExperience: string
  recruitmentType: string[]
  education: string
  commuteMinutes: number
  welfare: string
}
