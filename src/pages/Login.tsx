import LoginButton from '@/components/login/LoginButton'

const OnboardingLogin = () => {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-[50px]">
      <div className="tablet:gap-[15px] flex flex-col items-center gap-[8px]">
        <p className="tablet:flex heading-3xl-bold hidden">
          <span className="text-purple-300">내 직군의 채용 공고</span>
          <span className="text-neutral-900">를 매일 받아보세요</span>
        </p>
        <p className="tablet:hidden text-center text-[20px]">
          <span className="text-purple-300">내 직군의 채용 공고</span>
          <span className="text-neutral-900">를</span>
          <br />
          <span className="text-neutral-900">매일 받아보세요</span>
        </p>
        <p className="tablet:hidden body-caption-sm-medium flex text-center text-neutral-600">
          오늘 올라온 채용공고 10개를 <br />
          매일 아침 이메일로 보내드립니다
        </p>
        <p className="tablet:flex body-caption-sm-medium tablet:heading-sm-semibold hidden text-neutral-600">
          오늘 올라온 채용공고 10개를 매일 아침 이메일로 보내드립니다
        </p>
      </div>
      <LoginButton type="white" />
      <div className="body-caption-xs-medium tablet:caption-md-medium flex gap-[10px] text-[12px] text-neutral-600">
        <p className="cursor-pointer">개인정보 처리 방침</p>
        <p>&#124;</p> <p className="cursor-pointer">이용 약관</p>
      </div>
    </main>
  )
}

export default OnboardingLogin
