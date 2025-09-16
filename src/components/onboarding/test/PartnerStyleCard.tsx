import type { Dispatch, SetStateAction } from 'react'
import Card from '@/components/onboarding/test/Card.tsx'
import { useOnboardingTestStore } from '@/stores/onboardingTestStore.ts'
import type { CompanyEnumType } from '@/types/signup.ts'

interface PartnerStyleCardProps {
  step: number
  setStep: Dispatch<SetStateAction<number>>
}
export default function PartnerStyleCard({ step, setStep }: PartnerStyleCardProps) {
  const contentList: { kor: string; enum: CompanyEnumType }[] = [
    { kor: '열정적으로 밤낮없이 일하는 크루', enum: 'STARTUP' },
    { kor: '규율과 절차를 꼼꼼히 지키는 크루', enum: 'MAJOR' },
    { kor: '자유롭고 캐주얼하게 일하는 크루', enum: 'FOREIGN' },
    { kor: '안정적으로 꾸준히 나아가는 크루', enum: 'MID_SIZE' },
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
            src={'/onboarding/partner-style.png'}
          />
        </div>
        <h1 className="desktop:mt-[46px] laptop:mt-[46px] body-sm-semibold tablet:heading-md-semibold laptop:heading-md-semibold desktop:heading-md-semibold mt-[21px] text-center text-white">
          Q. 함께 우주를 탐험할 동료들의{' '}
          <br className="tablet:hidden laptop:hidden desktop:hidden" />
          분위기를 고른다면?
        </h1>
        <div className="desktop:mt-[46px] desktop:mb-[30px] laptop:mt-[46px] laptop:mb-[30px] tablet:my-[38px] desktop:gap-y-6 laptop:gap-y-6 tablet:gap-y-6 my-[14px] flex w-full flex-col gap-y-3">
          {contentList.map((content) => {
            return (
              <button
                onClick={() => {
                  setState({
                    ...onboardingTestData,
                    onboardingTestData: { ...onboardingTestData, q2: content.enum },
                  })
                  setStep(3)
                }}
                key={content.enum}
                className="laptop:body-2xl-medium desktop:body-2xl-medium tablet:body-2xl-medium caption-md-medium desktop:h-[60px] laptop:h-[60px] tablet:h-[60px] desktop:px-[30px] desktop:py-[16px] laptop:px-[30px] laptop:py-[16px] tablet:px-[30px] tablet:py-[16px] flex h-[36px] w-full items-center rounded-[5px] bg-[#EEF0F9] px-[16px] py-[10px] transition hover:bg-purple-200"
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
