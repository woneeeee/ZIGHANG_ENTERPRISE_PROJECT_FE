import type { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
  onClose: () => void
}
export default function Modal({children, onClose}: ModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-60 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <section className="rounded-[22px] w-[373px] bg-white pt-[46px] pb-[36px] px-[73px]">
        {children}
      </section>
    </div>
  )
}
