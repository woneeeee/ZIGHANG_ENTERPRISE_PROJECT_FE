import { levelOfEducationConstants } from '@/constants/SignUp.ts'
import { useSignUpStore } from '@/store/signupStore.ts'
import type { EducationEnumType } from '@/types/signup.ts'

export default function Education() {
  const setState = useSignUpStore((state) => state.setState)
  const signUpData = useSignUpStore((state) => state.signUpData)

  const handleEducationClick = (education: EducationEnumType) => {
    // 1. 상태 저장
    setState({ ...signUpData, signUpData: { ...signUpData, education: education } })
    // 2. Category 섹션으로 부드러운 스크롤
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
      id={"education-section"}
      className="tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] flex min-h-screen flex-col gap-y-4 px-4 desktop:pt-[150px] laptop:pt-[150px] tablet:pt-[120px] pt-[84px]">
      <h1 className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold">
        최종학력이 어떻게 되시나요?
      </h1>
      <section className="flex flex-wrap gap-[6px]">
        {levelOfEducationConstants.map((education) => {
          return (
            <button
              onClick={() => handleEducationClick(education.enum)}
              key={education.kor}
              className={`${signUpData?.education === education.enum ? 'bg-purple-500 text-white' : 'border border-neutral-400'} desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-sm-medium flex h-[36px] cursor-pointer items-center justify-center rounded-[6px] desktop:px-[24px] desktop:py-[12px] laptop:px-[24px] laptop:py-[12px] tablet:px-[24px] tablet:py-[12px] px-[12px] py-[10px] hover:border-purple-300 hover:bg-purple-50`}
            >
              {education.kor}
            </button>
          )
        })}
      </section>
    </main>
  )
}
