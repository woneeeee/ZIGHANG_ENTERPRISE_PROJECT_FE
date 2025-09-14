import { commutingTimeConstants } from '@/constants/SignUp.ts'

export default function CommutingTime() {
  const handleCommutingTimeClick = (commutingTime) => {
    // 1. 상태 저장

    // 2. Category 섹션으로 부드러운 스크롤
    const categorySection = document.getElementById('address-section')
    if (categorySection) {
      categorySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  return (
    <main
      id="commuting-time-section"
      className="tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] flex min-h-screen flex-col gap-y-4 px-4 pt-[84px]"
    >
      <h1 className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold">
        출퇴근 시간은 어느정도가 괜찮으신가요?
      </h1>
      <section className="flex flex-wrap gap-[6px]">
        {commutingTimeConstants.map((commutingTime) => {
          return (
            <button
              onClick={() => handleCommutingTimeClick(commutingTime)}
              key={commutingTime.kor}
              className={`caption-sm-medium flex h-[36px] cursor-pointer items-center justify-center rounded-[6px] border border-neutral-400 px-[12px] py-[10px] hover:border-purple-300 hover:bg-purple-50`}
            >
              {commutingTime.kor}
            </button>
          )
        })}
      </section>
    </main>
  )
}
