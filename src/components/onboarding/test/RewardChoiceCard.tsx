import type { Dispatch, SetStateAction } from 'react'
import Card from '@/components/onboarding/test/Card.tsx'
import { useOnboardingTestStore } from '@/stores/onboardingTestStore.ts'

interface RewardChoiceCardProps {
  step: number
  setStep: Dispatch<SetStateAction<number>>
}
export default function RewardChoiceCard ({step, setStep}: RewardChoiceCardProps) {
  const contentList: { kor: string; enum: string }[] = [
    { kor: '광속 귀환권', enum: '출퇴근' },
    { kor: '지구 전통 요리 풀코스', enum: '식대' },
    { kor: '우주 아카데미 명예 졸업장', enum: '커리어성장' },
    { kor: '행성 간 크루즈 휴가권', enum: '휴가' },
  ]

  const setState = useOnboardingTestStore((state) => state.setState)
  const onboardingTestData = useOnboardingTestStore((state) => state.onboardingTestData)

  return (
    <Card step={step} setStep={setStep}>
      <div className="mt-[17px] flex flex-col items-center justify-center">
        {/* 그래픽 */}
        <div className="laptop:hidden desktop:hidden tablet:w-[400px] tablet:h-[385px] relative h-[192px] w-[200px]">
          <img
            alt="일러스트"
            className={'rounded-[16px] object-cover'}
            src={'/onboarding/reward-choice.png'}
          />
        </div>
        <h1
          className="desktop:mt-[46px] laptop:mt-[46px] body-sm-semibold tablet:heading-md-semibold laptop:heading-md-semibold desktop:heading-md-semibold mt-[21px] text-center text-white">
          Q. 모든 임무를 완수한 당신!
          <br className="tablet:hidden laptop:hidden desktop:hidden" />
          돌아가기 전 받고 싶은 특별 보상은?
        </h1>
        <div className="desktop:mt-[46px] desktop:mb-[30px] laptop:mt-[46px] laptop:mb-[30px] tablet:my-[38px] desktop:gap-y-6 laptop:gap-y-6 tablet:gap-y-6 my-[14px] flex w-full flex-col gap-y-3">
          {contentList.map((content) => {
            return (
              <button
                onClick={() => {
                  setState({
                    ...onboardingTestData,
                    onboardingTestData: { ...onboardingTestData, q6: content.enum },
                  })
                  setStep(6)
                }}
                key={content.enum}
                className="bg-[#EEF0F9] hover:bg-purple-200 transition laptop:body-2xl-medium desktop:body-2xl-medium tablet:body-2xl-medium caption-md-medium desktop:h-[60px] laptop:h-[60px] tablet:h-[60px] desktop:px-[30px] desktop:py-[16px] laptop:px-[30px] laptop:py-[16px] tablet:px-[30px] tablet:py-[16px] flex h-[36px] w-full items-center rounded-[5px] px-[16px] py-[10px]"
              >
                {content.kor}
              </button>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
