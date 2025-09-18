import { BookmarkIcon, BusIcon } from '@/assets/svgComponents'
import type { JobPostingType } from '@/types/job.ts'
import { changeEducationEnumToKor, changeRecruitmentTypeEnumToKor } from '@/utils/sign-up.ts'

interface JobCardProps {
  hasTag?: boolean
  hasViewCount?: boolean
  job: JobPostingType
  viewCount?: number
}
export default function JobCard({ hasTag = true, hasViewCount = false, job, viewCount }: JobCardProps) {
  /**
   * 분(minute)을 "X시간 Y분" 형식으로 변환하는 함수
   * @param minutes - 변환할 분 수
   * @returns "X시간 Y분" 형식의 문자열
   */
  function convertMinutesToHoursAndMinutes(minutes: number | undefined): string {
    if (minutes == undefined) {
      throw new Error('minutes이 undefined입니다.')
    }

    if (minutes < 0) {
      throw new Error('분은 음수일 수 없습니다.')
    }

    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60

    if (hours === 0) {
      return `${remainingMinutes}분`
    }

    if (remainingMinutes === 0) {
      return `${hours}시간`
    }

    return `${hours}시간 ${remainingMinutes}분`
  }

  return (
    <div className="tablet:rounded-[26px] laptop:rounded-[26px] desktop:rounded-[26px] flex w-full rounded-[10px] shadow-[0_0_12.733px_0_rgba(0,0,0,0.08)]">
      <section className="desktop:h-[160px] laptop:h-[160px] tablet:h-[160px] tablet:gap-x-[24px] desktop:gap-x-[24px] laptop:gap-x-[24px] desktop:py-[16px] desktop:px-6 laptop:py-[16px] laptop:px-6 tablet:py-[16px] tablet:px-6 tablet:rounded-l-[26px] laptop:rounded-l-[26px] desktop:rounded-l-[26px] flex h-[104px] w-full items-center gap-x-[10px] rounded-l-[10px] border-y border-l border-neutral-200 bg-white py-[14px] pl-[10px]">
        <div className="tablet:h-[80px] tablet:w-[80px] laptop:w-[70px] laptop:h-[70px] caption-md-medium tablet:min-w-[80px] laptop:min-w-[70px] desktop:min-w-[80px] tablet:min-h-[80px] laptop:min-h-[70px] desktop:min-h-[80px] desktop:px-3 laptop:px-3 tablet:px-3 flex h-[55px] min-h-[55px] w-[55px] min-w-[55px] items-center justify-center truncate rounded-[12px] bg-purple-400 px-2 text-white">
          <div className="truncate">{job.companyName}</div>
        </div>
        <div className="tablet:gap-y-2 laptop:gap-y-2 desktop:gap-y-2 desktop:w-[60%] laptop:w-[80%] tablet:w-[80%] flex flex-col gap-y-[6px]">
          <section className="tablet:gap-x-2 laptop:gap-x-2 desktop:gap-x-2 flex gap-x-1">
            <div
              className={`${job.companyName.length > 4 ? 'laptop:w-[70px] tablet:w-fit w-[40px]' : 'w-fit'} tablet:body-lg-semibold laptop:body-lg-semibold desktop:body-lg-semibold caption-xs-medium truncate text-neutral-500`}
            >
              {job.companyName}
            </div>
            {hasTag ? (
              <>
                <div className="desktop:p-1 laptop:p-1 tablet:p-1 flex h-fit w-fit items-center gap-x-1 rounded-[2px] bg-[#F0F5FF] px-[2px]">
                  <BusIcon width={14} height={14} />
                  <p
                    className={`${convertMinutesToHoursAndMinutes(job.commuteMinutes).length >= 6 ? 'desktop:w-[50px] laptop:w-[50px] tablet:w-fit w-[30px] truncate' : ''} caption-xs-semibold tablet:body-caption-sm-medium laptop:body-caption-sm-medium desktop:body-caption-sm-medium text-[#0057FF]`}
                  >
                    {convertMinutesToHoursAndMinutes(job.commuteMinutes)}
                  </p>
                </div>
                <div
                  className={`${job.welfare.length >= 7 ? 'desktop:w-[50px] laptop:w-[50px] tablet:w-fit w-[40px]' : 'w-fit'} caption-xs-semibold tablet:body-caption-sm-medium laptop:body-caption-sm-medium desktop:body-caption-sm-medium desktop:rounded-1 laptop:rounded-1 tablet:rounded-1 desktop:p-1 laptop:p-1 tablet:p-1 flex h-fit items-center justify-center rounded-[2px] bg-[#FFF2DA] px-[2px] text-[#D17700]`}
                >
                  <span className={`${job.welfare.length >= 7 ? 'block w-full truncate' : ''}`}>
                    {job.welfare}
                  </span>
                </div>
              </>
            ) : null}
          </section>
          <div className="body-caption-md-semibold tablet:heading-sm-bold laptop:heading-sm-bold desktop:heading-sm-bold line-clamp-2">
            {job.jobPostingTitle}
          </div>
          <div className="flex items-center">
            <div className="body-caption-xs-medium tablet:body-lg-semibold laptop:body-lg-semibold desktop:body-lg-semibold flex items-center gap-x-1 text-neutral-500">
              <span>{job.workExperience}</span>
              <span>·</span>
              <div className="desktop:max-w-[60px] laptop:max-w-[60px] flex max-w-[60px] items-center">
                {(() => {
                  const fullRecruitmentText = job.recruitmentType
                    .map((recruitment) => changeRecruitmentTypeEnumToKor(recruitment))
                    .join('/')

                  return (
                    <span
                      className={`${fullRecruitmentText.length > 3 ? 'laptop:inline-block laptop:w-full laptop:truncate desktop:inline-block desktop:w-full desktop:truncate inline-block w-full truncate' : ''}`}
                      title={fullRecruitmentText}
                    >
                      {fullRecruitmentText}
                    </span>
                  )
                })()}
              </div>
              <span>·</span>
              <span>{changeEducationEnumToKor(job.education)}</span>
            </div>
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
                  <div className="mx-0 flex items-center gap-0 text-[15px] text-[#71717A] md:mx-2">
                    <img
                      alt="조회수 아이콘"
                      loading="lazy"
                      width="0"
                      height="0"
                      decoding="async"
                      data-nimg="1"
                      className="h-[20px] w-[20px] flex-shrink-0 md:h-[20px] md:w-[20px]"
                      src="https://zighang.com/icon/visibility.svg"
                    />
                    <div className="body-caption-xs-medium tablet:body-lg-semibold laptop:body-lg-semibold desktop:body-lg-semibold mx-[1px] flex items-center text-neutral-500">
                      {viewCount}
                    </div>
                  </div>
                </span>
              </>
            ) : null}
          </div>
        </div>
      </section>

      <section className="tablet:rounded-r-[26px] laptop:rounded-r-[26px] desktop:rounded-r-[26px] flex items-center justify-center rounded-r-[10px] border-y border-r border-neutral-200">
        <div className="desktop:h-[134px] laptop:h-[134px] tablet:h-[134px] desktop:px-[30px] laptop:px-[30px] tablet:px-[30px] flex h-[88px] items-center justify-center border-l border-neutral-200 px-[15px]">
          <BookmarkIcon
            width={20}
            height={20}
            className="tablet:hidden laptop:hidden desktop:hidden block"
          />
          <BookmarkIcon
            width={30}
            height={30}
            className="tablet:block laptop:block desktop:block hidden"
          />
        </div>
      </section>
    </div>
  )
}
