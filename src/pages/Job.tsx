import Banner from '@/components/job/Banner.tsx'
import Header from '@/components/common/Header.tsx'
import JobCard from '@/components/job/JobCard.tsx'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.tsx'
import { useCallback } from 'react'
import { useInfiniteJobPostings } from '@/apis/job/useInfiniteJobPostings.tsx'
import { ShiningStarIcon } from '@/assets/svgComponents'
import { useOnboardingTestStore } from '@/stores/onboardingTestStore.ts'
import { useNavigate } from 'react-router-dom'

export default function Job () {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('accessToken')
  const onboardingCharacterData = useOnboardingTestStore((state) => state.onboardingCharacterData)
  const {
    jobs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error
  } = useInfiniteJobPostings()

  // 다음 페이지 로드 함수
  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage().then(r => console.log('r', r))
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  // Intersection Observer로 무한스크롤 트리거
  const loadMoreRef = useIntersectionObserver(loadMore)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-lg">채용 공고를 불러오는 중...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-red-500">오류가 발생했습니다.</div>
      </div>
    )
  }

  return (
    <main className="flex flex-col items-center justify-center" >
      <Header />
      <div className="relative desktop:w-[1230px] laptop:w-[930px] tablet:w-[700px] flex w-[300px] flex-col items-start px-5 desktop:mt-[28px] laptop:mt-[28px] tablet:mt-[28px] mt-[16px]">
        <Banner />
        {/* 1순위: accessToken이 없으면 회원가입 유도 */}
        {!accessToken ? (
            <div className="flex items-center justify-center absolute desktop:top-35 laptop:top-35 tablet:top-35 top-22 backdrop-blur-sm bg-white/10 h-[calc(100vh-200px)] left-5 right-5">
              <button
                onClick={() => navigate('/login')}
                className="cursor-pointer z-10 bg-purple-500 text-white py-4 px-8 rounded-[8px] flex gap-x-2 items-center caption-md-semibold desktop:h-[60px] laptop:h-[60px] tablet:h-[60px] desktop:w-fit laptop:w-fit tablet:w-fit desktop:body-2xl-semibold laptop:body-2xl-semibold tablet:body-2xl-semibold w-[160px] py-[12px] px-6">
                <ShiningStarIcon className="hidden desktop:block laptop:block tablet:block" width={20} height={20} />회원가입하고 <br className="block desktop:hidden laptop:hidden tablet:hidden"/> 맞춤 공고 열어보기
              </button>
            </div>
          ) :
          /* 2순위: accessToken은 있지만 onboardingCharacterData가 없으면 테스트 유도 */
          !onboardingCharacterData ? (
            <div className="flex items-center justify-center absolute desktop:top-35 laptop:top-35 tablet:top-35 top-22 backdrop-blur-sm bg-white/10 h-[calc(100vh-200px)] left-5 right-5">
              <button
                onClick={() => navigate('/onboarding/start')}
                className="cursor-pointer z-10 bg-purple-500 text-white py-4 px-8 rounded-[8px] flex gap-x-2 items-center caption-md-semibold desktop:h-[60px] laptop:h-[60px] tablet:h-[60px] desktop:w-fit laptop:w-fit tablet:w-fit desktop:body-2xl-semibold laptop:body-2xl-semibold tablet:body-2xl-semibold py-[12px] px-5">
                <ShiningStarIcon className="hidden desktop:block laptop:block tablet:block" width={20} height={20} />커리어 성향 테스트하고 <br className="block desktop:hidden laptop:hidden tablet:hidden"/> 맞춤 공고 열어보기
              </button>
            </div>
          ) : null}
        <p
          className="desktop:mt-[24px] desktop:mb-[20px] laptop:mt-[24px] laptop:mb-[20px] tablet:mt-[24px] tablet:mb-[20px] mt-[10px] pl-2 tablet:body-2xl-semibold caption-sm-medium">
          총 <span className="text-purple-500">{jobs.length}</span>건
        </p>

        <section className="mt-2 grid tablet:gap-y-5 desktop:gap-y-5 desktop:gap-x-[30px] laptop:gap-y-5 laptop:gap-x-[30px] gap-y-2 laptop:grid-cols-2 desktop:grid-cols-2 w-full">
          {jobs.map((job) => (
            <JobCard key={job.jobPostingId} job={job} />
          ))}
        </section>

        {/* 무한스크롤 로딩 트리거 및 상태 표시 */}
        {hasNextPage && (
          <div
            ref={loadMoreRef}
            className="flex justify-center items-center py-8 w-full"
          >
            {isFetchingNextPage ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"></div>
                <span className="text-gray-600">더 많은 공고를 불러오는 중...</span>
              </div>
            ) : (
              <div className="text-gray-500">스크롤하여 더 보기</div>
            )}
          </div>
        )}

        {/* 더 이상 데이터가 없을 때 */}
        {!hasNextPage && jobs.length > 0 && (
          <div className="flex justify-center items-center py-8 w-full">
            <div className="text-gray-500">모든 채용공고를 확인했습니다.</div>
          </div>
        )}
      </div>
    </main>
  )
}
