import { levelOfEducationConstants } from '@/constants/SignUp.ts'
import { useSignUpStore } from '@/store/signupStore.ts'

export default function Education() {
  const setState = useSignUpStore((state) => state.setState)

  const handleEducationClick = (education) => {
    // 1. 상태 저장

    // 2. Category 섹션으로 부드러운 스크롤
    const categorySection = document.getElementById('category-section')
    if (categorySection) {
      categorySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <main className="flex flex-col pt-[84px] px-4 gap-y-4 tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] min-h-screen">
      <h1 className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold">최종학력이 어떻게 되시나요?</h1>
      <section className="gap-[6px] flex flex-wrap">
        {levelOfEducationConstants.map((education) => {
          return (
            <button onClick={() => handleEducationClick(education)} key={education.kor} className={`flex items-center justify-center h-[36px] py-[10px] px-[12px] caption-sm-medium rounded-[6px] border border-neutral-400 hover:border-purple-300 hover:bg-purple-50 cursor-pointer`}>
              {education.kor}
            </button>
          )
        })}
      </section>
    </main>
  )
}
