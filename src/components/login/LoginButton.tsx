import { KakaoLoginIcon, NaverLoginIcon, GoogleLoginIcon } from '@/assets/svgComponents'

const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID
const KAKAO_BASE_URL = import.meta.env.VITE_KAKAO_BASE_URL
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI
const REDIRECT_URI = KAKAO_BASE_URL + KAKAO_REDIRECT_URI

const LoginButton = ({ type = 'space' }) => {
  const baseClasses =
    'body-lg-medium flex items-center gap-[17px] rounded-[8px] px-[240px] py-[13px] cursor-pointer'
  const themeClasses =
    type === 'white'
      ? 'bg-white border border-neutral-300 text-neutral-900'
      : 'bg-white/[0.12] border border-white/50 text-neutral-300'
  const buttonClasses = `${baseClasses} ${themeClasses}`

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

  return (
    <div className="flex flex-col gap-[10px]">
      <button
        className={buttonClasses}
        onClick={() => {
          window.location.href = kakaoURL
        }}
      >
        <KakaoLoginIcon className="h-[28px] w-[28px]" /> 카카오 계정으로 계속하기
      </button>
      <button
        className={buttonClasses}
        onClick={() => {
          window.location.href = kakaoURL
        }}
      >
        <NaverLoginIcon className="h-[28px] w-[28px]" /> 네이버 계정으로 계속하기
      </button>
      <button
        className={buttonClasses}
        onClick={() => {
          window.location.href = kakaoURL
        }}
      >
        <GoogleLoginIcon className="h-[28px] w-[28px]" /> 구글 계정으로 계속하기
      </button>
    </div>
  )
}

export default LoginButton
