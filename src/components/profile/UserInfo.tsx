import type { Profile } from '@/types/profile'
import Button from './Button'
import UserInfoBox from './UserInfoBox'
import logout from '@/apis/logout'
import { useNavigate } from 'react-router-dom'

type UserProps = { profile: Profile }

const UserInfo = ({ profile }: UserProps) => {
  const nav = useNavigate()

  const handleClick = async () => {
    try {
      const isLoggedOut = await logout()
      if (isLoggedOut) {
        nav('/', { replace: true })
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleEditSignUp = () => {
    nav('/sign-up')
  }

  return (
    <div className="flex flex-col gap-[14px] text-start">
      <span className="heading-lg-bold">유저 정보</span>
      <UserInfoBox profile={profile} />
      <div className="flex w-full justify-end gap-[20px]">
        <Button bg="#F3F4F6" color="black" onClick={handleClick}>
          회원탈퇴
        </Button>
        <Button bg="#7A51FF" color="white" onClick={handleEditSignUp}>
          수정하기
        </Button>
      </div>
    </div>
  )
}

export default UserInfo
