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
import { toast } from 'react-toastify' // 또는 사용하는 토스트 라이브러리

export default function JobCategory() {
  const setState = useSignUpStore((state) => state.setState)
  const signUpData = useSignUpStore((state) => state.signUpData)

  const changeCategoryToJobCategory = (selectedCategory: JobGroupEnumType | undefined) => {
    switch (selectedCategory) {
      case 'IT_개발':
        return ITConstants
      case 'AI_데이터':
        return AIConstants
      case '엔지니어링_R&D':
        return engineeringConstants
      case '건설_건축':
        return architectureConstants
      case '생산_기능직':
        return manufacturingConstants
      case '법률_법무':
        return legalConstants
      case '증권_운용':
        return securitiesConstants
      case '은행_카드_보험':
        return financeConstants
      case '의료_보건':
        return medicalConstants
      case '공공_복지':
        return publicServiceConstants
      case '교육':
        return educationConstants
      case '식음료':
        return foodAndBeverageConstants
      case '마케팅_광고':
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
      case '기획_전략':
        return planningAndStrategyConstants
      case '상품기획_MD':
        return productPlanningAndMDConstants
      case '영업':
        return salesConstants
      case '무역_물류':
        return tradeAndLogisticsConstants
      case '운송_배송':
        return transportationConstants
      case '회계_재무_세무':
        return accountingConstants
      case 'HR_총무':
        return hrConstants
    }
  }

  const changeCategoryEnumToKor = (selectedCategory: JobGroupEnumType | undefined) => {
    switch (selectedCategory) {
      case 'IT_개발':
        return 'IT 개발'
      case 'AI_데이터':
        return 'AI 데이터'
      case '엔지니어링_R&D':
        return '엔지니어링 R&D'
      case '건설_건축':
        return '건설 건축'
      case '생산_기능직':
        return '생산 기능직'
      case '법률_법무':
        return '법률 법무'
      case '증권_운용':
        return '증권 운용'
      case '은행_카드_보험':
        return '은행 카드 보험'
      case '의료_보건':
        return '의료 보건'
      case '공공_복지':
        return '공공 복지'
      case '교육':
        return '교육'
      case '식음료':
        return '식음료'
      case '마케팅_광고':
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
      case '기획_전략':
        return '기획 전략'
      case '상품기획_MD':
        return '상품기획 MD'
      case '영업':
        return '영업'
      case '무역_물류':
        return '무역 물류'
      case '운송_배송':
        return '운송 배송'
      case '회계_재무_세무':
        return '회계 재무 세무'
      case 'HR_총무':
        return 'HR 총무'
    }
  }

  const handleJobCategoryClick = (jobCategory: JobPositionEnumType) => {
    const currentJobPositions = signUpData?.jobPositionEnum || []

    // 이미 선택된 항목인지 확인 (토글 기능)
    const isAlreadySelected = currentJobPositions.includes(jobCategory)

    let updatedJobPositions: JobPositionEnumType[]

    if (isAlreadySelected) {
      // 선택 해제 - 최소 1개는 유지해야 함
      if (currentJobPositions.length <= 1) {
        toast.error('최소 1개의 직무는 선택해야 합니다.')
        return
      }
      updatedJobPositions = currentJobPositions.filter(item => item !== jobCategory)
    } else {
      // 새로 선택 - 최대 2개까지만
      if (currentJobPositions.length >= 2) {
        toast.error('최대 2개의 직무만 선택할 수 있습니다.')
        return
      }
      updatedJobPositions = [...currentJobPositions, jobCategory]
    }

    // 상태 업데이트
    setState({
      signUpData: {
        ...signUpData,
        jobPositionEnum: updatedJobPositions
      }
    })

    // 2개가 모두 선택되었을 때만 스크롤
    if (updatedJobPositions.length === 2) {
      // 약간의 지연을 주어 상태 업데이트 후 스크롤
      setTimeout(() => {
        const categorySection = document.getElementById('experience-section')
        if (categorySection) {
          categorySection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    }
  }

  const isSelected = (jobCategory: JobPositionEnumType) => {
    return signUpData?.jobPositionEnum?.includes(jobCategory) || false
  }


  return (
    <main
      id="job-category-section"
      className="flex flex-col desktop:pt-[220px] laptop:pt-[220px] tablet:pt-[180px] pt-[150px] px-4 gap-y-4 tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] min-h-screen">
      <h1
        className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold"><span className="text-purple-500">{changeCategoryEnumToKor(signUpData?.jobGroupEnum)}</span> 분야의 희망하는 직무를 선택해주세요</h1>

      <section className="gap-[6px] flex flex-wrap">
        {(changeCategoryToJobCategory(signUpData?.jobGroupEnum) || []).map((jobCategory) => {
          const selected = isSelected(jobCategory.enum)

          return (
            <button
              onClick={() => handleJobCategoryClick(jobCategory.enum)}
              key={jobCategory.kor}
              className={`flex items-center justify-center h-[36px] py-[10px] px-[12px] desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-sm-medium rounded-[6px] border cursor-pointer transition-colors
                ${selected
                ? 'bg-purple-500 text-white'
                : 'border-neutral-400 hover:border-purple-300 hover:bg-purple-50'
              }`}>
              {jobCategory.kor}
            </button>
          )
        })}
      </section>
    </main>
  )
}
