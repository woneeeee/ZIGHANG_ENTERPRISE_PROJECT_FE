import Header from '@/components/common/Header'
import UserInfo from '@/components/profile/UserInfo'
import Footer from '@/components/common/Footer'
import { useEffect, useState } from 'react'
import { getProfileInfo } from '@/apis/users/getProfileInfo'
import { useProfileStore } from '@/stores/profileStore'
import { PROFILECARD_BY_TITLE } from '@/utils/profileCards'
import { StartPlanetIcon } from '@/assets/svgComponents'
import Button from '@/components/onboarding/Button'
import { useNavigate } from 'react-router-dom'
import ProfileCard from '@/components/profile/Card'

const normalize = (s?: string | null) => (s ?? '').trim().toLowerCase().replace(/\s+/g, '')

const Profile = () => {
  const [loading, setLoading] = useState(true)
  const { profile, setProfile } = useProfileStore()
  const nav = useNavigate()

  useEffect(() => {
    ;(async () => {
      try {
        const me = await getProfileInfo()
        setProfile(me)
        console.log('me', me)
      } catch (error) {
        console.error('프로필 정보를 불러오지 못했어요.', error)
      } finally {
        setLoading(false)
      }
    })()
  }, [setProfile])

  if (loading) return <div>불러오는 중…</div>
  if (!profile) return <div>유저 정보를 찾을 수 없어요</div>

  const isUntested = profile?.characterId == null
  const item =
    PROFILECARD_BY_TITLE.get(normalize(profile.characterName)) ??
    [...PROFILECARD_BY_TITLE.values()][0]

  const handleTest = () => {
    nav('/onboarding/start')
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <div className="desktop:flex-row desktop:items-start tablet:gap-[60px] laptop:gap-[60px] desktop:gap-[48px] tablet:pt-[60px] laptop:pt-[60px] desktop:py-[90px] flex flex-col items-center gap-[30px] pt-[24px] pb-[82px]">
        {isUntested ? (
          <div className="bg-profile-card tablet:w-[298px] tablet:h-[530px] tablet:gap-[44px] tablet:rounded-[14px] tablet:px-[22px] tablet:py-[63px] flex h-[400px] w-[224px] flex-col items-center justify-center gap-[34px] rounded-[10px] px-[16px] py-[48px] text-center">
            <StartPlanetIcon className="tablet:w-[247px] tablet:h-[222px] h-[166px] w-[185px]" />
            <div className="tablet:gap-[30px] flex flex-col items-center justify-center gap-[22px]">
              <p className="tablet:heading-sm-bold body-sm-semibold text-white">
                커리어 성향 테스트하고
                <br />
                맞춤 공고 받기
              </p>
              <Button
                onClick={handleTest}
                className="tablet:body-sm-semibold caption-md-semibold tablet:rounded-[8px] tablet:px-[16px] tablet:py-[12px] rounded-[5px] bg-purple-400 px-[11px] py-[9px] text-white"
              >
                테스트 하러 가기
              </Button>
            </div>
          </div>
        ) : (
          <ProfileCard item={item} />
        )}
        <UserInfo profile={profile} />
      </div>
      <Footer />
    </main>
  )
}

export default Profile
