import { Background2Icon } from '@/assets/svgComponents'
import Header from '@/components/common/Header'
import Card from '@/components/onboarding/start/Card'

const Start = () => {
  return (
    <main className={`flex w-full flex-col items-center justify-center gap-[16px] pb-[80px]`}>
      <div className="fixed inset-0 z-0">
        <Background2Icon
          className="h-full w-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        />
      </div>
      <Header variant="space" />
      <div className="py-[10px]">
        <Card />
      </div>
    </main>
  )
}
export default Start
