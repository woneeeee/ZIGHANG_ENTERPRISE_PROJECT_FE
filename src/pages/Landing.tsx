import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import SearchInput from '@/components/landing/SearchInput'
import JobBox from '@/components/landing/JobBox'
import { useNavigate } from 'react-router-dom'
import { ChevronRightIcon } from '@/assets/svgComponents'
import Carousel from '@/components/landing/Carousel'

const Landing = () => {
  const nav = useNavigate()

  const handleCompanyClick = () => {
    nav('/company')
  }
  const handleAllClick = () => {
    nav('/all')
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <div className="flex w-full flex-col items-center pt-[40px]">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-1 text-[22px] font-bold">
            <span>대기업 및 유니콘 채용 공고를</span>
            <div className="flex items-center">
              <span className="text-[#6F00B6]">빠짐없이 모두</span>
              <span>&nbsp;모았어요.</span>
            </div>
          </div>
          <SearchInput />
        </div>
        <div className="relative inline-flex items-center gap-2 py-[24px]">
          <div
            className="relative inline-flex flex-[0_0_auto] cursor-pointer items-center gap-1"
            onClick={handleCompanyClick}
          >
            <p className="relative w-fit text-[16px] leading-[normal] font-semibold tracking-[0] whitespace-nowrap">
              <span className="text-[#6F00B6]">111111개 기업</span>
              <span className="text-[#646464]"> 전체 보기</span>
            </p>
            <ChevronRightIcon className="h-4 w-4 text-[#646464]" />
          </div>
          <div
            className="relative inline-flex flex-[0_0_auto] cursor-pointer items-center gap-1 text-[16px]"
            onClick={handleAllClick}
          >
            <p className="relative w-fit leading-[normal] font-semibold tracking-[0] whitespace-nowrap">
              <span className="text-[#6F00B6]">11111개 공고</span>
              <span className="text-[#646464]"> 전체 보기</span>
            </p>
            <ChevronRightIcon className="h-4 w-4 text-[#646464]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-9">
        <JobBox />
        <Carousel />
      </div>
      <Footer />
    </main>
  )
}

export default Landing
