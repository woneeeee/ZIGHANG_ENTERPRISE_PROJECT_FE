import { type ProfileCardItem } from '../../constants/ProfileCard'

type CardProps = {
  item: ProfileCardItem
}

const Card = ({ item }: CardProps) => {
  const CharacterIcon = item.icon

  return (
    <div className="bg-profile-card h-[498px] w-[298px] rounded-[14px] text-center">
      <div className="h-[256px] w-[298px] object-cover">
        <CharacterIcon className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-[20px] px-[16px] pb-[22px]">
        <div className="flex flex-col gap-[7px] px-[42px]">
          <span className="heading-lg-semibold text-white">{item.title}</span>
          <span className="body-md-semibold text-neutral-400">{item.subtitle}</span>
        </div>
        <div className="body-sm-regular w-[266px] gap-[10px] rounded-[10px] bg-[#6374B8]/20 px-[32px] py-[10px] text-neutral-100">
          {item.description}
        </div>
      </div>
    </div>
  )
}

export default Card
