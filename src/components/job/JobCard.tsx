import { BookmarkIcon, BusIcon } from '@/assets/svgComponents'
import type { JobPostingType } from '@/types/job.ts'

interface JobCardProps {
  hasTag?: boolean
  hasViewCount?: boolean
  job: JobPostingType;
}
export default function JobCard({ hasTag = true, hasViewCount = false, job }: JobCardProps) {
  return (
    <div className="tablet:rounded-[26px] laptop:rounded-[26px] desktop:rounded-[26px] flex w-full rounded-[10px] shadow-[0_0_12.733px_0_rgba(0,0,0,0.08)]">
      <section className="tablet:gap-x-[24px] desktop:gap-x-[24px] laptop:gap-x-[24px] desktop:py-[16px] desktop:px-6 laptop:py-[16px] laptop:px-6 tablet:py-[16px] tablet:px-6 tablet:rounded-l-[26px] laptop:rounded-l-[26px] desktop:rounded-l-[26px] flex w-full items-center gap-x-[10px] rounded-l-[10px] border-y border-l border-neutral-200 bg-white py-[14px] pl-[10px]">
        <div className="tablet:h-[80px] tablet:w-[80px] h-[40px] w-[40px] rounded-[12px] border border-neutral-300" />
        <div className="tablet:gap-y-2 laptop:gap-y-2 desktop:gap-y-2 desktop:w-[60%] laptop:w-[50%] flex flex-col gap-y-[6px]">
          <section className="tablet:gap-x-2 laptop:gap-x-2 desktop:gap-x-2 flex gap-x-1">
            <p className="tablet:body-lg-semibold laptop:body-lg-semibold desktop:body-lg-semibold caption-xs-medium text-neutral-500">
              {job.companyName}
            </p>
            {hasTag ? (
              <>
                <div className="flex w-fit items-center gap-x-1 rounded-[2px] bg-[#F0F5FF] px-[2px]">
                  <BusIcon width={14} height={14} />
                  <p className="caption-xs-semibold tablet:caption-sm-medium laptop:caption-sm-medium desktop:caption-sm-medium text-[#0057FF]">
                    {job.commuteMinutes}
                  </p>
                </div>
                <div className="caption-xs-semibold tablet:caption-sm-medium laptop:caption-sm-medium desktop:caption-sm-medium flex w-fit items-center justify-center rounded-[2px] bg-[#FFF2DA] px-[2px] text-[#D17700]">
                  {job.welfare}
                </div>
              </>
            ) : null}
          </section>
          <p className="caption-md-semibold tablet:heading-sm-bold laptop:heading-sm-bold desktop:heading-sm-bold line-clamp-2">
            {job.jobPostingTitle}
          </p>
          <div className="flex items-center">
            <p className="caption-xs-medium tablet:body-lg-semibold laptop:body-lg-semibold desktop:body-lg-semibold truncate text-neutral-500">
              {job.workExperience} · {job.recruitmentType} · {job.education}{' '}
            </p>
            {hasViewCount ? (
              <>
                <span>
                  <div
                    data-orientation="vertical"
                    role="none"
                    className="bg-line mx-[6px] h-2 w-[1px] shrink-0 text-neutral-200"
                  />
                </span>
                <span>
                  <div className="mx-0 flex gap-0 text-[15px] text-[#71717A] md:mx-2">
                    <img
                      alt="인기 게시물"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      className="pd:h-6 pd:w-6 h-3.5 w-3.5"
                      src="https://zighang.com/icon/fire-red.svg"
                    />
                    <div className="mx-[1px] flex items-center text-[11px] text-[#FF5757] md:mx-[4px] md:text-[16px]">
                      32054
                    </div>
                  </div>
                </span>
              </>
            ) : null}
          </div>
        </div>
      </section>
      <section className="tablet:rounded-r-[26px] laptop:rounded-r-[26px] desktop:rounded-r-[26px] rounded-r-[10px] border border-neutral-200">
        <div className="desktop:h-[80px] desktop:w-[84px] laptop:h-[80px] laptop:w-[84px] tablet:h-[80px] tablet:w-[84px] flex h-[50px] w-[41px] items-center justify-center border-b border-neutral-200">
          <BookmarkIcon
            width={14}
            height={14}
            className="tablet:hidden laptop:hidden desktop:hidden block"
          />
          <BookmarkIcon
            width={24}
            height={24}
            className="tablet:block laptop:block desktop:block hidden"
          />
        </div>
        <div className="desktop:h-[80px] desktop:w-[84px] laptop:h-[80px] laptop:w-[84px] tablet:h-[80px] tablet:w-[84px] caption-sm-medium tablet:body-2xl-semibold laptop:body-2xl-semibold desktop:body-2xl-semibold flex h-[50px] w-[41px] items-center justify-center border-neutral-300">
          {job.recruitmentType}
        </div>
      </section>
    </div>
  )
}
