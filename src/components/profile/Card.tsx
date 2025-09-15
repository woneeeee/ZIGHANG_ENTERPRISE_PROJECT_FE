import { deleteReOnboarding } from '@/apis/deleteMypageTest'
import { type ProfileCardItem } from '@/constants/ProfileCard'
import { useNavigate } from 'react-router-dom'

type CardProps = {
  item: ProfileCardItem
}

const Card = ({ item }: CardProps) => {
  const CharacterIcon = item.icon
  const nav = useNavigate()

  const handleDelete = async () => {
    try {
      await deleteReOnboarding()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="bg-profile-card tablet:w-[298px] tablet:h-[530px] tablet:rounded-[14px] h-[400px] w-[224px] rounded-[10px] text-center shadow-[0_0_20px_0_rgba(0,0,0,0.12)]">
      <div className="tablet:w-[298px] tablet:h-[274px] h-[200px] w-[224px] object-cover">
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
      <div className="tablet:h-[54px] tablet:py-[17px] tablet:px-[36px] tablet:gap-[30px] tablet:rounded-[14px] tablet:rounded-t-none flex h-[41px] items-center justify-center gap-[18px] rounded-[10px] rounded-t-none bg-white py-[12px]">
        <p
          className="caption-sm-medium tablet:body-sm-medium cursor-pointer whitespace-nowrap text-purple-500"
          onClick={() => {
            nav('/onboarding/result')
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
}

export default Card
