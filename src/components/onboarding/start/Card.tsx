import { StartPlanetIcon } from '@/assets/svgComponents'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const nav = useNavigate()

  return (
    <main className="[border-image:linear-gradient(90deg, rgba(120,112,158,.8) 0%, rgba(96,65,255,0) 50%, rgba(113,104,144,.8) 100% )_1] tablet:gap-[134px] flex flex-col items-center justify-center gap-[64px] rounded-[30px] border border-solid border-transparent bg-[#c8c2e5]/[0.1] px-[116px] pt-[112px] pb-[88px] backdrop-blur-[15px] [border-image-slice:1]">
      <StartPlanetIcon className="h-[374px] w-[418px]" />
      <div className="flex flex-col items-center gap-[40px]">
        <div className="flex flex-col gap-[12px] text-center">
          <p className="heading-md-bold text-white">우주처럼 넓은 취업시장에서 길을 잃었나요?</p>
          <p className="heading-sm-medium text-neutral-100">
            몇 가지 질문만 답하면, 내 커리어 가치관과
            <br /> 딱 맞는 공고를 볼 수 있어요
          </p>
        </div>
        <Button
          className="caption-md-semibold tablet:body-xl-semibold rounded-[6px] bg-purple-400 px-[14px] py-[12px] text-white"
          onClick={() => {
            nav('/')
          }}
        >
          커리어 성향 테스트 시작하기
        </Button>
      </div>
    </main>
  )
}

export default Card
