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
import { useEditMyInfoStore } from '@/stores/editMyInfoStore.ts'
import { useProfileStore } from '@/stores/profileStore.ts'
import { getProfileInfo } from '@/apis/users/getProfileInfo.tsx'
import { changeEducationKorToEnum, getDetailJobCategory, getJobCategory } from '@/utils/sign-up.ts'
import type { JobPositionEnumType } from '@/types/signup.ts'

export default function SignUp() {
  const signUpData = useSignUpStore((state) => state.signUpData)
  const editMyInfoData = useEditMyInfoStore((state) => state.editMyInfoData)
  const setState = useEditMyInfoStore((state) => state.setState)

  const { profile, setProfile } = useProfileStore()

  useEffect(() => {
    ;(async () => {
      try {
        const me = await getProfileInfo()
        console.log('me', me)
        setProfile(me)
      } catch (error) {
        console.error('프로필 정보를 불러오지 못했어요.', error)
      }
    })()
  }, [setProfile])

  useEffect(() => {
    if (profile && !editMyInfoData) {
      setState({
        editMyInfoData: {
          jobGroups: getJobCategory(profile.mypageModifyResponse?.jobGroups),
          education: changeEducationKorToEnum(profile.mypageModifyResponse?.education),
          address: profile.mypageModifyResponse?.address,
          jobPositions: profile.mypageModifyResponse?.jobPositions
            .map((jobPosition) => getDetailJobCategory(jobPosition))
            .filter(item => item !== undefined) as JobPositionEnumType[],
          maxCommuteMinutes: profile.mypageModifyResponse?.maxCommuteMinutes,
          transport: profile.mypageModifyResponse?.transport,
          workExperience: profile.mypageModifyResponse?.workExperience,
          companyTypes: profile.mypageModifyResponse?.companyTypes,
        },
      })
    }
  }, [profile])

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
      <div className="desktop:flex laptop:flex tablet:flex desktop:pt-[40px] desktop:pb-[30px] desktop:px-[30px] laptop:pt-[40px] laptop:pb-[30px] laptop:px-[30px] tablet:py-[20px] tablet:px-[30px] tablet:heading-lg-semibold laptop:heading-lg-semibold desktop:heading-lg-semibold caption-md-semibold fixed z-40 w-full bg-white px-4 pt-[18px] pb-[10px]">
        <p>몇 가지 정보만 알려주시면, </p>
        <p>
          <span className="text-purple-500">딱 맞는 공고</span>를 추천 받을 수 있어요!
        </p>
      </div>

      {/* 진행바 */}
      <div className="tablet:px-[34px] laptop:px-[34px] desktop:px-[34px] px-0">
        <div className="desktop:top-45 laptop:top-45 tablet:top-37 desktop:left-[34px] laptop:left-[34px] tablet:left-[34px] desktop:w-[calc(100%-68px)] laptop:w-[calc(100%-68px)] tablet:w-[calc(100%-68px)] fixed top-27 left-0 w-full">
          <div
            className="tablet:h-[6px] absolute z-30 h-[2px] bg-purple-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
          <div className="tablet:h-[6px] absolute z-20 h-[2px] w-full bg-neutral-100" />
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
