import { levelOfEducationConstants } from '@/constants/SignUp.ts'
import { useSignUpStore } from '@/store/signupStore.ts'
import type { EducationEnumType } from '@/types/signup.ts'
import { useEditMyInfoStore } from '@/stores/editMyInfoStore.ts'
import { useEffect } from 'react'

export default function Education() {
  const setSignUpState = useSignUpStore((state) => state.setState)
  const signUpData = useSignUpStore((state) => state.signUpData)
  const setEditMyInfoDataState = useEditMyInfoStore((state) => state.setState)
  const editMyInfoData = useEditMyInfoStore((state) => state.editMyInfoData)

  useEffect(() => {
    if (editMyInfoData) {
      setSignUpState({
        ...signUpData,
        signUpData: { ...signUpData, education: editMyInfoData?.education },
      })
    }
  }, [editMyInfoData])

  const handleEducationClick = (education: EducationEnumType) => {
    if (editMyInfoData) {
      //마이페이지 정보가 있으면
      setEditMyInfoDataState({
        ...editMyInfoData,
        editMyInfoData: { ...editMyInfoData, education: editMyInfoData.education === education ? undefined : education },
      })
    } else {
      //마이페이지 정보가 없어 새로 회원가입 하는 경우
      setSignUpState({ ...signUpData, signUpData: { ...signUpData, education: signUpData?.education === education ? undefined : education } })
    }

    // 2. JobGroup 섹션으로 부드러운 스크롤
    const categorySection = document.getElementById('category-section')
    if (categorySection) {
      categorySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <main
      id={'education-section'}
      className="tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] desktop:pt-[150px] laptop:pt-[150px] tablet:pt-[150px] flex min-h-screen flex-col gap-y-4 desktop:px-8 laptop:px-8 tablet:px-8 px-4 pt-[84px]"
    >
      <h1 className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold">
        최종학력이 어떻게 되시나요?
      </h1>
      <section className="flex flex-wrap gap-[6px]">
        {levelOfEducationConstants.map((education) => {
          return (
            <button
              onClick={() => handleEducationClick(education.enum)}
              key={education.kor}
              className={`${editMyInfoData ? (editMyInfoData.education === education.enum ? 'bg-purple-500 text-white' : 'border border-neutral-400') : signUpData?.education === education.enum ? 'bg-purple-500 text-white' : 'border border-neutral-400 hover:border-purple-300 hover:bg-purple-50'} desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-sm-medium desktop:px-[24px] desktop:py-[12px] laptop:px-[24px] laptop:py-[12px] tablet:px-[24px] tablet:py-[12px] flex h-[36px] cursor-pointer items-center justify-center rounded-[6px] px-[12px] py-[10px]`}
            >
              {education.kor}
            </button>
          )
        })}
      </section>
    </main>
  )
}
