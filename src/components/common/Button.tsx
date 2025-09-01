import type { ReactNode } from 'react'

const styles = {
  primary: {
    filled: 'bg-purple-500 text-white hover:bg-purple-700',
    neutral: 'bg-neutral-100 text-purple-600 hover:bg-neutral-200 hover:text-purple-700',
    transparent: 'text-purple-500 hover:bg-ui-transparent-dark hover:text-purple-700',
    inversed: 'bg-white text-purple-500 hover:bg-ui-transparent-dark hover:text-purple-700',
    outlined: '',
    translucent: '',
  },
  secondary: {
    filled: 'bg-neutral-700 text-white hover:bg-neutral-800',
    neutral: 'bg-neutral-100 text-black hover:bg-neutral-200',
    transparent: 'text-neutral-800 hover:bg-ui-transparent-dark',
    inversed: 'bg-white text-neutral-900 hover:bg-neutral-100',
    outlined: 'border border-neutral-400 text-neutral-900 hover:bg-neutral-100',
    translucent: 'bg-button-transparent-bg text-neutral-800 hover:bg-button-translucent-hovered-bg',
  },
  disabled: {
    filled: 'bg-neutral-200 text-button-primary-disabled-text',
    neutral: 'bg-neutral-200 text-button-primary-disabled-text',
    transparent: 'bg-neutral-200 text-button-primary-disabled-text',
    inversed: 'bg-neutral-200 text-button-primary-disabled-text',
    outlined: 'bg-neutral-200 text-button-primary-disabled-text',
    translucent: 'bg-neutral-200 text-button-primary-disabled-text',
  },
}

const sizes = {
  lg: 'rounded-[8px] h-[48px] px-4',
  md: 'rounded-[6px] h-[44px] px-3',
  sm: 'rounded-[6px] h-[36px] px-4',
  'round-sm': 'rounded-full h-[32px] px-4',
}

export interface ButtonProps {
  style?: 'filled' | 'neutral' | 'transparent' | 'inversed' | 'outlined' | 'translucent'
  type?: 'primary' | 'secondary' | 'disabled'
  size?: 'lg' | 'md' | 'sm' | 'round-sm'
  children: ReactNode
  customClassName?: string
  onClick: () => void
  buttonType?: 'button' | 'submit'
  disabled?: boolean
  rightIcon?: ReactNode
  leftIcon?: ReactNode
}

export default function Button({
  style = 'filled',
  size = 'lg',
  type = 'primary',
  children,
  customClassName,
  onClick,
  buttonType = 'button',
  disabled = false,
  rightIcon,
  leftIcon,
}: ButtonProps) {
  const base = `${type === 'disabled' ? 'cursor-not-allowed' : 'cursor-pointer'} flex gap-x-2 items-center justify-center rounded`
  const styleClass = styles[type][style]
  const sizeClass = sizes[size]
  const className = [base, sizeClass, styleClass].join(' ')

  return (
    <button
      disabled={disabled}
      type={buttonType}
      onClick={onClick}
      className={`${className} ${customClassName}`}
    >
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </button>
  )
}
