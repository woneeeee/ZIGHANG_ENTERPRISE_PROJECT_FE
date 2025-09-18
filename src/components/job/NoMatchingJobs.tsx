import { CheckIcon, MatchingJobsIcon } from '@/assets/svgComponents'
import { useState } from 'react'

type NoMatchingJobsProps = {
  isResult?: boolean
}

export function NoMatchingJobs({ isResult = false }: NoMatchingJobsProps) {
  const [isClicked, setIsClicked] = useState<boolean | undefined>(undefined)
  const neutral600 = isResult ? 'text-white' : 'text-neutral-600'
  const neutral700 = isResult ? 'text-white' : 'text-neutral-700'
  const purple600 = isResult ? 'text-purple-400' : 'text-purple-600'

  return (
    <div className="desktop:gap-y-[24px] laptop:gap-y-[24px] tablet:gap-y-[24px] flex flex-col gap-y-[10px]">
      <div className="desktop:gap-y-[20px] laptop:gap-y-[20px] tablet:gap-y-[20px] flex flex-col items-center gap-y-[10px]">
        <MatchingJobsIcon width={204} height={156} />
        <section className="desktop:gap-y-1 laptop:gap-y-1 tablet:gap-y-1 flex flex-col items-center gap-y-[2px]">
          <div
            className={`desktop:body-lg-bold laptop:body-lg-bold tablet:body-lg-bold body-md-bold ${purple600}`}
          >
            맞춤 공고가 아직 없어요
          </div>
          <p
            className={`desktop:body-xl-medium laptop:body-xl-medium tablet:body-xl-medium body-caption-xs-medium ${neutral600}`}
          >
            당신에게 맞는 공고가 도착하면 메일로 알려드릴게요
          </p>
        </section>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p
          className={`desktop:body-xl-semibold laptop:body-xl-semibold tablet:body-xl-semibold body-caption-xs-semibold ${neutral700}`}
        >
          메일 수신에 동의하시겠어요?
        </p>
        <section className="flex gap-x-[21px]">
          <div className="flex items-center gap-x-1">
            <p
              className={`desktop:body-xl-medium tablet:body-xl-medium laptop:body-xl-medium body-caption-xs-medium ${neutral600}`}
            >
              네
            </p>
            {isClicked ? (
              <button
                onClick={() => setIsClicked(true)}
                className="desktop:h-[16px] laptop:h-[16px] tablet:h-[16px] laptop:w-[16px] tablet:w-[16px] desktop:w-[16px] desktop:rounded-[4px] laptop:rounded-[4px] tablet:rounded-[4px] flex h-[9px] w-[9px] items-center justify-center rounded-[2px] bg-purple-500"
              >
                <CheckIcon
                  width={16}
                  height={16}
                  className="desktop:block laptop:block tablet:block hidden"
                />
                <CheckIcon
                  width={5}
                  height={5}
                  className="desktop:hidden laptop:hidden tablet:hidden block"
                />
              </button>
            ) : (
              <button
                onClick={() => setIsClicked(true)}
                className="desktop:h-[16px] laptop:h-[16px] tablet:h-[16px] laptop:w-[16px] tablet:w-[16px] desktop:w-[16px] desktop:rounded-[4px] laptop:rounded-[4px] tablet:rounded-[4px] flex h-[9px] w-[9px] items-center justify-center rounded-[2px] border border-neutral-400"
              />
            )}
          </div>
          <div className="flex items-center gap-x-1">
            {/* 여기도 white로 전환 */}
            <p
              className={`desktop:body-xl-medium tablet:body-xl-medium laptop:body-xl-medium body-caption-xs-medium ${neutral600}`}
            >
              아니오
            </p>
            {!isClicked ? (
              <button
                onClick={() => setIsClicked(true)}
                className="desktop:h-[16px] laptop:h-[16px] tablet:h-[16px] laptop:w-[16px] tablet:w-[16px] desktop:w-[16px] desktop:rounded-[4px] laptop:rounded-[4px] tablet:rounded-[4px] flex h-[9px] w-[9px] items-center justify-center rounded-[2px] bg-purple-500"
              >
                <CheckIcon
                  width={16}
                  height={16}
                  className="desktop:block laptop:block tablet:block hidden"
                />
                <CheckIcon
                  width={5}
                  height={5}
                  className="desktop:hidden laptop:hidden tablet:hidden block"
                />
              </button>
            ) : (
              <button
                onClick={() => setIsClicked(false)}
                className="desktop:h-[16px] laptop:h-[16px] tablet:h-[16px] laptop:w-[16px] tablet:w-[16px] desktop:w-[16px] desktop:rounded-[4px] laptop:rounded-[4px] tablet:rounded-[4px] flex h-[9px] w-[9px] items-center justify-center rounded-[2px] border border-neutral-400"
              />
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
