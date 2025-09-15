import { useLayoutEffect, useRef, useState } from 'react'
import Button from './Button'
import { ShiningStarIcon } from '@/assets/svgComponents'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useNavigate } from 'react-router-dom'

function GrowingTextButton({ open }: { open: boolean }) {
  const nav = useNavigate()

  const isTablet = useMediaQuery('(min-width: 766px)')

  const tabletRef = useRef<HTMLSpanElement>(null)
  const mobileRef = useRef<HTMLSpanElement>(null)
  const [textW, setTextW] = useState(0)

  useLayoutEffect(() => {
    const el = isTablet ? tabletRef.current : mobileRef.current
    if (!el) return
    setTextW(el.scrollWidth)
  }, [isTablet])

  const handleClick = () => {
    nav('/onboarding/login')
  }

  return (
    <Button
      onClick={handleClick}
      className="tablet:px-[32px] tablet:py-[16px] tablet:w-[327px] tablet:h-[60px] tablet:bg-purple-500 flex h-[56px] w-[160px] cursor-pointer items-center rounded-[8px] bg-neutral-400 px-[24px] py-[12px] text-white"
    >
      <ShiningStarIcon className="tablet:flex hidden h-[24px] w-[24px] shrink-0" />
      <motion.span
        className="body-2xl-semibold tablet:inline-block hidden overflow-hidden whitespace-nowrap"
        initial={false}
        animate={{
          width: open ? textW : 0,
          marginLeft: open ? 8 : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span ref={tabletRef} className="inline-block">
          회원가입하고 맞춤 공고 열어보기
        </span>
      </motion.span>
      <motion.span
        className="caption-md-semibold tablet:hidden inline-block overflow-hidden whitespace-nowrap"
        initial={false}
        animate={{
          width: open ? textW : 0,
          marginLeft: open ? 8 : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span ref={mobileRef} className="inline-block">
          회원가입하고 <br />
          맞춤 공고 열어보기
        </span>
      </motion.span>
    </Button>
  )
}

export default GrowingTextButton
