import { motion, useReducedMotion } from 'framer-motion'
import Lottie from 'lottie-react'
import rocketClickTakeoff from '@/assets/lotties/rocket_click_takeoff.json'
import RocketText from './RocketText'
import { useNavigate } from 'react-router-dom'
import { useOnboardingTestStore, useReOnboardingTestStore } from '@/stores/onboardingTestStore'

type Props = {
  size?: number
  amplitude?: number
  period?: number
  className?: string
}

export default function MobileRocketAssistant({
  size = 120,
  amplitude = 6,
  period = 1.6,
  className,
}: Props) {
  const reduce = useReducedMotion()
  const amp = reduce ? 0 : amplitude
  const nav = useNavigate()

  return (
    <motion.div
      animate={{ y: [-amp, amp] }}
      transition={{
        duration: period,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
      onClick={() => {
        localStorage.removeItem('onboarding-test-storage')
        useOnboardingTestStore.getState().reset()
        useReOnboardingTestStore.getState().reset()
        nav('/onboarding/start')
      }}
      className={`flex cursor-pointer flex-col items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Lottie
        animationData={rocketClickTakeoff}
        loop
        autoplay
        className="ml-[50px] h-full w-full"
      />
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
        <RocketText />
      </div>
    </motion.div>
  )
}
