import {
  category1Constants,
  category2Constants,
  category3Constants,
  category4Constants,
} from '@/constants/SignUp.ts'
import { useSignUpStore } from '@/store/signupStore.ts'
import type { JobGroupEnumType } from '@/types/signup.ts'

export default function JobGroup() {
  const setState = useSignUpStore((state) => state.setState)
  const signUpData = useSignUpStore((state) => state.signUpData)

  const handleCategoryClick = (category: JobGroupEnumType) => {
    // 1. 상태 저장
    if (signUpData) {
      setState({
        ...signUpData,
        signUpData: {
          ...signUpData,
          jobGroups: signUpData.jobGroups === category ? undefined : category,
          jobPositions: undefined,
        },
      })
    }

    // 2. JobGroup 섹션으로 부드러운 스크롤
    const categorySection = document.getElementById('job-category-section')
    if (categorySection) {
      categorySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <main
      id="category-section"
      className="desktop:pt-[220px] laptop:pt-[220px] tablet:pt-[220px] flex min-h-screen flex-col gap-y-4 px-4 pt-[150px]"
    >
      <h1 className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold text-white">
        어떤 분야에서 일하고 싶으신가요?
      </h1>
      <section className="flex flex-wrap gap-[6px]">
        {category1Constants.map((category1) => {
          return (
            <button
              onClick={() => handleCategoryClick(category1.enum)}
              key={category1.kor}
              className={`${signUpData?.jobGroups === category1.enum ? 'bg-purple-400 text-white' : 'hover:bg-ui-transparent-light border border-neutral-400 hover:border-purple-300'} desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-sm-medium flex h-[36px] cursor-pointer items-center justify-center rounded-[6px] px-[12px] py-[10px] text-white`}
            >
              {category1.kor}
            </button>
          )
        })}
      </section>
      <section className="flex flex-wrap gap-[6px]">
        {category2Constants.map((category2) => {
          return (
            <button
              onClick={() => handleCategoryClick(category2.enum)}
              key={category2.kor}
              className={`${signUpData?.jobGroups === category2.enum ? 'bg-purple-400 text-white' : 'hover:bg-ui-transparent-light border border-neutral-400 hover:border-purple-300'} caption-sm-medium flex h-[36px] cursor-pointer items-center justify-center rounded-[6px] px-[12px] py-[10px] text-white`}
            >
              {category2.kor}
            </button>
          )
        })}
      </section>
      <section className="flex flex-wrap gap-[6px]">
        {category3Constants.map((category3) => {
          return (
            <button
              onClick={() => handleCategoryClick(category3.enum)}
              key={category3.kor}
              className={`${signUpData?.jobGroups === category3.enum ? 'bg-purple-400 text-white' : 'hover:bg-ui-transparent-light border border-neutral-400 hover:border-purple-300'} caption-sm-medium flex h-[36px] cursor-pointer items-center justify-center rounded-[6px] px-[12px] py-[10px] text-white`}
            >
              {category3.kor}
            </button>
          )
        })}
      </section>

      <section className="flex flex-wrap gap-[6px]">
        {category4Constants.map((category4) => {
          return (
            <button
              onClick={() => handleCategoryClick(category4.enum)}
              key={category4.kor}
              className={`${signUpData?.jobGroups === category4.enum ? 'bg-purple-400 text-white' : 'hover:bg-ui-transparent-light border border-neutral-400 hover:border-purple-300'} caption-sm-medium flex h-[36px] cursor-pointer items-center justify-center rounded-[6px] px-[12px] py-[10px] text-white`}
            >
              {category4.kor}
            </button>
          )
        })}
      </section>
    </main>
  )
}
