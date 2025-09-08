import NavMenu from './NavMenu'
import { useNavigate } from 'react-router-dom'
import NavSide from './NavSide'
import { UserProfileIcon, OnboardingLogoIcon, LogoIcon } from '@/assets/svgComponents'

import { cn } from '@/utils/cn'

type HeaderVariant = 'main' | 'space' | 'white'

type HeaderProps = {
  variant?: HeaderVariant
  className?: string
}

export default function Header({ variant = 'main', className }: HeaderProps) {
  if (variant === 'space') return <SpaceHeader className={className} />
  if (variant === 'white') return <WhiteHeader className={className} />
  return <MainHeader className={className} />
}

function SpaceHeader({ className }: { className?: string }) {
  const nav = useNavigate()

  return (
    <section
      className={cn(
        'tablet:items-center tablet:justify-center tablet:px-[40px] tablet:h-[82px] sticky inset-x-0 top-0 z-50 flex h-[46px] w-full items-center justify-start bg-gradient-to-r from-[#172241] to-[#0D142B] px-[23px]',
        className,
      )}
    >
      <OnboardingLogoIcon
        className="tablet:h-[36px] tablet:w-[81px] h-[21px] w-[47px]"
        onClick={() => nav('/')}
      />
    </section>
  )
}

function WhiteHeader({ className }: { className?: string }) {
  const nav = useNavigate()

  return (
    <section
      className={cn(
        'tablet:items-center tablet:justify-center tablet:px-[40px] tablet:h-[82px] sticky inset-x-0 top-0 z-50 flex h-[46px] w-full items-center justify-start bg-white px-[23px]',
        className,
      )}
    >
      <LogoIcon
        className="tablet:h-[36px] tablet:w-[81px] h-[21px] w-[47px]"
        onClick={() => nav('/')}
      />
    </section>
  )
}

function MainHeader({ className }: { className?: string }) {
  const nav = useNavigate()
  const accessToken = localStorage.getItem('accessToken')

  return (
    <header
      className={cn(
        'tablet:px-8 laptop:px-8 mx-auto flex w-full items-center justify-between px-8 py-3',
        className,
      )}
    >
      <div className="flex items-center gap-[25px]">
        <LogoIcon width={0} height={0} className="h-[56px] w-[101px]" onClick={() => nav('/')} />
        <NavMenu className="tablet:flex hidden" />
      </div>
      {accessToken ? (
        <>
          <div className="laptop:flex hidden items-center gap-4">
            <button className="body-lg-semibold">기업회원</button>
            <UserProfileIcon className="h-[48px] w-[48px]" onClick={() => nav('/profile')} />
          </div>
          <div className="tablet:flex laptop:hidden hidden items-center gap-4">
            <button className="body-lg-semibold">기업회원</button>
            <UserProfileIcon className="h-[48px] w-[48px]" onClick={() => nav('/profile')} />
            <NavSide />
          </div>
          <div className="tablet:hidden flex items-center gap-4">
            <UserProfileIcon className="h-[48px] w-[48px]" onClick={() => nav('/profile')} />
            <NavSide />
          </div>
        </>
      ) : (
        <>
          <div className="tablet:flex hidden items-center gap-5">
            <div className="flex items-center gap-4">
              <button className="h-[40px] w-[84px]">기업회원</button>
              <button
                className="body-md-semibold flex h-[40px] cursor-pointer items-center justify-center gap-3 rounded-[8px] border border-neutral-300 px-4 py-[10px] text-purple-600"
                onClick={() => nav('/login')}
              >
                로그인 / 회원가입
              </button>
            </div>
          </div>
          <div className="tablet:hidden flex items-center gap-5">
            <button className="h-[40px] w-[84px]">기업 회원</button>
            <button className="flex h-[40px] cursor-pointer items-center justify-center px-4 py-[10px] text-base text-[#6F00B6]">
              로그인
            </button>
            <NavSide />
          </div>
        </>
      )}
    </header>
  )
}
