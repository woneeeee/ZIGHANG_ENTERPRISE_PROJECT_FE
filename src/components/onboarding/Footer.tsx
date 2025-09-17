import { DownloadIcon, RefreshIcon } from '@/assets/svgComponents'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { deleteReOnboarding } from '@/apis/deleteMypageTest'
import { useOnboardingTestStore, useReOnboardingTestStore } from '@/stores/onboardingTestStore'

const Footer = () => {
  const nav = useNavigate()

  const handleRefresh = async () => {
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      try {
        const res = await deleteReOnboarding()
        if (res.name) {
          useOnboardingTestStore.getState().reset()
          useReOnboardingTestStore.getState().reset()
          localStorage.setItem('onboarding_done', 'true')
          nav('/onboarding/start')
        }
      } catch (e) {
        console.error(e)
      }
    } else {
      localStorage.clear()
      useOnboardingTestStore.getState().reset()
      nav('/onboarding/start')
    }
  }

  const handleShare = async () => {
    const url = new URL('/onboarding/start', window.location.origin).toString()
    const title = 'Onboarding Test'
    const text = '온보딩 테스트 링크 공유할게!'

    try {
      if (navigator.share) {
        await navigator.share({ title, text, url })
        return
      }
      if ('clipboard' in navigator && window.isSecureContext) {
        await navigator.clipboard.writeText(url)
        alert('링크가 클립보드에 복사됐어요.')
        return
      }
      window.prompt('아래 링크를 복사하세요:', url)
    } catch (e) {
      console.error('[share] failed:', e)
      window.prompt('아래 링크를 복사하세요:', url)
    }
  }

  return (
    <footer className="fixed inset-x-0 bottom-0 z-50">
      <div className="absolute inset-x-0 -top-[108px] h-[108px] items-center justify-center bg-gradient-to-b from-[#181C31]/0 to-[#1F2242]">
        <div className="mx-auto w-full max-w-[900px]">
          <div className="tablet:gap-[18px] flex h-[108px] items-center justify-center gap-[14px]">
            <Button
              onClick={handleRefresh}
              className="tablet:h-[48px] tablet:w-[48px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-50 hover:bg-purple-100"
            >
              <RefreshIcon className="h-[24px] w-[24px]" />
            </Button>
            <Button
              onClick={handleShare}
              className="tablet:px-[60px] tablet:py-[12px] tablet:w-[240px] tablet:h-[46px] body-sm-semibold flex h-[39px] w-[210px] items-center gap-[8px] rounded-[6px] bg-neutral-50 px-[50px] py-[10px] text-purple-500 hover:bg-purple-100"
            >
              <DownloadIcon className="h-[21px] w-[21px]" />
              테스트 공유하기
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
