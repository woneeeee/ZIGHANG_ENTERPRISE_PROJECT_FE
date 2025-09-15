import { BookmarkIcon, BusIcon } from '@/assets/svgComponents'

interface JobCardProps {
  hasTag: boolean
}
export default function JobCard({ hasTag = true }: JobCardProps) {
  return (
    <div className="flex w-full shadow-[0_0_12.733px_0_rgba(0,0,0,0.08)]">
      <section className="tablet:gap-x-[24px] desktop:gap-x-[24px] laptop:gap-x-[24px] desktop:py-[16px] desktop:px-6 laptop:py-[16px] laptop:px-6 tablet:py-[16px] tablet:px-6 flex items-center gap-x-[10px] rounded-l-[10px] border-y border-l border-neutral-200 bg-white py-[14px] pl-[10px]">
        <div className="tablet:h-[80px] tablet:w-[80px] h-[40px] w-[40px] rounded-[12px] border border-neutral-300" />
        <div className="flex w-[60%] flex-col gap-y-[6px]">
          <section className="flex gap-x-1">
            <p className="tablet:body-lg-semibold caption-sm-medium text-neutral-500">바카티오</p>
            {hasTag ? (
              <>
                <div className="flex w-fit items-center gap-x-1 rounded-[2px] bg-[#F0F5FF] px-[2px]">
                  <BusIcon width={14} height={14} />
                  <p className="caption-2xs-semibold text-[#0057FF]">1시간</p>
                </div>
                <div className="caption-2xs-semibold w-fit rounded-[2px] bg-[#FFF2DA] px-[2px] text-[#D17700]">
                  식대지원
                </div>
              </>
            ) : null}
          </section>
          <p className="caption-md-semibold">AI 기반 버티컬 서비스_데이터 프로덕트 서비스 개발</p>
          <p className="caption-xs-medium text-neutral-500">5~10년차 · 정규직 · 학력 무관 </p>
        </div>
      </section>
      <section className="rounded-r-[10px] border border-neutral-200">
        <div className="desktop:h-[80px] desktop:w-[84px] laptop:h-[80px] laptop:w-[84px] tablet:h-[80px] tablet:w-[84px] flex h-[50px] w-[41px] items-center justify-center border-b border-neutral-200">
          <BookmarkIcon width={14} height={14} />
        </div>
        <div className="desktop:h-[80px] desktop:w-[84px] laptop:h-[80px] laptop:w-[84px] tablet:h-[80px] tablet:w-[84px] caption-sm-medium flex h-[50px] w-[41px] items-center justify-center border-neutral-300">
          상시
        </div>
      </section>
    </div>
  )
}
