import JobBoxConstant from '@/constants/JobBox'
import { useNavigate } from 'react-router-dom'

const JobBox = () => {
  const nav = useNavigate()

  return (
    <div className="relative flex w-full flex-col items-center gap-4 px-0 py-0">
      <div className="mx-auto grid w-full max-w-[900px] grid-cols-3 grid-cols-5 gap-[1px] overflow-hidden rounded-[20px]">
        {JobBoxConstant.map((category) => (
          <div
            key={category.name}
            onClick={() => nav(category.url)}
            className="relative flex h-[68px] w-full cursor-pointer items-center gap-2 bg-[#f7f7f7] px-[16px] py-0"
          >
            <img
              src={category.icon}
              alt={category.name}
              width={20}
              height={20}
              className="h-[20px] w-[20px] flex-shrink-0"
            />
            <p className="w-fit text-[16px] leading-normal font-normal whitespace-nowrap text-black">
              <span className="tracking-[0.05px]">{category.name}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobBox
