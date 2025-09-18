import {
  accountingConstants,
  AIConstants,
  architectureConstants, customerServiceConstants,
  designConstants,
  educationConstants,
  engineeringConstants,
  financeConstants,
  foodAndBeverageConstants,
  gameConstants, hrConstants,
  ITConstants,
  legalConstants,
  manufacturingConstants,
  marketingConstants,
  mediaAndEntertainmentConstants,
  medicalConstants, planningAndStrategyConstants, productPlanningAndMDConstants,
  publicServiceConstants, salesConstants,
  securitiesConstants, serviceConstants, tradeAndLogisticsConstants, transportationConstants,
} from '@/constants/SignUp.ts'
import { useSignUpStore } from '@/store/signupStore.ts'
import type { JobGroupEnumType, JobPositionEnumType } from '@/types/signup.ts'
import { toast } from 'react-toastify'
import { useEffect, useRef } from 'react'
import { useEditMyInfoStore } from '@/stores/editMyInfoStore.ts'
import {
  changeCategoryEnumToKor,
} from '@/utils/sign-up.ts'

export default function JobPosition() {
  const setJobPositionState = useSignUpStore((state) => state.setState)
  const signUpData = useSignUpStore((state) => state.signUpData)
  const editMyInfoData = useEditMyInfoStore((state) => state.editMyInfoData)
  const setEditMyInfoDataState = useEditMyInfoStore((state) => state.setState)

  // 자동 스크롤을 위한 타이머 ref
  const autoScrollTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    if (editMyInfoData) {
      setJobPositionState({...signUpData, signUpData: {...signUpData, jobPositions: editMyInfoData?.jobPositions}})
    }
  }, [editMyInfoData])

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current)
      }
    }
  }, [])

  const changeCategoryToJobCategory = (selectedCategory: JobGroupEnumType | undefined | null) => {
    switch (selectedCategory) {
      case 'IT_개발':
        return ITConstants
      case 'AI_데이터':
        return AIConstants
      case '엔지니어링_연구_RND':
        return engineeringConstants
      case '건설_건축':
        return architectureConstants
      case '생산_기능':
        return manufacturingConstants
      case '법률_법무':
        return legalConstants
      case '증권_운영':
        return securitiesConstants
      case '은행_보험_카드_캐피탈':
        return financeConstants
      case '의료_보건':
        return medicalConstants
      case '공공_복지':
        return publicServiceConstants
      case '교육':
        return educationConstants
      case '식음료':
        return foodAndBeverageConstants
      case '마케팅_광고_홍보':
        return marketingConstants
      case '디자인':
        return designConstants
      case '게임':
        return gameConstants
      case '미디어_엔터':
        return mediaAndEntertainmentConstants
      case '고객상담_TM':
        return customerServiceConstants
      case '서비스':
        return serviceConstants
      case '기획_전략_경영':
        return planningAndStrategyConstants
      case '상품기획_MD':
        return productPlanningAndMDConstants
      case '영업':
        return salesConstants
      case '무역_물류_유통':
        return tradeAndLogisticsConstants
      case '운송_배송':
        return transportationConstants
      case '회계_세무_재무':
        return accountingConstants
      case '인사_노무_HRD_총무':
        return hrConstants
      default:
        return []
    }
  }

  // 현재 선택된 직무 목록을 가져오는 함수
  const getCurrentJobPositions = (): JobPositionEnumType[] => {
    if (editMyInfoData) {
      return editMyInfoData.jobPositions || []
    } else {
      return signUpData?.jobPositions || []
    }
  }

  // // 자동 스크롤 함수
  // const scheduleAutoScroll = () => {
  //   // 기존 타이머가 있으면 취소
  //   if (autoScrollTimeoutRef.current) {
  //     clearTimeout(autoScrollTimeoutRef.current)
  //   }
  //
  //   // 직무가 1개 이상 선택되었을 때만 자동 스크롤 예약
  //   const currentPositions = getCurrentJobPositions()
  //   if (currentPositions.length > 0) {
  //     const delay = currentPositions.length === 4 ? 500 : 2000 // 4개면 0.5초, 나머지는 2초
  //
  //     autoScrollTimeoutRef.current = setTimeout(() => {
  //       const categorySection = document.getElementById('experience-section')
  //       if (categorySection) {
  //         categorySection.scrollIntoView({
  //           behavior: 'smooth',
  //           block: 'start'
  //         })
  //       }
  //     }, delay)
  //   }
  // }

  const handleJobCategoryClick = (jobCategory: JobPositionEnumType) => {
    const currentJobPositions = getCurrentJobPositions()

    // 이미 선택된 항목인지 확인 (토글 기능)
    const isAlreadySelected = currentJobPositions.includes(jobCategory)

    let updatedJobPositions: JobPositionEnumType[]

    if (isAlreadySelected) {
      // 선택 해제 - 0개까지 허용 (최소 제한 제거)
      updatedJobPositions = currentJobPositions.filter(item => item !== jobCategory)
    } else {
      // 새로 선택 - 최대 4개까지만
      if (currentJobPositions.length >= 4) {
        toast.error('최대 4개의 직무만 선택할 수 있습니다.')
        return
      }
      updatedJobPositions = [...currentJobPositions, jobCategory]
    }

    // 상태 업데이트
    if (editMyInfoData) {
      setEditMyInfoDataState({
        editMyInfoData: {
          ...editMyInfoData,
          jobPositions: updatedJobPositions
        }
      })
      // signUpData도 동기화
      setJobPositionState({
        signUpData: {
          ...signUpData,
          jobPositions: updatedJobPositions
        }
      })
    } else {
      setJobPositionState({
        signUpData: {
          ...signUpData,
          jobPositions: updatedJobPositions
        }
      })
    }

    // 상태 업데이트 후 자동 스크롤 예약 (현재 업데이트된 길이로 판단)
    setTimeout(() => {
      // 현재 업데이트된 선택 개수에 따라 스크롤 스케줄링
      if (updatedJobPositions.length > 0) {
        // 기존 타이머가 있으면 취소
        if (autoScrollTimeoutRef.current) {
          clearTimeout(autoScrollTimeoutRef.current)
        }

        const delay = updatedJobPositions.length === 4 ? 500 : 2000 // 4개면 0.5초, 나머지는 2초

        autoScrollTimeoutRef.current = setTimeout(() => {
          const categorySection = document.getElementById('experience-section')
          if (categorySection) {
            categorySection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, delay)
      }
    }, 100) // 상태 업데이트가 완료된 후 스케줄링
  }

  const isSelected = (jobCategory: JobPositionEnumType) => {
    const currentJobPositions = getCurrentJobPositions()
    return currentJobPositions.includes(jobCategory)
  }

  return (
    <main
      id="job-category-section"
      className="desktop:pt-[220px] laptop:pt-[220px] tablet:pt-[220px] tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] flex min-h-screen flex-col gap-y-4 desktop:px-8 laptop:px-8 tablet:px-8 px-4 pt-[150px]"
    >
      <div className="flex flex-col gap-y-[2px]">
        <h1 className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold">
          <span className="text-purple-500">
            {changeCategoryEnumToKor(
              editMyInfoData ? editMyInfoData.jobGroups : signUpData?.jobGroups,
            )}
          </span>{' '}
          분야의 희망하는 직무를 선택해주세요
        </h1>

        {/* 선택된 개수 표시 */}
        <div className="flex gap-x-2 desktop:body-lg-medium laptop:body-lg-medium tablet:body-lg-medium caption-sm-medium text-neutral-700">
          <div>
            최대 4개 선택 가능
          </div>
          <p>({getCurrentJobPositions().length}/4)</p>
        </div>
      </div>

      <section className="flex flex-wrap gap-[8px] w-[80%]">
        {(
          changeCategoryToJobCategory(
            editMyInfoData ? editMyInfoData.jobGroups : signUpData?.jobGroups,
          ) || []
        ).map((jobCategory) => {
          const selected = isSelected(jobCategory.enum)

          return (
            <button
              onClick={() => handleJobCategoryClick(jobCategory.enum)}
              key={jobCategory.kor}
              className={`desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-sm-medium flex h-[36px] cursor-pointer items-center justify-center rounded-[6px] border px-[12px] py-[10px] transition-colors ${
                selected
                  ? 'border-purple-500 bg-purple-500 text-white'
                  : 'border-neutral-400 hover:border-purple-300 hover:bg-purple-50'
              }`}
            >
              {jobCategory.kor}
            </button>
          )
        })}
      </section>
    </main>
  )
}
