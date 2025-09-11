import Header from '@/components/common/Header'
import Card from '@/components/profile/Card'
import UserInfo from '@/components/profile/UserInfo'
import Footer from '@/components/common/Footer'
import { useEffect, useState } from 'react'
import { getProfileInfo } from '@/apis/users/getProfileInfo'
import { useProfileStore } from '@/stores/profileStore'
import { PROFILECARD_BY_TITLE } from '@/utils/profileCards'

const normalize = (s?: string | null) => (s ?? '').trim().toLowerCase().replace(/\s+/g, '')

const Profile = () => {
  const [loading, setLoading] = useState(true)
  const { profile, setProfile } = useProfileStore()

  useEffect(() => {
    ;(async () => {
      try {
        const me = await getProfileInfo()
        setProfile(me)
      } catch (error) {
        console.error('프로필 정보를 불러오지 못했어요.', error)
      } finally {
        setLoading(false)
      }
    })()
  }, [setProfile])

  if (loading) return <div>불러오는 중…</div>
  if (!profile) return <div>유저 정보를 찾을 수 없어요</div>

  const item = PROFILECARD_BY_TITLE.get(normalize(profile.characterName))

  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <div className="desktop:flex-row desktop:items-start tablet:gap-[60px] laptop:gap-[60px] desktop:gap-[48px] tablet:pt-[60px] laptop:pt-[60px] desktop:py-[90px] flex flex-col items-center gap-[30px] pt-[24px] pb-[82px]">
        {item ? (
          <Card item={item} />
        ) : (
          <div className="text-neutral-400">매칭되는 카드가 없어요</div>
        )}
        <UserInfo profile={profile} />
      </div>
      <Footer />
    </main>
  )
}

export default Profile
