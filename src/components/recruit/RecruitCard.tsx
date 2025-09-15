interface RecruitCardProps {
  companyName: string
  jobTitle: string
  requirements: string
  views: string
  deadline: string
  companyImage: string
}
export default function RecruitCard({companyName, companyImage, deadline, jobTitle, requirements, views}: RecruitCardProps) {
  return (
    <div className="flex h-[150px] w-full items-center justify-between rounded-[24px] border border-neutral-200 transition hover:shadow-md">
      <div className="flex min-w-0 flex-1 gap-x-5 px-4 py-6">
        <div className="h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-[16px] border border-neutral-200">
          <img
            src={companyImage}
            width={50}
            height={50}
            alt={'공고 이미지'}
            className="h-full w-full rounded-[16px] object-cover"
          />
        </div>

        <section className="flex flex-col gap-y-3">
          <p className="text-neutral-500">{companyName}</p>
          <p className="heading-lg-medium">{jobTitle}</p>
          <div className="flex gap-x-3 items-center">
            <p className="text-neutral-500">{requirements}</p>
            <p className="text-neutral-200">|</p>
            <p className="text-neutral-500">{views}</p>
          </div>
        </section>
      </div>

      <section className="h-full">
        <div className="flex h-1/2 items-center justify-center rounded-tr-[24px] border-b border-l border-neutral-200">
          아이콘
        </div>
        <div className="flex h-1/2 items-center justify-center rounded-br-[24px] border-l border-neutral-200 body-lg-medium">
          {deadline}
        </div>
      </section>
    </div>
  )
}
