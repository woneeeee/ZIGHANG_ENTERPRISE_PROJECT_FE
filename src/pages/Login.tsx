import LoginButton from '@/components/login/LoginButton'

const OnboardingLogin = () => {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-[50px]">
      <div className="flex flex-col items-center gap-[15px]">
        <p className="heading-3xl-bold">
          <span className="text-purple-300">내 직군의 채용 공고</span>
          <span className="text-neutral-900">를 매일 받아보세요</span>
        </p>
        <p className="heading-sm-semibold text-neutral-600">
          오늘 올라온 채용공고 10개를 매일 아침 이메일로 보내드립니다
        </p>
      </div>
      <LoginButton type="white" />
      <div className="caption-md-medium flex gap-[10px] text-neutral-600">
        <p className="cursor-pointer">개인정보 처리 방침</p>
        <p>&#124;</p> <p className="cursor-pointer">이용 약관</p>
      </div>
    </main>
  )
}

export default OnboardingLogin
