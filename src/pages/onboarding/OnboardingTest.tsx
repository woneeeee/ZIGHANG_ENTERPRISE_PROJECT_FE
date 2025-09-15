import { useEffect, useState } from 'react'
import CompanySizeCard from '@/components/onboarding/test/CompanySizeCard.tsx'
import PartnerStyleCard from '@/components/onboarding/test/PartnerStyleCard.tsx'
import AvoidSituationCard from '@/components/onboarding/test/AvoidSituationCard.tsx'
import MotivationCard from '@/components/onboarding/test/MotivationCard.tsx'
import AfterWorkChoiceCard from '@/components/onboarding/test/AfterWorkChoiceCard.tsx'
import RewardChoiceCard from '@/components/onboarding/test/RewardChoiceCard.tsx'
import { useOnboardingTestStore } from '@/stores/onboardingTestStore.ts'
import { postOnboardingCharacter } from '@/apis/onboarding-test/postOnboardingCharacter.ts'
import Header from '@/components/common/Header.tsx'
import { useNavigate } from 'react-router-dom'

export default function OnboardingTest() {
  const [step, setStep] = useState<number>(1)
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate('/onboarding/result')
  }

  const onboardingTestData = useOnboardingTestStore((state) => state.onboardingTestData)
  const onboardingCharacterData = useOnboardingTestStore((state) => state.onboardingCharacterData)

  const setState = useOnboardingTestStore((state) => state.setState)

  useEffect(() => {
    console.log('onboardingCharacterData', onboardingCharacterData)
  }, [onboardingCharacterData])

  useEffect(() => {
    if (onboardingTestData && onboardingTestData.q6 !== undefined) {
      postOnboardingCharacter(onboardingTestData).then((result) => {
        if (result.isSuccess) {
          setState({
            ...onboardingCharacterData,
            onboardingCharacterData: result.result,
          })
          handleNavigation()
        }
      })
    }
  }, [onboardingTestData])

  return (
    <main className="flex flex-col items-center justify-center">
      <Header variant={'space'} />
      <div className="px-[16px] desktop:mt-[176px] laptop:mt-[176px] mt-1">
        {/*<Header />*/}
        {step === 1 ? (<CompanySizeCard setStep={setStep} step={step} />) : null}
        {step === 2 ? (<PartnerStyleCard setStep={setStep} step={step} />) : null}
        {step === 3 ? (<AvoidSituationCard setStep={setStep} step={step} />) : null}
        {step === 4 ? (<MotivationCard setStep={setStep} step={step} />) : null}
        {step === 5 ? (<AfterWorkChoiceCard setStep={setStep} step={step} />) : null}
        {step === 6 ? (<RewardChoiceCard setStep={setStep} step={step} />) : null}
      </div>
    </main>

  )
}
