import Header from '@/components/common/Header'
import Card from '@/components/onboarding/start/Card'

const Start = () => {
  return (
    <main className={`flex w-full flex-col items-center justify-center gap-[16px] pb-[80px]`}>
      <Header variant="space" />
      <div className="py-[30px]">
        <Card />
      </div>
    </main>
  )
}
export default Start
