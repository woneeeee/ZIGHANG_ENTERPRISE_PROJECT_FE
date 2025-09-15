import { useMemo, useRef, useState } from 'react'
import { motion, type Transition, type TargetAndTransition } from 'framer-motion'
import Lottie, { type LottieRefCurrentProps } from 'lottie-react'

import cloudDefault from '@/assets/lotties/cloud_default.json'
import rocketIdle from '@/assets/lotties/rocket_idle_float.json'
import rocketHover from '@/assets/lotties/rocket_hover_blink.json'
import rocketFlying from '@/assets/lotties/rocket_flying.json'
import RocketText from './RocketText'
import { useNavigate } from 'react-router-dom'

type Phase = 'flying' | 'idle' | 'hover'

type Props = {
  /** 경유할 필터 칩(예: 'IT·개발')의 셀렉터 */
  waypointSelector?: string
  /** 최종 착륙: 왼쪽 여백(px) */
  endLeft?: number
  /** 최종 착륙: 아래 여백(px) */
  endBottom?: number
  /** 페이지 로드시 자동 출발 */
  autoLaunch?: boolean
}

const ROCKET_W = 120
const ROCKET_H = 120
const START_TOP = -80

export default function RocketAssistant({
  waypointSelector,
  endLeft = 100,
  endBottom = 50,
  autoLaunch = true,
}: Props) {
  const [phase, setPhase] = useState<Phase>(autoLaunch ? 'flying' : 'idle')
  const lottieRef = useRef<LottieRefCurrentProps>(null)
  const cloudRef = useRef<LottieRefCurrentProps>(null)

  // 출발: 화면 "가운데(top-center)"
  const startLeft = useMemo(() => {
    if (typeof window === 'undefined') return 0
    return Math.max(0, (window.innerWidth - ROCKET_W) / 2)
  }, [])

  // 경유지(IT·개발 칩) 좌표
  const waypointRect = useMemo(() => {
    if (!waypointSelector) return null
    const el = document.querySelector(waypointSelector) as HTMLElement | null
    return el?.getBoundingClientRect() ?? null
  }, [waypointSelector])

  // 착륙 최종 좌표(상단 기준으로 환산)
  const endTop = useMemo(() => {
    if (typeof window === 'undefined') return 0
    return window.innerHeight - endBottom - ROCKET_H
  }, [endBottom])

  // 현재 보여줄 Lottie 소스
  const currentLottie = useMemo(() => {
    if (phase === 'flying') return rocketFlying
    if (phase === 'hover') return rocketHover
    return rocketIdle
  }, [phase])

  // 키프레임 경로/트랜지션
  let animate: TargetAndTransition
  let transition: Transition

  if (phase === 'flying') {
    const kx: number[] = [0]
    const ky: number[] = [0]

    if (waypointRect) {
      const wpX = waypointRect.left + waypointRect.width / 2 - startLeft
      const wpY = waypointRect.top - START_TOP - 40
      kx.push(wpX)
      ky.push(wpY)
    } else {
      kx.push(0)
      ky.push(140)
    }

    const endX = endLeft - startLeft
    const endY = endTop - START_TOP
    kx.push(endX)
    ky.push(endY)

    animate = {
      x: kx,
      y: ky,
      // 시작은 180°로 뒤집혀서 나오고, 거의 도착할 때 0°로 복귀
      rotate: [180, 180, 0],
      scale: [1, 0.96, 1],
      opacity: [0, 1, 1],
    }
    transition = {
      duration: 1.8,
      ease: 'easeInOut',
      // 회전 복귀를 끝쪽에서만 일어나게 (경유지까지는 180° 유지)
      times: [0, 0.75, 1],
    }
  } else {
    // 착륙/호버 상태는 정방향(0°) 고정
    const endX = endLeft - startLeft
    const endY = endTop - START_TOP
    animate = { x: endX, y: endY, rotate: 0, scale: 1, opacity: 1 }
    transition = { type: 'spring', stiffness: 120, damping: 16 }
  }

  const nav = useNavigate()

  const handleClick = () => {
    nav('/onboarding/start')
  }

  return (
    <motion.button
      className="fixed z-40 cursor-pointer select-none"
      onClick={handleClick}
      style={{ left: startLeft, top: START_TOP, transformOrigin: '50% 50%' }}
      aria-label="rocket assistant"
      animate={animate}
      transition={transition}
      onAnimationComplete={() => {
        if (phase === 'flying') setPhase('idle')
      }}
      onMouseEnter={() => {
        if (phase === 'idle') setPhase('hover')
      }}
      onMouseLeave={() => {
        if (phase === 'hover') setPhase('idle')
      }}
    >
      {/* 말풍선: 착륙 후에만 */}
      {phase !== 'flying' && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <RocketText />
        </div>
      )}

      {/* 구름: 착륙 후에만 */}
      {phase !== 'flying' && (
        <div className="absolute -bottom-25 left-1 z-90 w-[140px] opacity-90">
          <Lottie lottieRef={cloudRef} animationData={cloudDefault} loop autoplay />
        </div>
      )}

      <div className="relative h-[150px] w-[150px]">
        <Lottie
          lottieRef={lottieRef}
          animationData={currentLottie}
          loop={phase !== 'hover' ? true : false}
          autoplay
          className="h-full w-full"
        />
      </div>
    </motion.button>
  )
}
