import { DownloadIcon, RefreshIcon } from '@/assets/svgComponents'
import Button from './Button'

const FOOTER_H = 108

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-[108px] h-[108px] items-center justify-center bg-gradient-to-b from-[#181C31]/0 to-[#1F2242]"
      >
        <div className="mx-auto w-full max-w-[900px]">
          <div
            className={`flex h-[${FOOTER_H}px] tablet:gap-[18px] items-center justify-center gap-[14px]`}
          >
            <Button className="tablet:h-[48px] tablet:w-[48px] flex h-[40px] w-[40px] items-center justify-center rounded-[9999px] border border-neutral-200 bg-neutral-100">
              <RefreshIcon className="h-[24px] w-[24px]" />
            </Button>
            <Button className="tablet:px-[60px] tablet:py-[12px] tablet:w-[240px] tablet:h-[46px] body-sm-semibold flex h-[39px] w-[210px] items-center gap-[8px] rounded-[6px] border border-purple-500 bg-neutral-50 px-[50px] py-[10px] text-purple-500">
              <DownloadIcon className="tablet:h-[21px] tablet:w-[21px] h-[21px] w-[21px]" />
              테스트 공유하기
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
