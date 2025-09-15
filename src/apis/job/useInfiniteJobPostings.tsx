// 1. 커스텀 훅: 무한스크롤 로직
import { getRecommendJobPosting } from '@/apis/job/getRecommendJobPosting.tsx'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useInfiniteJobPostings = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error
  } = useInfiniteQuery({
    queryKey: ['recommendJobPostings'],
    queryFn: ({ pageParam = 0 }) => getRecommendJobPosting(pageParam),
    getNextPageParam: (lastPage) => {
      // hasNext가 true이면 다음 페이지의 lastId 반환
      if (lastPage.result.hasNext && lastPage.result.jobs.length > 0) {
        const lastJob = lastPage.result.jobs[lastPage.result.jobs.length - 1]
        return lastJob.jobPostingId
      }
      return undefined
    },
    initialPageParam: 0,
  })

  // 모든 페이지의 데이터를 평탄화
  const allJobs = data?.pages.flatMap(page => page.result.jobs) ?? []

  return {
    jobs: allJobs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error
  }
}
