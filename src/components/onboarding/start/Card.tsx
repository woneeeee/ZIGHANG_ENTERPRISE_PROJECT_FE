import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import StartPlanetIcon from '@/assets/lotties/onboarding_start.json'

const Card = () => {
  const nav = useNavigate()

  return (
    <main className="[border-image:linear-gradient(90deg, rgba(120,112,158,.8) 0%, rgba(96,65,255,0) 50%, rgba(113,104,144,.8) 100% )_1] tablet:w-[564px] tablet:gap-[65px] tablet:px-[90px] tablet:pt-[86px] tablet:pb-[70px] flex w-[287px] flex-col items-center justify-center gap-[64px] rounded-[30px] border border-solid border-transparent bg-[#c8c2e5]/[0.1] px-[14px] pt-[50px] pb-[48px] backdrop-blur-[15px] [border-image-slice:1]">
      <Lottie animationData={StartPlanetIcon} loop={true} autoplay={true} />
      <div className="flex flex-col items-center gap-[36px]">
        <div className="flex flex-col gap-[9px] text-center">
          <p className="mobile:hidden tablet:flex body-lg-bold tablet:heading-md-bold text-white">
            우주처럼 넓은 취업시장에서 길을 잃었나요?
          </p>
          <p className="mobile:flex tablet:hidden body-lg-bold text-white">
            우주처럼 넓은 취업시장에서
            <br />
            길을 잃었나요?
          </p>
          <p className="caption-md-medium tablet:heading-sm-medium text-neutral-100">
            몇 가지 질문만 답하면, 내 커리어 가치관과
            <br /> 딱 맞는 공고를 볼 수 있어요
          </p>
        </div>
        <Button
          className="caption-md-semibold tablet:body-xl-semibold rounded-[6px] bg-purple-400 px-[14px] py-[12px] text-white"
          onClick={() => {
            nav('/onboarding/test')
          }}
        >
          커리어 성향 테스트 시작하기
        </Button>
      </div>
    </main>
  )
}

export default Card
