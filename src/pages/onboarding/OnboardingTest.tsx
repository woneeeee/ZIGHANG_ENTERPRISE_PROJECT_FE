import { useState } from 'react'
import CompanySizeCard from '@/components/onboarding/test/CompanySizeCard.tsx'
import PartnerStyleCard from '@/components/onboarding/test/PartnerStyleCard.tsx'
import AvoidSituationCard from '@/components/onboarding/test/AvoidSituationCard.tsx'
import MotivationCard from '@/components/onboarding/test/MotivationCard.tsx'
import AfterWorkChoiceCard from '@/components/onboarding/test/AfterWorkChoiceCard.tsx'
import RewardChoiceCard from '@/components/onboarding/test/RewardChoiceCard.tsx'

export default function OnboardingTest() {
  const [step, setStep] = useState<number>(1)
  return (
    <main className="px-[16px]">
      {/*<Header />*/}
      {step === 1 ? (<CompanySizeCard setStep={setStep} step={step} />) : null}
      {step === 2 ? (<PartnerStyleCard setStep={setStep} step={step} />) : null}
      {step === 3 ? (<AvoidSituationCard setStep={setStep} step={step} />) : null}
      {step === 4 ? (<MotivationCard setStep={setStep} step={step} />) : null}
      {step === 5 ? (<AfterWorkChoiceCard setStep={setStep} step={step} />) : null}
      {step === 6 ? (<RewardChoiceCard setStep={setStep} step={step} />) : null}
    </main>
  )
}
