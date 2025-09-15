import Banner from '@/components/job/Banner.tsx'
import Header from '@/components/common/Header.tsx'
import JobCard from '@/components/job/JobCard.tsx'

export default function Job () {
  return (
    <main >
      <Header />
      <div className="px-5 tablet:px-[41px] laptop:px-[48px] desktop:w-[1230px]">
        <Banner />
        <p className="mt-[10px] pl-2 tablet:body-2xl-semibold caption-sm-medium">총 <span className="text-purple-500">32</span>건
        </p>
        <section className="mt-2 grid tablet:gap-y-5 desktop:gap-y-5 desktop:gap-x-[30px] laptop:gap-y-5 laptop:gap-x-[30px] gap-y-2 laptop:grid-cols-2 desktop:grid-cols-2">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </section>
      </div>
    </main>
  )
}
