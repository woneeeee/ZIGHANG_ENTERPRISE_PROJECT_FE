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
import { useState } from 'react'

type JobCategoryType = 'IT_개발' | 'AI_데이터' | '엔지니어링_R&D' | '건설_건축' | '생산_기능직' | '법률_법무' | '증권_운용' | '은행_카드_보험' | '의료_보건' | '공공_복지' | '교육' | '식음료' | '마케팅_광고' | '디자인' | '게임' | '미디어_엔터' | '고객상담_TM' | '서비스' | '기획_전략' | '상품기획_MD' | '영업' | '무역_물류' | '운송_배송' | '회계_재무_세무' | 'HR_총무'

export default function JobCategory() {
  const [selectedCategory, setSelectedCategory] = useState<JobCategoryType>('IT_개발')
  const changeCategoryToJobCategory = (selectedCategory: JobCategoryType) => {
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

  const handleJobCategoryClick = (jobCategory) => {
    // 1. 상태 저장

    // 2. Category 섹션으로 부드러운 스크롤
    const categorySection = document.getElementById('experience-section')
    if (categorySection) {
      categorySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }


  return (
    <main
      id="job-category-section"
      className="flex flex-col pt-[84px] px-4 gap-y-4 tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] min-h-screen">
      <h1
        className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold"><span className="text-purple-500">IT·개발</span> 분야의 희망하는 직무를 선택해주세요</h1>

      <section className="gap-[6px] flex flex-wrap">
        {changeCategoryToJobCategory(selectedCategory).map((jobCategory) => {
          return (
            <button
              onClick={() => handleJobCategoryClick(jobCategory)}
              key={jobCategory.kor}
                    className={`flex items-center justify-center h-[36px] py-[10px] px-[12px] caption-sm-medium rounded-[6px] border border-neutral-400 hover:border-purple-300 hover:bg-purple-50 cursor-pointer`}>
              {jobCategory.kor}
            </button>
          )
        })}
      </section>
    </main>
  )
}
