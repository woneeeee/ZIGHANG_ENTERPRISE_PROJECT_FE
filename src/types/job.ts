export interface JobPostingListType {
  jobs: JobPostingType[]
  hasNext: boolean
}
export interface JobPostingType {
  jobPostingId: number
  companyName: string
  jobPostingTitle: string
  workExperience: string
  recruitmentType: RecruitmentTypeEnum[] //계약직
  education: string
  commuteMinutes: number
  welfare: string //복지
}
export type RecruitmentTypeKor =
  | '정규직'
  | '계약직'
  | '일용직'
  | '전환형 인턴'
  | '체험형 인턴'
  | '프리랜서'
  | '산업기능요원'
export type RecruitmentTypeEnum =
  | 'FULL_TIME'
  | 'CONTRACT'
  | 'DAY_WORKER'
  | 'CONVERTIBLE_INTERN'
  | 'EXPERIENTIAL_INTERN'
  | 'FREELANCER'
  | 'ALTERNATIVE_MILITARY_SERVICE'
