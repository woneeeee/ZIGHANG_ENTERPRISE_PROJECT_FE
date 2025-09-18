import { deleteReOnboarding } from '@/apis/deleteMypageTest'
import { type ProfileCardItem } from '@/constants/ProfileCard'
import { useOnboardingTestStore, useReOnboardingTestStore } from '@/stores/onboardingTestStore'
import { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

type CardProps = {
  item: ProfileCardItem
}

const ProfileCard = forwardRef<HTMLDivElement, CardProps>(({ item }, ref) => {
  const CharacterIcon = item.icon
  const nav = useNavigate()

  const handleDelete = async () => {
    try {
      const res = await deleteReOnboarding()
      if (res.name) {
        nav('/onboarding/start')
        useOnboardingTestStore.getState().reset()
        useReOnboardingTestStore.getState().reset()
        localStorage.setItem('onboarding_done', 'true')
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div
      ref={ref}
      className="bg-profile-card tablet:rounded-[14px] flex flex-col items-center justify-center rounded-[10px] text-center shadow-[0_0_20px_0_rgba(0,0,0,0.12)]"
    >
      <div
        style={{ boxSizing: 'border-box' }}
        className="tablet:w-[298px] tablet:h-[274px] flex h-[200px] w-[224px] items-center justify-center object-cover"
      >
        <CharacterIcon className="h-full w-full" />
      </div>
      <div className="tablet:px-[16px] tablet:pb-[31px] tablet:gap-[20px] flex flex-col gap-[15px] px-[12px] pb-[23px]">
        <div className="tablet:gap-[7px] tablet:px-[42px] flex flex-col gap-[5px] px-[31px]">
          <span className="body-xl-semibold tablet:heading-lg-semibold text-white">
            {item.title}
          </span>
          <span className="caption-sm-medium tablet:body-md-semibold text-neutral-400">
            {item.subtitle}
          </span>
        </div>
        <div className="caption-sm-medium tablet:body-sm-regular tablet:w-[266px] tablet:h-[92px] tablet:px-[32px] tablet:py-[16px] tablet:gap-[10px] tablet:rounded-[10px] flex h-[72px] w-[200px] items-center justify-center gap-[10px] rounded-[7px] bg-[#6374B8]/20 px-[20px] py-[12px] text-neutral-100">
          {item.description}
        </div>
      </div>
      <div
        data-skip-export
        className="tablet:h-[55px] tablet:w-[298px] tablet:py-[17px] tablet:px-[36px] tablet:gap-[30px] tablet:rounded-[13px] tablet:rounded-t-none flex h-[40px] w-[224px] items-center justify-center gap-[18px] rounded-[9px] rounded-t-none bg-neutral-50 py-[12px]"
      >
        <p
          className="caption-sm-medium tablet:body-sm-medium cursor-pointer whitespace-nowrap text-purple-500"
          onClick={() => {
            nav('/onboarding/result', { state: { from: 'mypage' } })
          }}
        >
          결과 전체보기
        </p>
        <p className="text-neutral-300">|</p>
        <p
          className="caption-sm-medium text-netural-500 tablet:body-sm-medium cursor-pointer whitespace-nowrap"
          onClick={handleDelete}
        >
          테스트 다시 하기
        </p>
      </div>
    </div>
  )
})

export default ProfileCard
