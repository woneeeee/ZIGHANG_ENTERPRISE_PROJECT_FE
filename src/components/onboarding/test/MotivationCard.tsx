import type { Dispatch, SetStateAction } from 'react'
import Card from '@/components/onboarding/test/Card.tsx'

interface MotivationCardProps {
  step: number
  setStep: Dispatch<SetStateAction<number>>
}
export default function MotivationCard ({step, setStep}: MotivationCardProps) {
  const contentList = ['무한 리필 우주식 자동 배달', '최신 우주 과학 강의 패스', '초광속 지구 셔틀권', '즉시 발동 휴식 모드']
  return (
    <Card step={step} setStep={setStep}>
      <div className="mt-[17px] flex flex-col items-center justify-center">
        {/* 그래픽 */}
        <div className="laptop:hidden desktop:hidden tablet:w-[400px] tablet:h-[385px] relative h-[192px] w-[200px]">
          <img
            alt="일러스트"
            className={'rounded-[16px] object-cover'}
            src={'/onboarding/motivation.png'}
          />
        </div>
        <h1
          className="desktop:mt-[46px] laptop:mt-[46px] body-sm-semibold tablet:heading-md-semibold laptop:heading-md-semibold desktop:heading-md-semibold mt-[21px] text-center text-white">
          Q. 끝없는 임무 속, {' '}
          <br className="tablet:hidden laptop:hidden desktop:hidden" />
          당신을 지탱하는 원동력은?
        </h1>
        <div className="desktop:mt-[46px] desktop:mb-[30px] laptop:mt-[46px] laptop:mb-[30px] tablet:my-[38px] desktop:gap-y-6 laptop:gap-y-6 tablet:gap-y-6 my-[14px] flex w-full flex-col gap-y-3">
          {contentList.map((content) => {
            return (
              <button
                onClick={() => {
                  setStep(5)
                }}
                key={content}
                className="bg-[#EEF0F9] hover:bg-purple-200 transition laptop:body-2xl-medium desktop:body-2xl-medium tablet:body-2xl-medium caption-md-medium desktop:h-[60px] laptop:h-[60px] tablet:h-[60px] desktop:px-[30px] desktop:py-[16px] laptop:px-[30px] laptop:py-[16px] tablet:px-[30px] tablet:py-[16px] flex h-[36px] w-full items-center rounded-[5px] px-[16px] py-[10px]"
              >
                {content}
              </button>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
