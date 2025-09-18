import { KakaoLoginIcon, NaverLoginIcon, GoogleLoginIcon } from '@/assets/svgComponents'
import { useLocation } from 'react-router-dom'

const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI

const LoginButton = ({ type = 'space' }) => {
  const loc = useLocation()

  const baseClasses =
    'body-caption-sm2-medium text-[11px] w-[253px] tablet:w-[658px] tablet:h-[54px] whitespace-nowrap h-[36px] tablet:body-lg-medium flex items-center justify-center gap-[10px] tablet:gap-[17px] rounded-[8px] px-[40px] py-[10px] tablet:py-[13px] cursor-pointer'
  const themeClasses =
    type === 'white'
      ? 'bg-white border border-neutral-300 text-neutral-900'
      : 'bg-white/[0.12] border border-white/50 text-neutral-300'
  const buttonClasses = `${baseClasses} ${themeClasses}`

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`

  return (
    <div className="flex flex-col gap-[10px]">
      <button
        className={buttonClasses}
        onClick={() => {
          localStorage.setItem('loginFrom', loc.pathname)
          window.location.href = kakaoURL
        }}
      >
        <KakaoLoginIcon className="tablet:h-[28px] tablet:w-[28px] h-[15px] w-[15px]" /> 카카오
        계정으로 계속하기
      </button>
      <button
        className={buttonClasses}
        onClick={() => {
          window.location.href = kakaoURL
        }}
      >
        <NaverLoginIcon className="tablet:h-[28px] tablet:w-[28px] h-[15px] w-[15px]" /> 네이버
        계정으로 계속하기
      </button>
      <button
        className={buttonClasses}
        onClick={() => {
          window.location.href = kakaoURL
        }}
      >
        <GoogleLoginIcon className="tablet:h-[28px] tablet:w-[28px] h-[15px] w-[15px]" /> 구글
        계정으로 계속하기
      </button>
    </div>
  )
}

export default LoginButton
