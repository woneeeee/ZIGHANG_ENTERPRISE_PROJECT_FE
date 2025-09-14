import { commuteConstants } from '@/constants/SignUp.ts'

export default function Commute() {

  const handleCommuteClick = (commute) => {
    // 1. 상태 저장

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
      className="flex flex-col pt-[84px] px-4 gap-y-4 tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] min-h-screen">
      <h1
        className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold">
        주로 어떤 방법으로 출퇴근하시나요?</h1>
      <section className="gap-[6px] flex flex-wrap">
        {commuteConstants.map((commute) => {
          return (
            <button
              onClick={() => handleCommuteClick(commute)}
              key={commute.kor}
                    className={`flex items-center justify-center h-[36px] py-[10px] px-[12px] caption-sm-medium rounded-[6px] border border-neutral-400 hover:border-purple-300 hover:bg-purple-50 cursor-pointer`}>
              {commute.kor}
            </button>
          )
        })}
      </section>
    </main>
  )
}
