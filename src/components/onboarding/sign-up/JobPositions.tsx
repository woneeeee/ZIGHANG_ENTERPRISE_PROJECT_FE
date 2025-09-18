import {
  accountingConstants,
  AIConstants,
  architectureConstants,
  customerServiceConstants,
  designConstants,
  educationConstants,
  engineeringConstants,
  financeConstants,
  foodAndBeverageConstants,
  gameConstants,
  hrConstants,
  ITConstants,
  legalConstants,
  manufacturingConstants,
  marketingConstants,
  mediaAndEntertainmentConstants,
  medicalConstants,
  planningAndStrategyConstants,
  productPlanningAndMDConstants,
  publicServiceConstants,
  salesConstants,
  securitiesConstants,
  serviceConstants,
  tradeAndLogisticsConstants,
  transportationConstants,
} from '@/constants/SignUp.ts'
import { useSignUpStore } from '@/store/signupStore.ts'
import type { JobGroupEnumType, JobPositionEnumType } from '@/types/signup.ts'
import { toast } from 'react-toastify'
import { useEffect, useRef } from 'react'

export default function JobPositions() {
  const setState = useSignUpStore((state) => state.setState)
  const signUpData = useSignUpStore((state) => state.signUpData)

  // 자동 스크롤을 위한 타이머 ref
  const autoScrollTimeoutRef = useRef<number | null>(null)

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

  const changeCategoryEnumToKor = (selectedCategory: JobGroupEnumType | undefined | null) => {
    switch (selectedCategory) {
      case 'IT_개발':
        return 'IT 개발'
      case 'AI_데이터':
        return 'AI 데이터'
      case '엔지니어링_연구_RND':
        return '엔지니어링 R&D'
      case '건설_건축':
        return '건설 건축'
      case '생산_기능':
        return '생산 기능직'
      case '법률_법무':
        return '법률 법무'
      case '증권_운영':
        return '증권 운영'
      case '은행_보험_카드_캐피탈':
        return '은행 카드 보험'
      case '의료_보건':
        return '의료 보건'
      case '공공_복지':
        return '공공 복지'
      case '교육':
        return '교육'
      case '식음료':
        return '식음료'
      case '마케팅_광고_홍보':
        return '마케팅 광고'
      case '디자인':
        return '디자인'
      case '게임':
        return '게임'
      case '미디어_엔터':
        return '미디어 엔터'
      case '고객상담_TM':
        return '고객상담 TM'
      case '서비스':
        return '서비스'
      case '기획_전략_경영':
        return '기획 전략'
      case '상품기획_MD':
        return '상품기획 MD'
      case '영업':
        return '영업'
      case '무역_물류_유통':
        return '무역 물류'
      case '운송_배송':
        return '운송 배송'
      case '회계_세무_재무':
        return '회계 재무 세무'
      case '인사_노무_HRD_총무':
        return 'HR 총무'
      default:
        return ''
    }
  }

  // 현재 선택된 직무 목록을 가져오는 함수
  const getCurrentJobPositions = (): JobPositionEnumType[] => {
    return signUpData?.jobPositions || []
  }

  const handleJobCategoryClick = (jobCategory: JobPositionEnumType) => {
    const currentJobPositions = getCurrentJobPositions()

    // 이미 선택된 항목인지 확인 (토글 기능)
    const isAlreadySelected = currentJobPositions.includes(jobCategory)

    let updatedJobPositions: JobPositionEnumType[]

    if (isAlreadySelected) {
      // 선택 해제 - 0개까지 허용
      updatedJobPositions = currentJobPositions.filter((item) => item !== jobCategory)
    } else {
      // 새로 선택 - 최대 4개까지만
      if (currentJobPositions.length >= 4) {
        toast.error('최대 4개의 직무만 선택할 수 있습니다.')
        return
      }
      updatedJobPositions = [...currentJobPositions, jobCategory]
    }

    // 상태 업데이트
    if (signUpData) {
      setState({
        signUpData: {
          ...signUpData,
          jobPositions: updatedJobPositions,
        },
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
              block: 'start',
            })
          }
        }, delay)
      }
    }, 100) // 상태 업데이트가 완료된 후 스케줄링
  }

  const isSelected = (jobCategory: JobPositionEnumType) => {
    return signUpData?.jobPositions?.includes(jobCategory) || false
  }

  return (
    <main
      id="job-category-section"
      className="desktop:pt-[220px] laptop:pt-[220px] tablet:pt-[220px] flex min-h-screen flex-col gap-y-4 px-4 pt-[150px]"
    >
      <div className="flex flex-col gap-y-[2px]">
        <h1 className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold text-white">
          <span className="text-purple-400">{changeCategoryEnumToKor(signUpData?.jobGroups)}</span>{' '}
          분야의 희망하는 직무를 선택해주세요
        </h1>

        {/* 선택된 개수 표시 */}
        <div className="flex gap-x-2 desktop:body-lg-medium laptop:body-lg-medium tablet:body-lg-medium caption-sm-medium text-white">
          <div>
            최대 4개 선택 가능
          </div>
          <p>({getCurrentJobPositions().length}/4)</p>
        </div>
      </div>

      <section className="flex flex-wrap gap-[8px] w-[80%]">
        {(changeCategoryToJobCategory(signUpData?.jobGroups) || []).map((jobCategory) => {
          const selected = isSelected(jobCategory.enum)

          return (
            <button
              onClick={() => handleJobCategoryClick(jobCategory.enum)}
              key={jobCategory.kor}
              className={`desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-sm-medium flex h-[36px] cursor-pointer items-center justify-center rounded-[6px] border px-[12px] py-[10px] text-white transition-colors ${
                selected
                  ? 'border-0 bg-purple-400 text-white'
                  : 'hover:bg-ui-transparent-light border-neutral-400 hover:border-purple-300'
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
