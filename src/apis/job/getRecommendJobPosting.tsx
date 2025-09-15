import api from '@/apis/api'
import type { ApiResponse } from '@/types/common.ts'
import type { JobPostingListType } from '@/types/job.ts'


export const getRecommendJobPosting = async (lastId: number): Promise<ApiResponse<JobPostingListType>> => {
  const res = await api.get<ApiResponse<JobPostingListType>>(`/recommend/job-postings?lastId=${lastId}`)

  return res.data
}
