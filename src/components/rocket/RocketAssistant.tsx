import { useMemo, useRef, useState, useLayoutEffect, useEffect } from 'react'
import { motion, type Transition, type TargetAndTransition } from 'framer-motion'
import Lottie, { type LottieRefCurrentProps } from 'lottie-react'
import { useNavigate } from 'react-router-dom'

import cloudDefault from '@/assets/lotties/cloud_default.json'
import rocketIdle from '@/assets/lotties/rocket_idle_float.json'
import rocketHover from '@/assets/lotties/rocket_hover_blink.json'
import rocketFlying from '@/assets/lotties/rocket_flying.json'
import RocketText from './RocketText'

type Phase = 'flying' | 'idle' | 'hover'

type Props = {
  waypointSelector?: string
  endLeft?: number
  endBottom?: number
  autoLaunch?: boolean
}

const ROCKET_SIZE = 150
const START_TOP = -50
const WAYPOINT_LIFT = 60
const SAMPLES = 80
const DURATION_SEC = 1

type Pt = { x: number; y: number }

const quadControlThrough = (p0: Pt, p1: Pt, p2: Pt): Pt => ({
  x: 2 * p1.x - (p0.x + p2.x) / 2,
  y: 2 * p1.y - (p0.y + p2.y) / 2,
})

const quadAt = (p0: Pt, c: Pt, p2: Pt, t: number): Pt => {
  const u = 1 - t
  return {
    x: u * u * p0.x + 2 * u * t * c.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * c.y + t * t * p2.y,
  }
}

const sampleQuadraticWithTimes = (p0: Pt, p1: Pt, p2: Pt, steps = 80) => {
  const c = quadControlThrough(p0, p1, p2)
  const pts: Pt[] = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    pts.push(quadAt(p0, c, p2, t))
  }

  const dist: number[] = [0]
  let total = 0
  for (let i = 1; i < pts.length; i++) {
    total += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y)
    dist.push(total)
  }
  const times = dist.map((d) => (total ? d / total : 1))
  const xs = pts.map((p) => p.x)
  const ys = pts.map((p) => p.y)
  return { xs, ys, times }
}

export default function RocketAssistant({
  waypointSelector,
  endLeft = 100,
  endBottom = 50,
  autoLaunch = true,
}: Props) {
  const [phase, setPhase] = useState<Phase>('idle')

  const launchedRef = useRef(false)
  const lottieRef = useRef<LottieRefCurrentProps>(null)
  const cloudRef = useRef<LottieRefCurrentProps>(null)

  const startLeft = useMemo(() => {
    if (typeof window === 'undefined') return 0
    return Math.max(0, (window.innerWidth - ROCKET_SIZE) / 2)
  }, [])

  const endTop = useMemo(() => {
    if (typeof window === 'undefined') return 0
    return window.innerHeight - endBottom - ROCKET_SIZE
  }, [endBottom])

  const [wpRect, setWpRect] = useState<DOMRect | null>(null)
  useLayoutEffect(() => {
    const measure = () => {
      const el = waypointSelector
        ? (document.querySelector(waypointSelector) as HTMLElement | null)
        : null
      setWpRect(el?.getBoundingClientRect() ?? null)
    }
    measure()
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', measure, { passive: true })
    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', measure)
    }
  }, [waypointSelector])

  useEffect(() => {
    if (!autoLaunch) return
    if (launchedRef.current) return
    if (phase !== 'idle') return

    const id = requestAnimationFrame(() => {
      launchedRef.current = true
      setPhase('flying')
    })
    return () => cancelAnimationFrame(id)
  }, [autoLaunch, wpRect])

  const currentLottie = useMemo(() => {
    if (phase === 'flying') return rocketFlying
    if (phase === 'hover') return rocketHover
    return rocketIdle
  }, [phase])

  let animate: TargetAndTransition
  let transition: Transition

  if (phase === 'flying') {
    const start: Pt = { x: 0, y: 0 }

    const mid: Pt = wpRect
      ? {
          x: wpRect.left + wpRect.width / 2 - startLeft,
          y: wpRect.top - START_TOP - WAYPOINT_LIFT,
        }
      : { x: 0, y: 140 }

    const end: Pt = {
      x: endLeft - startLeft,
      y: endTop - START_TOP,
    }

    const ROT_START = 0.75
    const START_HEADING = 230
    const END_HEADING = 0
    const ROT_EASE_POWER = 1.4

    const { xs, ys, times } = sampleQuadraticWithTimes(start, mid, end, SAMPLES)

    const rot: number[] = xs.map((_, i) => {
      const t = times[i]
      if (t <= ROT_START) return START_HEADING
      const kLin = (t - ROT_START) / (1 - ROT_START)
      const k = Math.pow(kLin, ROT_EASE_POWER)
      return START_HEADING + (END_HEADING - START_HEADING) * k
    })

    animate = { x: xs, y: ys, rotate: rot, scale: 1, opacity: [0, 1] }
    transition = {
      duration: DURATION_SEC,
      ease: 'linear',
      times,
    }
  } else {
    const endX = endLeft - startLeft
    const endY = endTop - START_TOP

    animate = { x: endX, y: endY, rotate: 0, scale: 1, opacity: 1 }
    transition = { type: 'spring', stiffness: 120, damping: 16 }
  }

  const nav = useNavigate()
  const handleClick = () => nav('/onboarding/start')

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
      {phase !== 'flying' && (
        <div className="absolute -top-15 left-1/2 -translate-x-1/2">
          <RocketText />
        </div>
      )}
      {phase !== 'flying' && (
        <div className="absolute -bottom-3 left-1 z-5 w-[140px] opacity-90">
          <Lottie lottieRef={cloudRef} animationData={cloudDefault} loop autoplay />
        </div>
      )}

      <div className="relative h-[150px] w-[150px]">
        <Lottie
          lottieRef={lottieRef}
          animationData={currentLottie}
          loop={phase !== 'hover'}
          autoplay
          className="h-full w-full"
        />
      </div>
    </motion.button>
  )
}
