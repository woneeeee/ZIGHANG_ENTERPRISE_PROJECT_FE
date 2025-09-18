import Education from '@/components/signup/Education.tsx'
import JobGroup from '@/components/signup/JobGroup.tsx'
import JobPosition from '@/components/signup/JobPosition.tsx'
import Experience from '@/components/signup/Experience.tsx'
import Transport from '@/components/signup/Transport.tsx'
import MaxCommuteMinutes from '@/components/signup/MaxCommuteMinutes.tsx'
import Address from '@/components/signup/Address.tsx'
import Header from '@/components/common/Header.tsx'
import { useEffect, useMemo } from 'react'
import { useSignUpStore } from '@/store/signupStore.ts'
import { useEditMyInfoStore } from '@/stores/editMyInfoStore.ts'
import { useProfileStore } from '@/stores/profileStore.ts'
import { changeEducationKorToEnum, getDetailJobCategory, getJobCategory } from '@/utils/sign-up.ts'
import type { JobPositionEnumType } from '@/types/signup.ts'

export default function SignUp() {
  const signUpData = useSignUpStore((state) => state.signUpData)
  const editMyInfoData = useEditMyInfoStore((state) => state.editMyInfoData)
  const setState = useEditMyInfoStore((state) => state.setState)

  const { profile } = useProfileStore()

  useEffect(() => {
    if (profile && !editMyInfoData) {
      setState({
        editMyInfoData: {
          jobGroups: getJobCategory(profile.mypageResponseDto?.jobGroups),
          education: changeEducationKorToEnum(profile.mypageResponseDto?.education),
          address: profile.mypageResponseDto?.address,
          jobPositions: profile.mypageResponseDto?.jobPositions
            .map((jobPosition) => getDetailJobCategory(jobPosition))
            .filter((item) => item !== undefined) as JobPositionEnumType[],
          maxCommuteMinutes: profile.mypageResponseDto?.maxCommuteMinutes,
          transport: profile.mypageResponseDto?.transport,
          workExperience: profile.mypageResponseDto?.workExperience,
          companyTypes: profile.mypageResponseDto?.companyTypes,
        },
      })
    }
  }, [profile])

  // 진행률 계산
  const progressSignUpData = useMemo(() => {
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

  const progressEditMyInfoData = useMemo(() => {
    let completedSteps = 0
    const totalSteps = 7

    // 각 필드가 완료되었는지 확인
    if (editMyInfoData?.education) completedSteps++
    if (editMyInfoData?.jobGroups) completedSteps++
    if (editMyInfoData?.jobPositions && editMyInfoData.jobPositions.length > 0) completedSteps++
    if (editMyInfoData?.workExperience !== undefined) completedSteps++
    if (editMyInfoData?.transport) completedSteps++
    if (editMyInfoData?.maxCommuteMinutes !== undefined) completedSteps++
    if (editMyInfoData?.address) completedSteps++

    return (completedSteps / totalSteps) * 100
  }, [editMyInfoData])

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
    <main className="relative flex flex-col items-center justify-center">
      <Header variant={'white'}></Header>
      {/* 안내 문구 */}

      <div className="relative desktop:w-[906px] laptop:w-[906px] tablet:w-[702px] w-full border">
        <div
          className="w-full tablet:heading-lg-semibold laptop:heading-lg-semibold desktop:heading-lg-semibold caption-md-semibold desktop:px-[30px] laptop:px-[30px] tablet:px-[30px] desktop:pt-[40px] laptop:pt-[40px] tablet:pt-[40px] desktop:pb-[30px] laptop:pb-[30px] tablet:pb-[30px] fixed top-20 z-40  bg-white px-[16px] pt-[18px] pb-[10px]">
          <p>
            몇 가지 정보만 알려주시면,{' '}
            <br className="desktop:hidden laptop:hidden tablet:hidden block" />{' '}
            <span className="text-purple-500">딱 맞는 공고</span>를 추천 받을 수 있어요!
          </p>
        </div>
        {/* 진행바 */}
        <div className="desktop:mt-[20px] laptop:mt-[20px] tablet:mt-[20px] mt-[10px]">
          <div
            className="tablet:h-[6px] absolute z-30 h-[2px] bg-purple-500 transition-all duration-300 ease-out"
            style={{
              width: editMyInfoData ? `${progressEditMyInfoData}%` : `${progressSignUpData}%`,
            }}
          />
          <div className="tablet:h-[6px] absolute z-20 h-[2px] w-full bg-neutral-100" />
        </div>
      </div>


      <div className="desktop:w-[906px] laptop:w-full tablet:w-full relative w-full">
        {/* 진행바 */}
        <div className="">
          {/* 회원가입 정보 입력 */}
          <Education />
          <JobGroup />
          <JobPosition />
          <Experience />
          <Transport />
          <MaxCommuteMinutes />
          <Address />
        </div>
      </div>
    </main>
  )
}
