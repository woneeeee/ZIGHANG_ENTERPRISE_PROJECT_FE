const RocketText = () => {
  return (
    <>
      <div className="mobile:hidden tablet:flex body-sm-semibold flex h-[56px] w-[160px] items-center justify-center rounded-[4px] border border-purple-400 bg-white text-black">
        커리어 성향 테스트하고 <br />
        맞춤 공고 보기
      </div>
      <div className="tablet:hidden caption-sm2-medium flex h-[44px] w-[114px] items-center justify-center rounded-[4px] bg-purple-400 px-[12px] py-[6px] text-white">
        커리어 성향 테스트 <br />
        하고 맞춤 공고 보기
      </div>
    </>
  )
}

export default RocketText
