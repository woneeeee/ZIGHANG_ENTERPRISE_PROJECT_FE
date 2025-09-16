import { CheckIcon } from '@/assets/svgComponents'
import type { Profile } from '@/types/profile'

type Props = { profile: Profile }

const sep = (arr: string[]) => (arr?.length ? arr.join(', ') : '-')

const UserInfoBox = ({ profile }: Props) => {
  const u = profile.mypageResponseDto

  const transportMapping: { [key: string]: string } = {
    CAR: '자가용',
    TRANSIT: '대중교통',
  }

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="tablet:w-[702px] laptop:w-[929px] desktop:w-[866px] flex w-[288px] rounded-[10px] border-1 border-neutral-200 px-[16px] py-[12px]">
        <div className="body-sm-bold tablet:body-md-bold tablet:w-[99px] w-[58px] gap-[10px]">
          이름
        </div>
        <div className="body-md-medium text-neutral-700">{profile.name || '-'}</div>
      </div>
      <div className="tablet:w-[702px] laptop:w-[929px] desktop:w-[866px] flex w-[288px] rounded-[10px] border-1 border-neutral-200 px-[16px] py-[12px]">
        <div className="body-sm-bold tablet:body-md-bold tablet:w-[99px] w-[58px] gap-[10px]">
          이메일
        </div>
        <div className="body-md-medium text-neutral-700">{profile.email || '-'}</div>
      </div>
      <div className="tablet:w-[702px] laptop:w-[929px] desktop:w-[866px] flex w-[288px] flex-col gap-[23px] rounded-[10px] border-1 border-neutral-200 px-[16px] py-[12px]">
        <div className="tablet:flex-row flex flex-col">
          <div className="body-md-bold w-[99px] gap-[10px] pr-[60px]">직군</div>
          <div className="body-md-medium text-neutral-700">{u?.jobGroups || '-'}</div>
        </div>
        <div className="tablet:flex-row flex flex-col">
          <div className="body-md-bold w-[99px] gap-[10px] pr-[60px]">직무</div>
          <div className="body-md-medium text-neutral-700">{sep(u?.jobPositions)}</div>
        </div>
        <div className="tablet:flex-row flex flex-col">
          <div className="body-md-bold w-[99px] gap-[10px]">학력 조건</div>
          <div className="body-md-medium text-neutral-700">{u?.education || '-'}</div>
        </div>
        <div className="tablet:flex-row flex flex-col">
          <div className="body-md-bold w-[99px] gap-[10px]">경력 조건</div>
          <div className="body-md-medium text-neutral-700">{u?.workExperience || '-'}</div>
        </div>
        <div className="tablet:flex-row flex flex-col">
          <div className="body-md-bold w-[99px] gap-[10px]">주소</div>
          <div className="body-md-medium text-neutral-700">{u?.address || '-'}</div>
        </div>
        <div className="tablet:flex-row flex flex-col">
          <div className="body-md-bold w-[99px] gap-[10px]">선호 거리</div>
          <div className="body-md-medium text-neutral-700">
            {u?.maxCommuteMinutes || '-'}분 이내
          </div>
        </div>
        <div className="tablet:flex-row flex flex-col">
          <div className="body-md-bold w-[99px] gap-[10px]">교통 수단</div>
          <div className="body-md-medium text-neutral-700">
            {transportMapping[u?.transport] || '-'}
          </div>
        </div>
      </div>
      <div className="tablet:w-[702px] laptop:w-[929px] desktop:w-[866px] flex gap-[7px] rounded-[10px] border-1 border-neutral-200 px-[16px] py-[12px]">
        <label className="flex h-[24px] w-[24px] items-center justify-center p-[4px]">
          <input type="checkbox" className="peer sr-only" />
          <span className="grid h-full w-full place-content-center place-items-center rounded-[4px] border border-neutral-300 transition-colors peer-checked:border-purple-500 peer-checked:bg-purple-500">
            <CheckIcon />
          </span>
        </label>
        <div className="body-md-bold gap-[10px]">정보성 이메일 수신 동의</div>
      </div>
    </div>
  )
}

export default UserInfoBox
