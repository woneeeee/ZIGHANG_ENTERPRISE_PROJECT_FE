import { type ChangeEvent, useState } from 'react'
import { useSignUpStore } from '@/store/signupStore.ts'

export default function Experience() {
  return (
    <main
      id="experience-section"
      className="flex flex-col justify-start desktop:pt-[220px] laptop:pt-[220px] tablet:pt-[220px] pt-[150px] px-4 gap-y-4 min-h-screen">
      <h1
        className="text-white body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold">
        현재까지의 경력을 알려주세요</h1>
      <div className="flex justify-start items-start">
        <CustomRangeSlider />
      </div>

    </main>
  )
}

function CustomRangeSlider () {
  const setState = useSignUpStore((state) => state.setState)
  const signUpData = useSignUpStore((state) => state.signUpData)
  // 단일 값으로 경력을 관리 (0: 신입, 1-10: N년, 11: 10년 이상)
  // const [experience, setExperience] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // 경력 값을 텍스트로 변환하는 함수
  const getExperienceText = (value: number | undefined | null) => {
    const safeValue = value ?? 0;

    if (safeValue === 0) return "신입";
    if (safeValue >= 1 && safeValue <= 10) return `${safeValue}년`;
    if (safeValue >= 11) return "10년 이상";
    return "신입";
  };

  const progressPercentage = ((signUpData?.workExperience ?? 0) / 11) * 100;

  // thumb 위치 계산 - "10년+"의 경우 오른쪽 여백을 줄임
  const getThumbPosition = () => {
    const workExperience = signUpData?.workExperience ?? 0;

    if (workExperience >= 11) {
      return `calc(${progressPercentage}% - 10px)`;
    }
    if (workExperience === 0) {
      return `calc(${progressPercentage}% + 5px)`;
    }
    return `calc(${progressPercentage}% + ${10 - progressPercentage * 0.2}px)`;
  };


  const handleExperienceClick = (workExperience: number | undefined | null) => {
    // 1. 상태 저장 - setState 구조 수정
    setState({
      signUpData: {
        ...signUpData,
        workExperience: workExperience
      }
    })
    // 2. JobGroup 섹션으로 부드러운 스크롤
    const categorySection = document.getElementById('commute-section')
    if (categorySection) {
      categorySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // 슬라이더 드래그 시작
  const handleMouseDown = () => {
    setIsDragging(true);
  }

  // 슬라이더 드래그 끝 (마우스 놓을 때)
  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      handleExperienceClick(signUpData?.workExperience);
    }
  }

  // 슬라이더 값 변경 - setState 구조 수정
  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      signUpData: {
        ...signUpData,
        workExperience: parseInt(e.target.value)
      }
    })
  }


  return (
    <div className="w-[227px] tablet:w-[360px] desktop:w-[360px] laptop:w-[360px]">
      <div className="relative">
        <input
          type="range"
          min={0}
          max={11}
          step={1}
          value={signUpData?.workExperience ?? 0}
          onChange={handleSliderChange}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}  // 모바일 터치 지원
          onTouchEnd={handleMouseUp}      // 모바일 터치 지원
          className="w-full tablet:h-[6px] laptop:h-[6px] desktop:h-[6px] h-[3px] bg-ui-transparent-light rounded-lg appearance-none cursor-pointer outline-none
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(139,92,246,0.3)] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb:hover]:scale-110 [&::-webkit-slider-thumb:hover]:shadow-[0_0_12px_rgba(139,92,246,0.4)]
          [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-ui-transparent-light [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-[0_0_8px_rgba(139,92,246,0.3)] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none"
          style={{
            background: `linear-gradient(to right, #916FFF 0%, #916FFF ${progressPercentage}%, #e5e7eb ${progressPercentage}%, #e5e7eb 100%)`
          }}
        />

        <div
          className="text-white absolute top-[35px] desktop:body-sm-medium laptop:body-sm-medium tablet:body-sm-medium caption-md-medium transform -translate-x-1/2 transition-all duration-200 ease-out whitespace-nowrap"
          style={{ left: getThumbPosition() }}
        >
          {getExperienceText(signUpData?.workExperience)}
        </div>
      </div>
    </div>
  )
}
