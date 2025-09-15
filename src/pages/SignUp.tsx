import Education from '@/components/signup/Education.tsx'
import Category from '@/components/signup/Category.tsx'
import JobCategory from '@/components/signup/JobCategory.tsx'
import Experience from '@/components/signup/Experience.tsx'
import Commute from '@/components/signup/Commute.tsx'
import CommutingTime from '@/components/signup/CommutingTime.tsx'
import Address from '@/components/signup/Address.tsx'
import Header from '@/components/common/Header.tsx'
import { useEffect, useMemo } from 'react'
import { useSignUpStore } from '@/store/signupStore.ts'

export default function SignUp() {
  const signUpData = useSignUpStore((state) => state.signUpData)

  // 진행률 계산
  const progress = useMemo(() => {
    let completedSteps = 0
    const totalSteps = 7

    // 각 필드가 완료되었는지 확인
    if (signUpData?.education) completedSteps++
    if (signUpData?.jobGroupEnum) completedSteps++
    if (signUpData?.jobPositionEnum && signUpData.jobPositionEnum.length > 0) completedSteps++
    if (signUpData?.workExperience !== undefined) completedSteps++
    if (signUpData?.transport) completedSteps++
    if (signUpData?.maxCommuteMinutes !== undefined) completedSteps++
    if (signUpData?.address) completedSteps++

    return (completedSteps / totalSteps) * 100
  }, [signUpData])

  useEffect(() => {
    // 브라우저의 스크롤 복원 기능 비활성화
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    // 스크롤을 맨 위로 이동
    window.scrollTo(0, 0)

    // 컴포넌트 언마운트 시 원래 설정으로 복구
    return () => {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto'
      }
    }
  }, [])

  return (
    <main className="relative">
      <Header variant={'white'}></Header>
      {/* 안내 문구 */}
      <div
        className="z-40 fixed bg-white w-full desktop:flex laptop:flex tablet:flex desktop:pt-[40px] desktop:pb-[30px] desktop:px-[30px] laptop:pt-[40px] laptop:pb-[30px] laptop:px-[30px] tablet:py-[20px] tablet:px-[30px] pt-[18px] pb-[10px] px-4 tablet:heading-lg-semibold laptop:heading-lg-semibold desktop:heading-lg-semibold caption-md-semibold">
        <p>몇 가지 정보만 알려주시면, </p>
        <p><span className="text-purple-500">딱 맞는 공고</span>를 추천 받을 수 있어요!</p>
      </div>

      {/* 진행바 */}
      <div className="px-0 tablet:px-[34px] laptop:px-[34px] desktop:px-[34px]">
        <div
          className="fixed desktop:top-45 laptop:top-45 tablet:top-37 top-27 desktop:left-[34px] laptop:left-[34px] tablet:left-[34px] left-0 desktop:w-[calc(100%-68px)] laptop:w-[calc(100%-68px)] tablet:w-[calc(100%-68px)] w-full">
          <div
            className="absolute z-30 tablet:h-[6px] h-[2px] bg-purple-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
          <div className="absolute z-20 w-full tablet:h-[6px] h-[2px] bg-neutral-100" />
        </div>

        {/* 회원가입 정보 입력 */}
        <Education />
        <Category />
        <JobCategory />
        <Experience />
        <Commute />
        <CommutingTime />
        <Address />
      </div>

    </main>
  )
}
