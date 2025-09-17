import type { Dispatch, ReactNode, SetStateAction } from 'react'

interface CardProps {
  children: ReactNode
  step: number
  setStep: Dispatch<SetStateAction<number>>
}
export default function Card({ children, step, setStep }: CardProps) {
  const renderImageUrl = (step: number) => {
    switch (step) {
      case 1:
        return '/onboarding/company-size.png'
      case 2:
        return '/onboarding/partner-style.png'
      case 3:
        return '/onboarding/avoid-situation.png'
      case 4:
        return '/onboarding/motivation.png'
      case 5:
        return '/onboarding/after-work-choice.png'
      default:
        return '/onboarding/reward-choice.png'
    }
  }

  return (
    <div className="desktop:w-[1085px] laptop:w-[1085px] desktop:flex desktop:gap-x-[90px] desktop:items-center desktop:justify-center laptop:flex laptop:gap-x-[90px] laptop:items-center laptop:justify-center">
      <div className="hidden desktop:block laptop:block h-[474px] w-[492px]">
        <img
          alt="일러스트"
          className={'desktop:rounded-[30px] laptop:rounded-[30px] rounded-[16px] object-cover'}
          src={renderImageUrl(step)}
        />
      </div>
      <div

        className="tablet:w-[503px] desktop:px-[50px] laptop:px-[50px] desktop:py-[40px] laptop:py-[40px] tablet:py-[29px] tablet:px-[51px] desktop:gap-x-[90px] laptop:gap-x-[90px] flex w-[286px] items-center justify-center rounded-[30px] border bg-[#C8C2E512] border-[#78709E] px-[29px] py-[15px] ">
        <div className="tablet:w-[401px] laptop:w-[401px] desktop:w-[401px] w-[230px]">
          <ProcessBar step={step} />
          {children}
          <BottomButton step={step} setStep={setStep} />
        </div>
      </div>
    </div>
  )
}

function ProcessBar({ step }: { step: number }) {
  return (
    <div className="relative flex w-full flex-col gap-y-[10px]">
      <div className="h-[6px] rounded-full bg-purple-50"></div>
      <div
        className="absolute top-0 z-10 h-[6px] rounded-full bg-purple-400"
        style={{ width: `${(step / 6) * 100}%` }}
      />
      <div className="flex w-full justify-end">
        <p className="desktop:body-xl-medium laptop:body-xl-medium tablet:body-xl-medium caption-sm-medium text-white">{step}/6</p>
      </div>
    </div>
  )
}

function BottomButton({
  step,
  setStep,
}: {
  step: number
  setStep: Dispatch<SetStateAction<number>>
}) {
  return (
    <div className="flex w-full justify-start">
      {step !== 1 ? (
        <button
          onClick={() => {
            setStep(step - 1)
          }}
          className="body-sm-medium rounded-[6px] bg-neutral-600 p-3 text-white"
        >
          이전으로
        </button>
      ) : (
        <div className="desktop:h-[44px] laptop:h-[44px] tablet:h-[44px] h-[30px]" />
      )}
    </div>
  )
}
