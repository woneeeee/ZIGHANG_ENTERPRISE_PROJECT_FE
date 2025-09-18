export default function Banner() {
  return (
    <div
      className="overflow-hidden relative flex flex-col desktop:gap-y-3 laptop:gap-y-3 tablet:gap-y-3 gap-y-[5px] rounded-[10px] bg-[#121040] desktop:h-[140px] laptop:h-[140px] tablet:h-[140px] desktop:px-[40px] desktop:py-[30px] laptop:px-[40px] laptop:py-[30px] tablet:px-[40px] tablet:py-[30px] px-4 py-[14px] text-white w-full"
      style={{
        backgroundImage: "url('/job/banner-background-image.svg'), url('/job/banner-background-image.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h1
        className="desktop: heading-lg-semibold laptop:heading-lg-semibold tablet:heading-lg-semibold body-md-semibold">
        맞춤 공고
      </h1>
      <p className="desktop:body-sm-medium laptop:body-sm-medium tablet:body-sm-medium caption-xs-medium text-white">
        나에게 딱 맞는 맞춤 공고만 모아두었어요
        <br />※ 출퇴근 시간은 오전 9시 도착 기준으로 계산했어요
      </p>

      <img src={'/job/banner-image.svg'} alt='배너이미지'
           className="w-[297px] h-[236px] absolute desktop:block laptop:block tablet:block desktop:right-10 desktop:-top-12 laptop:right-10 laptop:-top-12 tablet:right-5 tablet:-top-12 hidden z-20"></img>
    </div>
  )
}
