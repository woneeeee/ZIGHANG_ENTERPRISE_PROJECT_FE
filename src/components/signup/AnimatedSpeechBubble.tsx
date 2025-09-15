import { motion, type TargetAndTransition } from 'framer-motion'
import type { ReactNode } from 'react'

type FloatingType = 'gentle' | 'bounce' | 'rotate' | 'scale'
type Position = 'top' | 'bottom'

interface AnimatedSpeechBubbleProps {
  children: ReactNode
  position?: Position
  floatingType?: FloatingType
  bgColor?: string
  textColor?: string
  borderColor?: string
  onClose?: () => void
}

interface TailComponentProps {
  position: Position
  bgColor: string
}

const TailComponent: React.FC<TailComponentProps> = ({ position, bgColor }) => {
  if (position === 'top') {
    return (
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 transform">
        <div
          className={`h-0 w-0 border-r-[10px] border-b-[10px] border-l-[10px] border-transparent ${
            bgColor === 'bg-white' ? 'border-b-white' : bgColor.replace('bg-', 'border-b-')
          }`}
        />
      </div>
    )
  }

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 transform">
      <div
        className={`h-0 w-0 border-t-[10px] border-r-[10px] border-l-[10px] border-transparent ${
          bgColor === 'bg-white' ? 'border-t-white' : bgColor.replace('bg-', 'border-t-')
        }`}
      />
    </div>
  )
}

export const AnimatedSpeechBubble: React.FC<AnimatedSpeechBubbleProps> = ({
  children,
  position = 'bottom',
  floatingType = 'gentle',
  bgColor = 'bg-white',
  textColor = 'text-gray-800',
  borderColor = 'border-gray-200',
  onClose,
}) => {
  const floatingAnimations: Record<FloatingType, TargetAndTransition> = {
    gentle: {
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
    bounce: {
      y: [0, -15, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: 'easeOut' },
    },
    rotate: {
      rotate: [0, 5, -5, 0],
      y: [0, -8, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
    scale: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.9, 1],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  return (
    <motion.div animate={floatingAnimations[floatingType]} className="relative">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative ${bgColor} rounded-[5px] p-[10px] shadow-lg ${borderColor} max-w-sm cursor-pointer w-full whitespace-nowrap`}
        onClick={onClose}
      >
        <div className={textColor}>{children}</div>
        <TailComponent position={position} bgColor={bgColor} />
      </motion.div>
    </motion.div>
  )
}
