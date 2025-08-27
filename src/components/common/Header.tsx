import { LogoIcon } from '@/assets/svgComponents'
import NavMenu from './NavMenu'

const Header = () => {
  return (
    <header className="tablet:px-8 pc:px-8 mx-auto flex w-full items-center justify-between py-3">
      <div className="flex items-center gap-8">
        <LogoIcon width={0} height={0} className="h-[36px] w-[81px]" />
        <NavMenu />
      </div>
      <div className="tablet:flex hidden items-center gap-5">
        <div className="flex items-center gap-4">
          <button className="h-[40px] w-[84px]">기업 회원</button>
          <button className="body-md-semibold flex h-[40px] cursor-pointer items-center justify-center gap-3 rounded-[8px] border border-neutral-300 px-4 py-[10px] text-purple-600">
            로그인 / 회원가입
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
