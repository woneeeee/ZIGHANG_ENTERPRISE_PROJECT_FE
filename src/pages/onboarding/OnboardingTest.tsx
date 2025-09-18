import { useEffect, useState } from 'react'
import CompanySizeCard from '@/components/onboarding/test/CompanySizeCard.tsx'
import PartnerStyleCard from '@/components/onboarding/test/PartnerStyleCard.tsx'
import AvoidSituationCard from '@/components/onboarding/test/AvoidSituationCard.tsx'
import MotivationCard from '@/components/onboarding/test/MotivationCard.tsx'
import AfterWorkChoiceCard from '@/components/onboarding/test/AfterWorkChoiceCard.tsx'
import RewardChoiceCard from '@/components/onboarding/test/RewardChoiceCard.tsx'
import { useOnboardingTestStore, useReOnboardingTestStore } from '@/stores/onboardingTestStore.ts'
import {
  postOnboardingCharacter,
  repostOnboardingCharacter,
} from '@/apis/onboarding-test/postOnboardingCharacter.ts'
import Header from '@/components/common/Header.tsx'
import { useNavigate } from 'react-router-dom'
import ResultCard from '@/components/onboarding/test/ResultCard'
import RocketLottie from '@/assets/lotties/rocket_click_takeoff.json'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'

export default function OnboardingTest() {
  const [step, setStep] = useState<number>(1)
  const [showRocket, setShowRocket] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate('/onboarding/result')
  }

  const setState = useOnboardingTestStore((state) => state.setState)
  const setStateReOnboarding = useReOnboardingTestStore((state) => state.setState)

  const onboardingTestData = useOnboardingTestStore((state) => state.onboardingTestData)
  const onboardingCharacterData = useOnboardingTestStore((state) => state.onboardingCharacterData)
  const reonboardingCharacterData = useReOnboardingTestStore(
    (state) => state.reonboardingCharacterData,
  )

  useEffect(() => {
    console.log('onboardingCharacterData', onboardingCharacterData)
    console.log('reonboardingCharacterData', reonboardingCharacterData)
  }, [onboardingCharacterData, reonboardingCharacterData])

  useEffect(() => {
    if (onboardingTestData && onboardingTestData.q6 !== undefined) {
      console.log('onboardingTestData: ', onboardingTestData)
      console.log('onboardingTestData.q6: ', onboardingTestData.q6)

      const hasOnboarded = localStorage.getItem('accessToken')

      if (hasOnboarded) {
        repostOnboardingCharacter(onboardingTestData).then((result) => {
          setShowRocket(true)

          if (result.isSuccess) {
            console.log('result1', result)
            setStateReOnboarding({
              ...reonboardingCharacterData,
              reonboardingCharacterData: result.result,
            })
            localStorage.removeItem('onboarding_done')
            setTimeout(() => {
              navigate('/onboarding/result', { state: { from: 'retest' } })
            }, 3000)
          }
        })
      } else {
        postOnboardingCharacter(onboardingTestData).then((result) => {
          setShowRocket(true)

          if (result.isSuccess) {
            console.log('result2', result)
            setState({
              onboardingCharacterData: result.result,
            })
            setTimeout(() => {
              handleNavigation()
            }, 3000)
          }
        })
      }
    }
  }, [onboardingTestData, navigate, setState, setStateReOnboarding])

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundImage: "url('/onboarding/test-background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="flex flex-col">
        <Header variant={'space'} />
        <div className="flex flex-col items-center justify-center desktop:mt-[80px] laptop:mt-[80px] mt-1 px-[16px]">
          {step === 1 ? <CompanySizeCard setStep={setStep} step={step} /> : null}
          {step === 2 ? <PartnerStyleCard setStep={setStep} step={step} /> : null}
          {step === 3 ? <AvoidSituationCard setStep={setStep} step={step} /> : null}
          {step === 4 ? <MotivationCard setStep={setStep} step={step} /> : null}
          {step === 5 ? <AfterWorkChoiceCard setStep={setStep} step={step} /> : null}
          {step === 6 ? <RewardChoiceCard setStep={setStep} step={step} /> : null}
          {step === 7 ? <ResultCard /> : null}
        </div>
      </div>
      {showRocket && (
        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: '-100vh' }}
          transition={{
            duration: 2,
            ease: 'easeOut',
            delay: 0,
          }}
          className="fixed bottom-0 left-1/2 z-50 ml-[155px] flex h-[1500px] w-[1000px] -translate-x-1/2 transform flex-col items-center justify-center"
        >
          <Lottie
            animationData={RocketLottie}
            loop={false}
            autoplay
            className="flex h-full w-full items-center justify-center"
          />
        </motion.div>
      )}
    </main>
  )
}
