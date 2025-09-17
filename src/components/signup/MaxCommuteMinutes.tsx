import { commutingTimeConstants } from '@/constants/SignUp.ts'
import { useSignUpStore } from '@/store/signupStore.ts'
import { useEffect } from 'react'
import { useEditMyInfoStore } from '@/stores/editMyInfoStore.ts'

export default function MaxCommuteMinutes() {
  const setMaxCommuteMinutesState = useSignUpStore((state) => state.setState)
  const signUpData = useSignUpStore((state) => state.signUpData)
  const editMyInfoData = useEditMyInfoStore((state) => state.editMyInfoData)
  const setEditMyInfoDataState = useEditMyInfoStore((state) => state.setState)

  useEffect(() => {
    if (editMyInfoData) {
      setMaxCommuteMinutesState({...signUpData, signUpData: {...signUpData, maxCommuteMinutes: editMyInfoData?.maxCommuteMinutes}})
    }
  }, [editMyInfoData])

  const handleCommutingTimeClick = (commutingTime: number) => {
    // 1. 상태 저장
    if (editMyInfoData) {
      setEditMyInfoDataState({
        ...editMyInfoData,
        editMyInfoData: {
          ...editMyInfoData, maxCommuteMinutes: editMyInfoData.maxCommuteMinutes === commutingTime ? null : commutingTime
        }
      })
    } else {
      setMaxCommuteMinutesState({
        ...signUpData,
        signUpData: {
          ...signUpData,
          maxCommuteMinutes: signUpData?.maxCommuteMinutes === commutingTime ? null : commutingTime, // 객체가 아닌 commute 값 직접 할당
        },
      })
    }


    // 2. JobGroup 섹션으로 부드러운 스크롤
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
      className="tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] flex min-h-screen flex-col gap-y-4 px-4 desktop:pt-[220px] laptop:pt-[220px] tablet:pt-[180px] pt-[150px]"
    >
      <h1 className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold">
        출퇴근 시간은 어느정도가 괜찮으신가요?
      </h1>
      <section className="flex flex-wrap gap-[6px]">
        {commutingTimeConstants.map((commutingTime) => {
          return (
            <button
              onClick={() => handleCommutingTimeClick(commutingTime.enum)}
              key={commutingTime.kor}
              className={`${editMyInfoData ? (editMyInfoData.maxCommuteMinutes === commutingTime.enum ? 'bg-purple-500 text-white' : 'border border-neutral-400 hover:border-purple-300 hover:bg-purple-50') : signUpData?.maxCommuteMinutes === commutingTime.enum ? 'bg-purple-500 text-white' : 'border border-neutral-400 hover:border-purple-300 hover:bg-purple-50'} desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-sm-medium flex h-[36px] cursor-pointer items-center justify-center rounded-[6px] px-[12px] py-[10px]`}
            >
              {commutingTime.kor}
            </button>
          )
        })}
      </section>
    </main>
  )
}
