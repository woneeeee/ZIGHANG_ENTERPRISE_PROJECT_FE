import headerMenu from '@/constants/HeaderMenu'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavMenu = ({ className = '' }: { className?: string }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [active, setActive] = useState<string>(location.pathname)

  useEffect(() => {
    setActive(location.pathname)
  }, [location.pathname])

  const nav = useCallback(
    (url: string) => {
      setActive(url)
      navigate(url)
    },
    [navigate],
  )

  return (
    <nav className={className}>
      <ul className={`flex items-center gap-9`}>
        {headerMenu.map((menu) => {
          const isActive = active === menu.url
          return (
            <li key={menu.title}>
              <div
                onClick={() => nav(menu.url)}
                className={`body-lg-regular block cursor-pointer border-b-2 transition-colors ${
                  isActive ? 'border-[#7A51FF]' : 'border-transparent text-neutral-900'
                }`}
              >
                {menu.title}
              </div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavMenu
