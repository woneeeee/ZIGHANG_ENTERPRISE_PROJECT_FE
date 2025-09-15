// import JobCard from '@/components/job/JobCard.tsx'
import Header from '@/components/common/Header.tsx'

export default function Category() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header></Header>
      <div className="desktop:w-[1230px] laptop:w-[930px] tablet:w-[700px] flex w-[300px] flex-col items-start">
        <Menu />
        {/* 필터 */}
        <MainFilter />
        <SecondFilter />
        <section className="desktop:grid-cols-2 desktop:mt-[32px] laptop:mt-[16px] grid w-full gap-4">
          {/*<JobCard hasTag={false} />*/}
          {/*<JobCard hasTag={false} />*/}
          {/*<JobCard hasTag={false} />*/}
          {/*<JobCard hasTag={false} />*/}
          {/*<JobCard hasTag={false} />*/}
          {/*<JobCard hasTag={false} />*/}
          {/*<JobCard hasTag={false} />*/}
          {/*<JobCard hasTag={false} />*/}
          {/*<JobCard hasTag={false} />*/}
          {/*<JobCard hasTag={false} />*/}
          {/*<JobCard hasTag={false} />*/}
        </section>
      </div>
    </main>
  )
}

function Menu() {
  return (
    <div className="mobile:border-b mobile:border-neutral-200 tablet:border-b tablet:border-neutral-200 desktop:border-none laptop:border-none w-full">
      <section className="desktop:flex laptop:flex mt-8 hidden gap-x-4">
        <button className="heading-md-medium border-b-[3px] pb-3">전체 공고</button>
        <button className="heading-md-medium pb-3 text-neutral-500">저장한 공고</button>
      </section>
      <section className="desktop:hidden laptop:hidden mt-8 flex gap-x-4 p-2">
        <button className="body-2xl-semibold">전체 공고</button>
        <button className="body-2xl-semibold text-neutral-500">저장한 공고</button>
      </section>
    </div>
  )
}

function MainFilter() {
  return (
    <section className="mt-[24px] flex items-center gap-2 desktop:w-[1150px] laptop:w-[850px] tablet:w-[630px] w-[300px]">
      <section className="flex items-center gap-2 items-center">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EFEAFF] text-[#71717A] active:bg-[#E4DAFF] md:h-11 md:w-11 md:hover:bg-gray-100"
          aria-label="필터 초기화"
        >
          <img
            alt="새로고침 아이콘"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="h-6 w-6"
            src="https://zighang.com/icon/refresh.svg"
          />
        </button>

        <div
          data-orientation="vertical"
          role="none"
          className="bg-line mx-1 h-7 w-[1.5px] shrink-0 bg-neutral-200 md:mx-2"
        />

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EFEAFF] text-[#71717A] active:bg-[#E4DAFF] md:h-11 md:w-11 md:hover:bg-gray-100"
          aria-label="필터 임시 해제"
        >
          <img
            alt="필터 아이콘"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="h-5 w-5"
            src="https://zighang.com/icon/filter.svg"
          />
        </button>
      </section>

      <section className="scrollbar-hide flex gap-x-2 overflow-x-auto items-center">
        <div className="flex flex-shrink-0 flex-row items-center rounded-[8px] border border-neutral-200 desktop:px-4 desktop:py-[10px] laptop:px-4 laptop:py-[10px] px-2 py-[6px] h-fit">
          <div className="desktop:body-lg-regular laptop:body-lg-regular body-sm-regular">플랫폼</div>
          <img
            alt="아래 화살표 아이콘"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="ml-1 h-6 w-6"
            src="https://zighang.com/icon/expand_more.svg"
          />
        </div>
        <div className="flex flex-shrink-0 flex-row items-center rounded-[10px] border border-purple-500 bg-purple-50 desktop:px-4 desktop:py-[10px] laptop:px-4 laptop:py-[10px] px-2 py-[6px] h-fit">
          <div className="desktop:body-lg-regular laptop:body-lg-regular body-sm-regular text-purple-500">IT·개발</div>
          <img
            alt="아래 화살표 아이콘"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="ml-1 h-6 w-6"
            src="https://zighang.com/icon/expand_more.svg"
          />
        </div>
        <div className="flex flex-shrink-0 flex-row items-center rounded-[8px] border border-neutral-200 desktop:px-4 desktop:py-[10px] laptop:px-4 laptop:py-[10px] px-2 py-[6px] h-fit">
          <div className="desktop:body-lg-regular laptop:body-lg-regular body-sm-regular">직무</div>
          <img
            alt="아래 화살표 아이콘"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="ml-1 h-6 w-6"
            src="https://zighang.com/icon/expand_more.svg"
          />
        </div>
        <div className="flex flex-shrink-0 flex-row items-center rounded-[8px] border border-neutral-200 desktop:px-4 desktop:py-[10px] laptop:px-4 laptop:py-[10px] px-2 py-[6px] h-fit">
          <div className="desktop:body-lg-regular laptop:body-lg-regular body-sm-regular">네카라쿠배.. 공고만</div>
        </div>
        <div className="flex flex-shrink-0 flex-row items-center rounded-[10px] border border-purple-500 bg-purple-50 py-[10px] pr-3 pl-4">
          <div className="desktop:body-lg-regular laptop:body-lg-regular body-sm-regular text-purple-500">정규직</div>
          <img
            alt="아래 화살표 아이콘"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="ml-1 h-6 w-6"
            src="https://zighang.com/icon/expand_more.svg"
          />
        </div>
        <div className="flex flex-shrink-0 flex-row items-center rounded-[8px] border border-neutral-200 desktop:px-4 desktop:py-[10px] laptop:px-4 laptop:py-[10px] px-2 py-[6px] h-fit">
          <div className="desktop:body-lg-regular laptop:body-lg-regular body-sm-regular">학력 조건</div>
          <img
            alt="아래 화살표 아이콘"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="ml-1 h-6 w-6"
            src="https://zighang.com/icon/expand_more.svg"
          />
        </div>
        <div className="flex flex-shrink-0 flex-row items-center rounded-[10px] border border-purple-500 bg-purple-50 desktop:px-4 desktop:py-[10px] laptop:px-4 laptop:py-[10px] px-2 py-[6px] h-fit">
          <div className="desktop:body-lg-regular laptop:body-lg-regular body-sm-regular text-purple-500">5~10년차</div>
          <img
            alt="아래 화살표 아이콘"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="ml-1 h-6 w-6"
            src="https://zighang.com/icon/expand_more.svg"
          />
        </div>
        <div className="flex flex-shrink-0 flex-row items-center rounded-[10px] border border-purple-500 bg-purple-50desktop:px-4 desktop:py-[10px] laptop:px-4 laptop:py-[10px] px-2 py-[6px] h-fit">
          <div className="desktop:body-lg-regular laptop:body-lg-regular body-sm-regular text-purple-500">상시 채용 외 2건</div>
          <img
            alt="아래 화살표 아이콘"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="ml-1 h-6 w-6"
            src="https://zighang.com/icon/expand_more.svg"
          />
        </div>
      </section>
    </section>
  )
}

function SecondFilter() {
  return (
    <div className="mt-[24px] flex w-full items-center justify-between text-sm font-semibold text-[#363636] md:flex-row md:pt-0 md:pb-8">
      <p className="whitespace-nowrap desktop:body-2xl-semibold laptop:body-2xl-semibold body-sm-semibold">
        총 <span className="text-purple-500">1609</span>건
      </p>
      <section className="flex items-center gap-3">
        <div className="laptop:flex desktop:flex hidden items-center gap-2">
          <button className="ds-web-summary flex items-center gap-1 rounded-[10px] border border-[#EDEDED] bg-white px-2 py-2 whitespace-nowrap text-black">
            기간 전체
          </button>
          <button className="ds-web-summary flex items-center gap-1 rounded-[10px] border border-transparent px-2 py-2 whitespace-nowrap text-[#7D7D7D] hover:text-black active:text-black">
            오늘
          </button>
          <button className="ds-web-summary flex items-center gap-1 rounded-[10px] border border-transparent px-2 py-2 whitespace-nowrap text-[#7D7D7D] hover:text-black active:text-black">
            7일
          </button>
          <button className="ds-web-summary flex items-center gap-1 rounded-[10px] border border-transparent px-2 py-2 whitespace-nowrap text-[#7D7D7D] hover:text-black active:text-black">
            30일
          </button>
        </div>
        <div className="desktop:hidden laptop:hidden block">
          <button
            className="ds-mobile-listoption flex min-w-max items-center gap-2 rounded-lg py-3 text-sm font-bold whitespace-nowrap text-[#7D7D7D] focus:outline-none active:bg-zinc-100"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r4v:"
            data-state="closed"
          >
            <img
              alt="기간 선택 아이콘"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              className="h-5 w-5"
              src="https://zighang.com/icon/history_2.svg"
            />
            <span>기간 전체</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
            </svg>
          </button>
        </div>
        <button
          type="button"
          id="radix-:r4l:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
          className="ds-web-listoption flex min-w-[132px] items-center gap-2 rounded-lg px-0 py-3 text-[#7D7D7D] focus:outline-none active:bg-zinc-100"
        >
          <img
            alt="정렬 아이콘"
            loading="lazy"
            width="16"
            height="16"
            decoding="async"
            data-nimg="1"
            className="h-5 w-5"
            src="https://zighang.com/icon/sort.svg"
          />
          <span>직행 추천 순</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
          </svg>
        </button>
      </section>
    </div>
  )
}
