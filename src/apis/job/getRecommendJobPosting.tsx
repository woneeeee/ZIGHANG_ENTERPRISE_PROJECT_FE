import api from '@/apis/api'
import type { ApiResponse } from '@/types/common.ts'
import type { JobPostingListType } from '@/types/job.ts'


export const getRecommendJobPosting = async (lastId: number | null): Promise<ApiResponse<JobPostingListType>> => {
  // lastId가 null이 아닐 때만 쿼리 파라미터 추가
  const endpoint = lastId !== null ? `/recommend/job-postings?lastId=${lastId}` : '/recommend/job-postings'

  const res = await api.get<ApiResponse<JobPostingListType>>(endpoint)
  return res.data
}
