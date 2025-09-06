import { useLayoutEffect, useRef, useState } from 'react'
import Button from './Button'
import { ShiningStarIcon } from '@/assets/svgComponents'
import { motion } from 'framer-motion'

function GrowingTextButton({ open }: { open: boolean }) {
  const textRef = useRef<HTMLSpanElement>(null)
  const [textW, setTextW] = useState(0)

  useLayoutEffect(() => {
    if (textRef.current) setTextW(textRef.current.scrollWidth)
  }, [])

  return (
    <Button className="body-2xl-semibold flex items-center rounded-[8px] bg-purple-500 px-[24px] py-[16px] text-white">
      <ShiningStarIcon className="h-[24px] w-[24px] shrink-0" />
      <motion.span
        className="inline-block overflow-hidden whitespace-nowrap"
        initial={false}
        animate={{
          width: open ? textW : 0,
          marginLeft: open ? 8 : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span ref={textRef} className="inline-block">
          회원가입하고 맞춤 공고 열어보기
        </span>
      </motion.span>
    </Button>
  )
}

export default GrowingTextButton
