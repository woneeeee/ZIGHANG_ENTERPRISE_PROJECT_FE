import Header from '@/components/common/Header'
import Card from '../components/profile/Card'
import UserInfo from '../components/profile/UserInfo'
import { PROFILECARD } from '../constants/ProfileCard'
import Footer from '@/components/common/Footer'

const Profile = () => {
  const item = PROFILECARD.find((c) => c.id === 'wlb')!

  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <div className="flex gap-[48px] py-[100px]">
        <Card item={item} />
        <UserInfo />
      </div>
      <Footer />
    </main>
  )
}

export default Profile
