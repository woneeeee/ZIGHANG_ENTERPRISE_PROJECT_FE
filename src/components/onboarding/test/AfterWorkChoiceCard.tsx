import type { Dispatch, SetStateAction } from 'react'
import Card from '@/components/onboarding/test/Card.tsx'

interface AfterWorkChoiceCardProps {
  step: number
  setStep: Dispatch<SetStateAction<number>>
}
export default function AfterWorkChoiceCard ({step, setStep}: AfterWorkChoiceCardProps) {
  const contentList = ['우주 최고 전문가 컨퍼런스 초청권', '은하 리조트에서 즐기는 호화 휴가', '매일 열리는 미식 뷔페', '순식간에 지구로 귀환하는 패스권']
  return (
    <Card step={step} setStep={setStep}>
      <div className="mt-[17px] flex flex-col items-center justify-center">
        {/* 그래픽 */}
        <div className="laptop:hidden desktop:hidden tablet:w-[400px] tablet:h-[385px] relative h-[192px] w-[200px]">
          <img
            alt="일러스트"
            className={'rounded-[16px] object-cover'}
            src={'/onboarding/after-work-choice.png'}
          />
        </div>
        <h1
          className="desktop:mt-[46px] laptop:mt-[46px] body-sm-semibold tablet:heading-md-semibold laptop:heading-md-semibold desktop:heading-md-semibold mt-[21px] text-center text-white">
          Q. 동료들이 가장 부러워할 특권을 {' '}
          <br className="tablet:hidden laptop:hidden desktop:hidden" />
          하나 얻을 수 있다면?
        </h1>
        <div className="desktop:mt-[46px] desktop:mb-[30px] laptop:mt-[46px] laptop:mb-[30px] tablet:my-[38px] desktop:gap-y-6 laptop:gap-y-6 tablet:gap-y-6 my-[14px] flex w-full flex-col gap-y-3">
          {contentList.map((content) => {
            return (
              <button
                onClick={() => {
                  setStep(6)
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
