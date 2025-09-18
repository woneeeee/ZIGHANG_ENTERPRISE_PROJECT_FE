import { type ChangeEvent, useEffect, useState } from 'react'
import { useSignUpStore } from '@/store/signupStore.ts'
import { useEditMyInfoStore } from '@/stores/editMyInfoStore.ts'

export default function Experience() {
  return (
    <main
      id="experience-section"
      className="flex flex-col justify-start desktop:pt-[220px] laptop:pt-[220px] tablet:pt-[220px] pt-[150px] px-4 gap-y-4 tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] min-h-screen">
      <h1
        className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold">
        현재까지의 경력을 알려주세요</h1>
      <div className="flex justify-start items-start">
        <CustomRangeSlider />
      </div>
    </main>
  )
}

function CustomRangeSlider () {
  const setWorkExperienceState = useSignUpStore((state) => state.setState)
  const signUpData = useSignUpStore((state) => state.signUpData)
  const editMyInfoData = useEditMyInfoStore((state) => state.editMyInfoData)
  const setEditMyInfoDataState = useEditMyInfoStore((state) => state.setState)

  useEffect(() => {
    if (editMyInfoData) {
      setWorkExperienceState({...signUpData, signUpData: {...signUpData, workExperience: editMyInfoData?.workExperience}})
    }
  }, [editMyInfoData])

  const [isDragging, setIsDragging] = useState(false);

  // 현재 경력 값을 가져오는 헬퍼 함수
  const getCurrentWorkExperience = () => {
    return editMyInfoData ? editMyInfoData.workExperience ?? 0 : signUpData?.workExperience ?? 0;
  };

  // 경력 값을 텍스트로 변환하는 함수
  const getExperienceText = (value: number | undefined) => {
    const safeValue = value ?? 0;
    if (safeValue === 0) return "신입";
    if (safeValue >= 1 && safeValue <= 10) return `${safeValue}년`;
    if (safeValue >= 11) return "10년 이상";
    return "신입";
  };

  // 진행률 계산 - 현재 값 반영
  const progressPercentage = (getCurrentWorkExperience() / 11) * 100;

  // thumb 위치 계산
  const getThumbPosition = () => {
    const workExperience = getCurrentWorkExperience();

    if (workExperience >= 11) {
      return `calc(${progressPercentage}% - 10px)`;
    }
    if (workExperience === 0) {
      return `calc(${progressPercentage}% + 5px)`;
    }
    return `calc(${progressPercentage}% + ${10 - progressPercentage * 0.2}px)`;
  };

  const handleExperienceClick = (workExperience: number | undefined) => {
    // 상태 저장
    if (editMyInfoData) {
      setEditMyInfoDataState({
        editMyInfoData: {
          ...editMyInfoData,
          workExperience: workExperience
        }
      })
    } else {
      setWorkExperienceState({
        signUpData: {
          ...signUpData,
          workExperience: workExperience
        }
      })
    }

    // 다음 섹션으로 스크롤
    const categorySection = document.getElementById('commute-section')
    if (categorySection) {
      categorySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleMouseDown = () => {
    setIsDragging(true);
  }

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      handleExperienceClick(getCurrentWorkExperience());
    }
  }

  // 슬라이더 값 변경 핸들러
  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);

    if (editMyInfoData) {
      setEditMyInfoDataState({
        editMyInfoData: {
          ...editMyInfoData,
          workExperience: newValue
        }
      });
    } else {
      setWorkExperienceState({
        signUpData: {
          ...signUpData,
          workExperience: newValue
        }
      });
    }
  }

  return (
    <div className="w-[227px] tablet:w-[360px] desktop:w-[360px] laptop:w-[360px]">
      <div className="relative">
        <input
          type="range"
          min={0}
          max={11}
          step={1}
          value={getCurrentWorkExperience()}
          onChange={handleSliderChange}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          className="w-full tablet:h-[6px] laptop:h-[6px] desktop:h-[6px] h-[3px] bg-purple-50 rounded-lg appearance-none cursor-pointer outline-none
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(139,92,246,0.3)] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb:hover]:scale-110 [&::-webkit-slider-thumb:hover]:shadow-[0_0_12px_rgba(139,92,246,0.4)]
          [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-purple-500 [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-[0_0_8px_rgba(139,92,246,0.3)] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none"
          style={{
            background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${progressPercentage}%, #e5e7eb ${progressPercentage}%, #e5e7eb 100%)`
          }}
        />

        <div
          className="absolute top-[35px] desktop:body-sm-medium laptop:body-sm-medium tablet:body-sm-medium caption-md-medium transform -translate-x-1/2 transition-all duration-200 ease-out whitespace-nowrap"
          style={{ left: getThumbPosition() }}
        >
          {getExperienceText(getCurrentWorkExperience())}
        </div>
      </div>
    </div>
  )
}
