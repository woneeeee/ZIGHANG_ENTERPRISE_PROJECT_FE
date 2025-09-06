import type { RecommendJobItem } from '@/constants/RecommendJob'
import { useMediaQuery } from '@/hooks/useMediaQuery'

type Props = { item: RecommendJobItem }

const RecommendJobBox = ({ item }: Props) => {
  const { icon: Icon, logo: Logo, enterprise, description } = item
  const isTablet = useMediaQuery('(min-width: 766px)')

  return (
    <article className="tablet:h-[307px] tablet:w-[260px] tablet:rounded-[16px] tablet:p-[0px] tablet:gap-[0px] relative h-[84px] w-[258px] overflow-hidden rounded-[8px] bg-white p-[12px]">
      <div className="tablet:flex relative hidden h-[185px] w-full">
        <Icon
          className="tablet:h-full tablet:w-full absolute inset-0 h-[55px] w-[55px]"
          preserveAspectRatio="xMidYMid slice"
        />
        <div className="pointer-events-none absolute inset-x-0 top-[89px] bottom-0 bg-gradient-to-b from-white/0 to-white" />
      </div>
      <div className="tablet:flex-col tablet:h-[116px] tablet:w-[203px] tablet:top-[171px] tablet:left-[20px] tablet:absolute flex h-full w-full flex-row gap-[7px]">
        <div className="tablet:h-[41px] tablet:w-[82px] tablet:bg-transparent tablet:border-0 tablet:p-[0px] tablet:items-start tablet:justify-start flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-[5px] border border-neutral-200 bg-white px-[6px] py-[21px]">
          {isTablet ? (
            <Logo className="h-full w-full" preserveAspectRatio="xMinYMid meet" />
          ) : (
            <Logo className="h-full w-full" preserveAspectRatio="xMinYMid slice" />
          )}
        </div>
        <div className="flex flex-col justify-center gap-[4px]">
          <span className="caption-sm-medium tablet:caption-md-medium text-neutral-600">
            {enterprise}
          </span>
          <span className="tablet:body-lg-semibold body-sm-medium text-black">{description} </span>
        </div>
      </div>
    </article>
  )
}

export default RecommendJobBox
