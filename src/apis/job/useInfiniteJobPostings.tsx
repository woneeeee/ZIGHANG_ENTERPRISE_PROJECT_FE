// 1. 커스텀 훅: 무한스크롤 로직
import { getRecommendJobPosting } from '@/apis/job/getRecommendJobPosting.tsx'
import { type QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query'
import type { RecruitmentTypeEnum } from '@/types/job.ts'

// API 응답 타입 정의
export interface ApiResponse<T> {
  result: {
    hasNext: boolean
    jobs: T[]
  }
}

export interface JobPostingListType {
  jobPostingId: number
  companyName: string
  jobPostingTitle: string
  workExperience: string
  recruitmentType: RecruitmentTypeEnum[]
  education: string
  commuteMinutes: number
  welfare: string
}

// 커스텀 훅 반환 타입 정의
interface UseInfiniteJobPostingsReturn {
  jobs: JobPostingListType[]
  fetchNextPage: () => void
  hasNextPage: boolean
  isFetchingNextPage: boolean
  isLoading: boolean
  error: Error | null
}

export const useInfiniteJobPostings = (): UseInfiniteJobPostingsReturn => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } =
    useInfiniteQuery({
      queryKey: ['recommendJobPostings'],
      queryFn: async ({
        pageParam = null,
      }: QueryFunctionContext<string[], number | null>): Promise<
        ApiResponse<JobPostingListType>
      > => {
        return getRecommendJobPosting(pageParam)
      },
      getNextPageParam: (lastPage: ApiResponse<JobPostingListType>): number | undefined => {
        // 가장 중요한 수정: hasNext가 false면 undefined 반환
        if (!lastPage.result.hasNext) {
          console.log('더 이상 로드할 데이터가 없습니다.')
          return undefined
        }

        // jobs 배열이 비어있으면 undefined 반환
        if (!lastPage.result.jobs || lastPage.result.jobs.length === 0) {
          console.log('현재 페이지에 jobs가 없습니다.')
          return undefined
        }

        // 다음 페이지가 있으면 마지막 job의 ID 반환
        const lastJob = lastPage.result.jobs[lastPage.result.jobs.length - 1]
        console.log('다음 페이지 파라미터:', lastJob.jobPostingId)
        return lastJob.jobPostingId
      },
      initialPageParam: null, // 첫 요청은 null로 시작
      // 추가 옵션들
      staleTime: 0, // 항상 새로운 데이터 요청
      gcTime: 1 * 60 * 1000, // 1분 후 가비지 컬렉션
    })

  // 모든 페이지의 데이터를 평탄화
  const allJobs: JobPostingListType[] = data?.pages.flatMap((page) => page.result.jobs) ?? []

  // 디버깅용 로그
  console.log('전체 작업 수:', allJobs.length)
  console.log('hasNextPage:', hasNextPage)
  console.log('isFetchingNextPage:', isFetchingNextPage)

  return {
    jobs: allJobs,
    fetchNextPage,
    hasNextPage: hasNextPage ?? false,
    isFetchingNextPage,
    isLoading,
    error,
  }
}
