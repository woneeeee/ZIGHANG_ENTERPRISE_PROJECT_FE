import {
  category1Constants,
  category2Constants,
  category3Constants,
  category4Constants,
} from '@/constants/SignUp.ts'

export default function Category () {
  const handleCategoryClick = (category) => {
    // 1. 상태 저장

    // 2. Category 섹션으로 부드러운 스크롤
    const categorySection = document.getElementById('job-category-section')
    if (categorySection) {
      categorySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <main
      id="category-section"
      className="flex flex-col pt-[84px] px-4 gap-y-4 tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] min-h-screen">
      <h1
        className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold">어떤
        분야에서 일하고 싶으신가요?</h1>
      <section className="gap-[6px] flex flex-wrap">
        {category1Constants.map((category1) => {
          return (
            <button
              onClick={() => handleCategoryClick(category1)}
              key={category1.kor}
                    className={`flex items-center justify-center h-[36px] py-[10px] px-[12px] caption-sm-medium rounded-[6px] border border-neutral-400 hover:border-purple-300 hover:bg-purple-50 cursor-pointer`}>
              {category1.kor}
            </button>
          )
        })}
      </section>
      <section className="gap-[6px] flex flex-wrap">
        {category2Constants.map((category2) => {
          return (
            <button
              onClick={() => handleCategoryClick(category2)}
              key={category2.kor}
                    className={`flex items-center justify-center h-[36px] py-[10px] px-[12px] caption-sm-medium rounded-[6px] border border-neutral-400 hover:border-purple-300 hover:bg-purple-50 cursor-pointer`}>
              {category2.kor}
            </button>
          )
        })}
      </section>
      <section className="gap-[6px] flex flex-wrap">
        {category3Constants.map((category3) => {
          return (
            <button
              onClick={() => handleCategoryClick(category3)}
              key={category3.kor}
                    className={`flex items-center justify-center h-[36px] py-[10px] px-[12px] caption-sm-medium rounded-[6px] border border-neutral-400 hover:border-purple-300 hover:bg-purple-50 cursor-pointer`}>
              {category3.kor}
            </button>
          )
        })}
      </section>

      <section className="gap-[6px] flex flex-wrap">
        {category4Constants.map((category4) => {
          return (
            <button
              onClick={() => handleCategoryClick(category4)}
              key={category4.kor}
                    className={`flex items-center justify-center h-[36px] py-[10px] px-[12px] caption-sm-medium rounded-[6px] border border-neutral-400 hover:border-purple-300 hover:bg-purple-50 cursor-pointer`}>
              {category4.kor}
            </button>
          )
        })}
      </section>
    </main>
  )
}
