import Banner from '@/components/job/Banner.tsx'
import Header from '@/components/common/Header.tsx'
import JobCard from '@/components/job/JobCard.tsx'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.tsx'
import { useCallback, useEffect } from 'react'
import { useInfiniteJobPostings } from '@/apis/job/useInfiniteJobPostings.tsx'
import { ShiningStarIcon } from '@/assets/svgComponents'
import { useOnboardingTestStore, useReOnboardingTestStore } from '@/stores/onboardingTestStore.ts'
import { useNavigate } from 'react-router-dom'
import { NoMatchingJobs } from '@/components/job/NoMatchingJobs.tsx'

export default function Job() {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('accessToken')
  const onboardingCharacterData = useOnboardingTestStore((state) => state.onboardingCharacterData)
  const reonboardingCharacterData = useReOnboardingTestStore(
    (state) => state.reonboardingCharacterData,
  )

  const { jobs, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } =
    useInfiniteJobPostings()

  // 다음 페이지 로드 함수
  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  // 오버레이 표시 여부 확인
  const shouldShowOverlay = !accessToken || !(onboardingCharacterData || reonboardingCharacterData)

  // 스크롤 제어 useEffect 추가
  useEffect(() => {
    if (shouldShowOverlay) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [shouldShowOverlay])

  useEffect(() => {
    console.log('jobs', jobs)
    console.log('onboardingCharacterData', onboardingCharacterData)
    console.log('reonboardingCharacterData', reonboardingCharacterData)
  }, [jobs, onboardingCharacterData, reonboardingCharacterData])

  // Intersection Observer로 무한스크롤 트리거
  const loadMoreRef = useIntersectionObserver(loadMore)

  if (error) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-red-500">오류가 발생했습니다.</div>
      </div>
    )
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      {isLoading ? (
        <div className="flex h-[calc(100vh-200px)] flex-col items-center justify-center py-8">
          <img src="/job/job-loading.gif" alt="로딩 중" className="mb-4 desktop:h-[126px] laptop:h-[126px] tablet:h-[126px] h-[73px] desktop:w-[120px] laptop:w-[120px] tablet:w-[120px] w-[70px]" />
          <div className="flex flex-col desktop:gap-y-1 laptop:gap-y-1 tablet:gap-y-1 gap-y-[2px] items-center">
            <p className="desktop:body-lg-bold tablet:body-lg-bold laptop:body-lg-bold body-md-bold text-purple-600">잠시만 기다려 주세요.</p>
            <p className="body-caption-xs-medium desktop:body-xl-medium laptop:body-xl-medium tablet:body-xl-medium text-neutral-600">곧 당신에게 딱 맞는 공고가 도착합니다.</p>
          </div>
        </div>
      ) : (
        <div className="desktop:w-[1230px] laptop:w-[930px] tablet:w-[700px] desktop:px-0 laptop:px-0 tablet:px-0 desktop:mt-[28px] laptop:mt-[28px] tablet:mt-[28px] relative mt-[16px] flex w-[320px] flex-col items-start px-5">
          <Banner />
          {/* 1순위: accessToken이 없으면 회원가입 유도 */}
          {!accessToken ? (
            <div className="desktop:top-35 laptop:top-35 tablet:top-35 absolute top-22 right-5 left-5 flex h-[calc(100vh-200px)] items-center justify-center bg-white/10 backdrop-blur-sm">
              <button
                onClick={() => navigate('/login')}
                className="caption-md-semibold desktop:h-[60px] laptop:h-[60px] tablet:h-[60px] desktop:w-fit laptop:w-fit tablet:w-fit desktop:body-2xl-semibold laptop:body-2xl-semibold tablet:body-2xl-semibold z-10 flex w-[160px] cursor-pointer items-center gap-x-2 rounded-[8px] bg-purple-500 px-6 px-8 py-4 py-[12px] text-white"
              >
                <ShiningStarIcon
                  className="desktop:block laptop:block tablet:block hidden"
                  width={20}
                  height={20}
                />
                회원가입하고 <br className="desktop:hidden laptop:hidden tablet:hidden block" />{' '}
                맞춤 공고 열어보기
              </button>
            </div>
          ) : /* 2순위: accessToken은 있지만 onboardingCharacterData가 없으면 테스트 유도 */
          !(onboardingCharacterData || reonboardingCharacterData) ? (
            <div className="desktop:top-35 laptop:top-35 tablet:top-35 absolute top-22 w-full flex h-[calc(100vh-200px)] items-center justify-center bg-white/10 backdrop-blur-sm">
              <button
                onClick={() => navigate('/onboarding/start')}
                className="caption-md-semibold desktop:h-[60px] laptop:h-[60px] tablet:h-[60px] desktop:w-fit laptop:w-fit tablet:w-fit desktop:body-2xl-semibold laptop:body-2xl-semibold tablet:body-2xl-semibold z-10 flex cursor-pointer items-center gap-x-2 rounded-[8px] bg-purple-500 px-5 px-8 py-4 py-[12px] text-white"
              >
                <ShiningStarIcon
                  className="desktop:block laptop:block tablet:block hidden"
                  width={20}
                  height={20}
                />
                커리어 성향 테스트하고{' '}
                <br className="desktop:hidden laptop:hidden tablet:hidden block" /> 맞춤 공고
                열어보기
              </button>
            </div>
          ) : null}
          <p className="desktop:mt-[24px] desktop:mb-[20px] laptop:mt-[24px] laptop:mb-[20px] tablet:mt-[24px] tablet:mb-[20px] tablet:body-2xl-semibold caption-sm-medium mt-[10px] pl-2">
            총 <span className="text-purple-500">{jobs.length}</span>건
          </p>

          <section className="tablet:gap-y-5 desktop:gap-y-5 desktop:gap-x-[30px] laptop:gap-y-5 laptop:gap-x-[30px] laptop:grid-cols-2 desktop:grid-cols-2 mt-2 grid w-full gap-y-2">
            {jobs.length === 0 ? (
              <div className="desktop:min-h-[60vh] laptop:min-h-[60vh] tablet:min-h-[60vh] col-span-full flex min-h-[40vh] items-center justify-center">
                <NoMatchingJobs />
              </div>
            ) : (
              jobs.map((job) => <JobCard key={job.jobPostingId} job={job} />)
            )}
          </section>

          {/* 무한스크롤 로딩 트리거 및 상태 표시 */}
          {hasNextPage && (
            <div ref={loadMoreRef} className="flex w-full items-center justify-center py-8">
              {isFetchingNextPage ? (
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-purple-500"></div>
                  <span className="text-gray-600">더 많은 공고를 불러오는 중...</span>
                </div>
              ) : (
                <div className="text-gray-500">스크롤하여 더 보기</div>
              )}
            </div>
          )}

          {/* 더 이상 데이터가 없을 때 */}
          {!hasNextPage && jobs.length > 0 && (
            <div className="flex w-full items-center justify-center py-8">
              <div className="body-md-medium desktop:body-2xl-medium laptop:body-2xl-medium tablet:body-2xl-medium text-neutral-500">
                모든 채용공고를 확인했습니다.
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  )
}
