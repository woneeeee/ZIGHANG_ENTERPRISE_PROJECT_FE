import Header from '@/components/common/Header.tsx'
import { useSignUpStore } from '@/store/signupStore.ts'
import { useEffect, useMemo } from 'react'
import Education from '@/components/onboarding/sign-up/Education.tsx'
import JobGroup from '@/components/onboarding/sign-up/JobGroup.tsx'
import JobPositions from '@/components/onboarding/sign-up/JobPositions.tsx'
import Experience from '@/components/onboarding/sign-up/Experience.tsx'
import Transport from '@/components/onboarding/sign-up/Transport.tsx'
import MaxCommuteMinutes from '@/components/onboarding/sign-up/MaxCommuteMinutes.tsx'
import Address from '@/components/onboarding/sign-up/Address.tsx'
import { Background2Icon } from '@/assets/svgComponents'

export default function OnboardingSignUp() {
  const signUpData = useSignUpStore((state) => state.signUpData)
  // 진행률 계산
  const progress = useMemo(() => {
    let completedSteps = 0
    const totalSteps = 7

    // 각 필드가 완료되었는지 확인
    if (signUpData?.education) completedSteps++
    if (signUpData?.jobGroups) completedSteps++
    if (signUpData?.jobPositions && signUpData.jobPositions.length > 0) completedSteps++
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
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      {/* 배경 이미지 */}
      <div className="fixed inset-0 z-0">
        <Background2Icon
          className="h-full w-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <Header variant={'space'}></Header>

        {/* 첫 번째 코드의 크기와 구조를 적용 */}
        <div className="relative desktop:w-[906px] laptop:w-[906px] tablet:w-[702px] w-full">
          {/* 안내 문구 및 진행바 */}
          <div
            className="tablet:heading-lg-semibold laptop:heading-lg-semibold desktop:heading-lg-semibold caption-md-semibold fixed desktop:top-20 laptop:top-20 tablet:top-20 z-40 bg-white/10 backdrop-blur-md desktop:w-[906px] laptop:w-[906px] tablet:w-[702px] w-full">
            <p
              className="desktop:px-[30px] laptop:px-[30px] tablet:px-[30px] px-[16px] desktop:pt-[40px] laptop:pt-[40px] tablet:pt-[40px] pt-[18px] desktop:pb-[20px] laptop:pb-[20px] tablet:pb-[20px] pb-[10px] text-white">
              몇 가지 정보만 알려주시면,{' '}
              <br className="desktop:hidden laptop:hidden tablet:hidden block" />{' '}
              <span className="text-purple-400">딱 맞는 공고</span>를 추천 받을 수 있어요!
            </p>

            {/* 진행바를 안내 문구 바로 아래에 추가 */}
            <div
              className="relative desktop:mt-[20px] laptop:mt-[20px] tablet:mt-[20px] mt-[10px] desktop:w-[906px] laptop:w-[906px] tablet:w-[702px] w-full">
              <div
                className="tablet:h-[6px] absolute z-30 h-[2px] bg-purple-400 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
              <div className="tablet:h-[6px] absolute z-20 h-[2px] w-full bg-neutral-100" />
            </div>
          </div>
        </div>

        {/* 컨텐츠 영역 - 첫 번째 코드의 크기 구조 적용 */}
        <div
          className="bg-white/10 backdrop-blur-md flex flex-col items-center justify-center desktop:w-[906px] laptop:w-[906px] tablet:w-[702px] w-full relative desktop:mt-[100px] laptop:mt-[100px] tablet:mt-[100px] mt-[62px]">
          <div className="desktop:w-[906px] laptop:w-[906px] tablet:w-[702px] w-full desktop:px-[12px] laptop:px-[12px] tablet:px-[12px]">
            <Education />
            <JobGroup />
            <JobPositions />
            <Experience />
            <Transport />
            <MaxCommuteMinutes />
            <Address />
          </div>
        </div>
      </div>
    </main>
  )
}
