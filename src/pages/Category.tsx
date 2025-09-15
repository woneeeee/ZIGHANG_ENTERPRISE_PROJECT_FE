import JobCard from '@/components/job/JobCard.tsx'
import Header from '@/components/common/Header.tsx'
import RocketAssistant from '@/components/rocket/RocketAssistant'

export default function Category() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header></Header>
      <div className="flex flex-col items-start">
        <section className="mt-8 flex gap-x-4">
          <button className="heading-md-medium border-b-[2px] pb-4">전체 공고</button>
          <button className="heading-md-medium pb-4 text-neutral-500">저장한 공고</button>
        </section>
        {/* 필터 */}
        <section className="h-[60px] w-full"></section>
        <p className="body-2xl-semibold mt-[24px]">
          총 <span className="text-purple-500">1609</span>건
        </p>
        <section className="mt-[32px] grid grid-cols-2 gap-4">
          <JobCard hasTag={false} />
          <JobCard hasTag={false} />
          <JobCard hasTag={false} />
          <JobCard hasTag={false} />
          <JobCard hasTag={false} />
          <JobCard hasTag={false} />
          <JobCard hasTag={false} />
          <JobCard hasTag={false} />
          <JobCard hasTag={false} />
          <JobCard hasTag={false} />
          <JobCard hasTag={false} />
        </section>
      </div>
      <RocketAssistant
        waypointSelector="#filter-itdev"
        endLeft={50}
        endBottom={100}
        autoLaunch={true}
      />
    </main>
  )
}
