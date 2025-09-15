import type { Dispatch, ReactNode, SetStateAction } from 'react'

interface CardProps {
  children: ReactNode
  step: number
  setStep: Dispatch<SetStateAction<number>>
}
export default function Card({ children, step, setStep }: CardProps) {
  return (
    <div className="desktop:w-[634px] laptop:w-[634px] tablet:w-[503px] w-[286px] flex flex-col items-center justify-center rounded-[30px] border border-[#78709E] desktop:px-[50px] laptop:px-[50px] desktop:py-[40px] laptop:py-[40px] tablet:py-[29px] tablet:px-[51px] py-[15px] px-[29px]">
      <ProcessBar step={step}/>
      <div className="tablet:w-[401px] laptop:w-[401px] desktop:w-[401px] w-[230px]">
        {children}
        <BottomButton step={step} setStep={setStep} />
      </div>
    </div>
  )
}

function ProcessBar({ step }: { step: number}) {
  return (
    <div className="relative flex w-full flex-col gap-y-[10px]">
      <div className="h-[6px] rounded-full bg-purple-50"></div>
      <div
        className="absolute top-0 z-10 h-[6px] rounded-full bg-purple-300"
        style={{ width: `${(step / 6) * 100}%` }}
      />
      <div className="w-full flex justify-end">
        <p className="caption-sm-medium text-white">{step}/6</p>
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
    <div className="flex justify-start w-full">
      {step !== 1 ? (
        <button
          onClick={() => {
            setStep(step - 1)
          }}
          className="body-sm-medium rounded-[6px] bg-neutral-600 p-3 text-white"
        >
          이전으로
        </button>
      ) : <div className="desktop:h-[44px] laptop:h-[44px] h-[30px] tablet:h-[44px]" />}
    </div>
  )
}
