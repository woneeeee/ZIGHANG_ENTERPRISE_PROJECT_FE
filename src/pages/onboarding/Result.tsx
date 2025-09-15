import Card from '@/components/onboarding/Card'
import Footer from '@/components/onboarding/Footer'
import Header from '@/components/common/Header'

const Result = () => {
  return (
    <main
      className={`flex min-h-screen w-full flex-col gap-[16px] pb-[180px] pb-[calc(108px+env(safe-area-inset-bottom))]`}
    >
      <Header variant="space" />
      <Card />
      <Footer />
    </main>
  )
}

export default Result
