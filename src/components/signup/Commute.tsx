import { commuteConstants } from '@/constants/SignUp.ts'
import { useSignUpStore } from '@/store/signupStore.ts'
import type { TransportEnumType } from '@/types/signup.ts'

export default function Commute() {
  const setState = useSignUpStore((state) => state.setState)
  const signUpData = useSignUpStore((state) => state.signUpData)
  const handleCommuteClick = (commute: TransportEnumType) => {
    // 1. 상태 저장
    setState({
      ...signUpData,
      signUpData: {
        ...signUpData,
        transport: commute  // 객체가 아닌 commute 값 직접 할당
      }
    })

    // 2. Category 섹션으로 부드러운 스크롤
    const categorySection = document.getElementById('commuting-time-section')
    if (categorySection) {
      categorySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <main
      id="commute-section"
      className="flex flex-col pt-[120px] px-4 gap-y-4 tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] min-h-screen">
      <h1
        className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold">
        주로 어떤 방법으로 출퇴근하시나요?</h1>
      <section className="gap-[6px] flex flex-wrap">
        {commuteConstants.map((commute) => {
          return (
            <button
              onClick={() => handleCommuteClick(commute.enum)}
              key={commute.kor}
              className={`${signUpData?.transport === commute.enum ? 'bg-purple-500 text-white' : 'border border-neutral-400'} caption-sm-medium flex h-[36px] cursor-pointer items-center justify-center rounded-[6px] px-[12px] py-[10px] hover:border-purple-300 hover:bg-purple-50`}
            >
              {commute.kor}
            </button>
          )
        })}
      </section>
    </main>
  )
}
