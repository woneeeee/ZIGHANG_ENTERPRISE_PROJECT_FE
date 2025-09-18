import Modal from '@/components/common/Modal.tsx'
import type { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

interface SignUpEmptyErrorModalProps {
  setIsSignUpEmptyErrorModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function SignUpEmptyErrorModal({
  setIsSignUpEmptyErrorModalOpen,
}: SignUpEmptyErrorModalProps) {
  const nav = useNavigate()
  return (
    <Modal onClose={() => setIsSignUpEmptyErrorModalOpen(false)}>
      <div className="flex flex-col gap-y-[30px]">
        <div className="flex flex-col items-center gap-y-2">
          <p className="heading-sm-semibold text-center">
            지금 나가면 <br />
            맞춤 공고를 받아볼 수 없어요
          </p>
          <p className="body-lg-medium text-neutral-700">작성을 중단하시겠어요?</p>
        </div>
        <div className="flex gap-x-[25px]">
          <button
            onClick={() => {
              setIsSignUpEmptyErrorModalOpen(false)
              nav('/')
            }}
            className="body-sm-semibold flex h-[44px] w-[90px] items-center justify-center rounded-[6px] bg-neutral-100 text-neutral-800"
          >
            예
          </button>
          <button
            onClick={() => {
              setIsSignUpEmptyErrorModalOpen(false)
            }}
            className="body-sm-semibold flex h-[44px] w-[90px] items-center justify-center rounded-[6px] bg-purple-500 text-white"
          >
            아니요
          </button>
        </div>
      </div>
    </Modal>
  )
}
