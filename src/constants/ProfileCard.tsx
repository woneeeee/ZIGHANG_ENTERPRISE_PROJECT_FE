import type { ReactNode } from 'react'
import {
  BabsimChampionIcon,
  BabsimInnovatorIcon,
  CareerChameleonIcon,
  CareerRocketIcon,
  ChallengeFanaticIcon,
  CommuterRacerIcon,
  CommutingGamblerIcon,
  CommutingNinjaIcon,
  FreeWorkerIcon,
  FullOptionDreamerIcon,
  InHouseFoodLoverIcon,
  KaltoeMasterIcon,
  LevelUpCraftsmanIcon,
  LunchPowererIcon,
  LunchWorldTourerIcon,
  MealSupportersIcon,
  MenuAdventurerIcon,
  OfficeEscaperIcon,
  PioneerOfGreedIcon,
  PracticalChampionIcon,
  RefreshExplorerIcon,
  RocketGrowthrIcon,
  SeminarTranscriptionIcon,
  ShuttleJumperIcon,
  SkillMasterIcon,
  SkillupManiaIcon,
  SurvivalMasterIcon,
  TeleportationArtisanIcon,
  TheEnduringWarriorIcon,
  TranscendentCommuterIcon,
  VacationHunterIcon,
  VacationWizardIcon,
  WlbIcon,
  WorkationMasterIcon,
  WorkLifeBalanceWarriorIcon,
} from '@/assets/svgComponents'

export type ProfileCardItem = {
  id: number
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  subtitle: string
  description: ReactNode
}

export const PROFILECARD: ProfileCardItem[] = [
  {
    id: 1,
    icon: WlbIcon,
    title: '워라벨 신봉자',
    subtitle: '#퇴근은 칼, 복지는 풀옵션!',
    description: (
      <>
        휴식과 여유를 소중히 여기며 <br />
        일과 삶의 균형을 지켜가는 안정형 <br />
        우주비행사 입니다. <br />
      </>
    ),
  },
  {
    id: 2,
    icon: CareerRocketIcon,
    title: '커리어 로켓',
    subtitle: '#커리어 패스 #안정사다리',
    description: (
      <>
        탄탄한 사다리를 타고 <br /> 꾸준히 성장하는 안정형 <br />
        플레이어입니다.
      </>
    ),
  },
  {
    id: 3,
    icon: BabsimChampionIcon,
    title: '밥심 챔피언',
    subtitle: '#밥심파워 #든든러',
    description: (
      <>
        밥이 곧 힘이라 믿고, 사내 식당의 <br />
        충실한 후원자입니다.
      </>
    ),
  },
  {
    id: 4,
    icon: KaltoeMasterIcon,
    title: '칼퇴 마스터',
    subtitle: '#정시퇴근 #워라벨 마스터',
    description: (
      <>
        정해진 시간을 철저히 지키며
        <br /> 칼같이 퇴근하는 마스터입니다.
      </>
    ),
  },
  {
    id: 5,
    icon: FullOptionDreamerIcon,
    title: '풀옵션 드리머',
    subtitle: '#복지풀세트 #안정성추구',
    description: (
      <>
        복지와 안정 속에서
        <br /> 꿈을 키워가는 드리머입니다.
      </>
    ),
  },
  {
    id: 6,
    icon: VacationHunterIcon,
    title: '휴가 헌터',
    subtitle: '#연차 사냥꾼 # 휴가탐지기',
    description: (
      <>
        연차를 전략적으로 활용해
        <br /> 작은 행복을 쌓아가는 헌터입니다.
      </>
    ),
  },
  {
    id: 7,
    icon: SkillMasterIcon,
    title: '스킬 마스터',
    subtitle: '#전문성강화  #스킬업',
    description: (
      <>
        직무에 대한 전문성을 갈고닦아 <br />
        회사의 핵심 인재로 성장합니다.
      </>
    ),
  },
  {
    id: 8,
    icon: InHouseFoodLoverIcon,
    title: '사내밥 애호가',
    subtitle: '#든든식사 #실속러',
    description: (
      <>
        사내식당을 누구보다 애정하는
        <br /> 합리적 선택자입니다.
      </>
    ),
  },
  {
    id: 9,
    icon: CommutingNinjaIcon,
    title: '출퇴근 닌자',
    subtitle: '#순간이동 #출퇴근_고수',
    description: (
      <>
        붐비는 출퇴근길을 기가 막히게 <br />
        피하며 시간을 아끼는 전략가입니다.
      </>
    ),
  },
  {
    id: 10,
    icon: PracticalChampionIcon,
    title: '실속 챔피언',
    subtitle: '#가성비_중시 #합리적_선택',
    description: (
      <>
        합리적인 선택을 통해 <br />
        안정과 기회를 동시에 챙깁니다.
      </>
    ),
  },
  {
    id: 11,
    icon: RefreshExplorerIcon,
    title: '리프레시 탐험가',
    subtitle: '#마인드 리셋 #즉흥 여행',
    description: (
      <>
        짧고 굵게 떠나는 리프레시로
        <br /> 활력을 찾는 모험가입니다.
      </>
    ),
  },
  {
    id: 12,
    icon: LevelUpCraftsmanIcon,
    title: '레벨업 장인',
    subtitle: '#빠른성장 #자기계발',
    description: (
      <>
        다양한 일을 경험하며 <br />
        빠른 속도로 성장하는 스타일입니다.
      </>
    ),
  },
  {
    id: 13,
    icon: LunchWorldTourerIcon,
    title: '점심 월드투어러',
    subtitle: '#맛집탐방 #점심여행',
    description: (
      <>
        점심시간마다 새로운 맛집을 <br />
        탐험하는 월드투어러입니다.
      </>
    ),
  },
  {
    id: 14,
    icon: CommuterRacerIcon,
    title: '출퇴근 레이서',
    subtitle: '#빠른발걸음 #출퇴근 승부사',
    description: (
      <>
        출근길을 매일 레이스처럼 <br />
        달려가는 에너지러입니다.
      </>
    ),
  },
  {
    id: 15,
    icon: SurvivalMasterIcon,
    title: '생존 마스터',
    subtitle: '#적응의달인 #생존력최강',
    description: (
      <>
        어떤 환경에서도 살아남는 <br />
        생존의 달인입니다.
      </>
    ),
  },
  {
    id: 16,
    icon: WorkLifeBalanceWarriorIcon,
    title: '워라밸 용사',
    subtitle: '#주말챙김 #힐링충전',
    description: (
      <>
        빠른 성장 속에서도 균형을 찾으며 <br />
        번아웃을 막는 전사입니다.
      </>
    ),
  },
  {
    id: 17,
    icon: RocketGrowthrIcon,
    title: '로켓 성장러',
    subtitle: '#커리어_발사 #업무_스피드업',
    description: (
      <>
        다양한 일을 경험하며 빠른 속도로 <br />
        성장하는 스타일입니다.
      </>
    ),
  },
  {
    id: 18,
    icon: MealSupportersIcon,
    title: '식사 서포터즈',
    subtitle: '#팀밥문화 #밥친구',
    description: (
      <>
        팀원들과 함께 식사하며 <br />
        관계를 다지는 서포터즈입니다.
      </>
    ),
  },
  {
    id: 19,
    icon: TeleportationArtisanIcon,
    title: '순간 이동 장인',
    subtitle: '#유연근무 #디지털노마드',
    description: (
      <>
        근무지와 시간을 <br />
        유연하게 활용하는 순간이동러입니다.
      </>
    ),
  },
  {
    id: 20,
    icon: TheEnduringWarriorIcon,
    title: '버티는 용사',
    subtitle: '#버티기_정신 #도전',
    description: (
      <>
        빠른 성장과 혼란 속에서도 끝까지 <br />
        버티는 용사입니다.
      </>
    ),
  },
  {
    id: 21,
    icon: OfficeEscaperIcon,
    title: '오피스 탈출러',
    subtitle: '#야근 탈출 #자유영혼',
    description: (
      <>
        사무실보단 세상 밖에서 더 많은 <br />
        영감을 얻는 자유 영혼입니다.
      </>
    ),
  },
  {
    id: 22,
    icon: SeminarTranscriptionIcon,
    title: '세미나 전사',
    subtitle: '#네트워킹러 #세미나러버',
    description: (
      <>
        외부 세미나와 스터디를 통해
        <br /> 끊임없이 배우는 전사입니다.
      </>
    ),
  },
  {
    id: 23,
    icon: MenuAdventurerIcon,
    title: '메뉴 모험가',
    subtitle: '#도전정신 #점심개척자',
    description: (
      <>
        새로운 메뉴에 주저 없이 <br />
        도전하는 모험가입니다.
      </>
    ),
  },
  {
    id: 24,
    icon: CommutingGamblerIcon,
    title: '출근 겜블러',
    subtitle: '#스타트업라이프 #지옥철은Pass',
    description: (
      <>
        출근길마다 변수를 맞닥뜨리며 <br />
        매일 도박 같은 하루를 시작하는 <br />
        겜블러입니다.
      </>
    ),
  },
  {
    id: 25,
    icon: ChallengeFanaticIcon,
    title: '도전광인러',
    subtitle: '#도전정신 #열정폭발',
    description: (
      <>
        매일이 새로운 도전이라 여기는 <br />
        광인 같은 열정러입니다.
      </>
    ),
  },
  {
    id: 26,
    icon: WorkationMasterIcon,
    title: '워케이션 마스터',
    subtitle: '#출장은싫어 #휴식모드ON',
    description: (
      <>
        워케이션을 활용해 <br />
        일과 휴식을 자유롭게 오가는 <br />
        마스터입니다.
      </>
    ),
  },
  {
    id: 27,
    icon: CareerChameleonIcon,
    title: '커리어 카멜레온',
    subtitle: '#커리어마스터  #어디서든적응완벽',
    description: (
      <>
        외국계에서 다양한 커리어를
        <br /> 자유자재로 바꿔가며 <br />
        성장하는 카멜레온입니다.
      </>
    ),
  },
  {
    id: 28,
    icon: BabsimInnovatorIcon,
    title: '밥심 혁신러',
    subtitle: '#점심파워  #점심이곧혁신',
    description: (
      <>
        점심시간을 전략적으로 활용하며, <br />
        외국계 기업의 식대 혜택을 <br />
        적극 즐기는 혁신러입니다.
      </>
    ),
  },
  {
    id: 29,
    icon: ShuttleJumperIcon,
    title: '셔틀 점핑러',
    subtitle: '#교통스트레스제로 #시간을버는자',
    description: (
      <>
        출퇴근 시간을 점프하듯 <br />
        단축하며 효율을 극대화하는 <br />
        점핑러입니다.
      </>
    ),
  },
  {
    id: 30,
    icon: FreeWorkerIcon,
    title: '프리워커',
    subtitle: '#일도삶도내맘대로 #자유로운워라밸인생',
    description: (
      <>
        외국계 풀복지를 활용해
        <br /> 일과 삶을 자유롭게 누리는 <br />
        워라밸러입니다.
      </>
    ),
  },
  {
    id: 31,
    icon: VacationWizardIcon,
    title: '바캉스 마법사',
    subtitle: '#쉼이곧성장 #휴가매직',
    description: (
      <>
        휴가 제도를 자유자재로 활용하는 <br />
        마법 같은 사람입니다.
      </>
    ),
  },
  {
    id: 32,
    icon: SkillupManiaIcon,
    title: '스킬업 매니아',
    subtitle: '#계속_배우는_자 #레벨업_장인',
    description: (
      <>
        다양한 기업의 기회를 활용해 스킬을 <br /> 무한히 성장시키는 매니아입니다.
      </>
    ),
  },
  {
    id: 33,
    icon: LunchPowererIcon,
    title: '점심 파워러',
    subtitle: '#칼퇴대신칼밥 #밥심파워',
    description: (
      <>
        든든한 식대를 무기로
        <br /> 낮과 밤을 모두 지켜내는 <br />
        히어로입니다.
      </>
    ),
  },
  {
    id: 34,
    icon: TranscendentCommuterIcon,
    title: '출퇴근 초월자',
    subtitle: '#교통마스터 #시간은내편',
    description: (
      <>
        출퇴근 제도를 능숙하게 활용해
        <br /> 시간을 지배하는 초월자입니다.
      </>
    ),
  },
  {
    id: 35,
    icon: PioneerOfGreedIcon,
    title: '탐욕의 개척자',
    subtitle: '#욕심도스펙 #모든혜택은내것',
    description: (
      <>
        모든 복지를 개척하고 누리며
        <br /> 한계를 넘어서는 개척자입니다.
      </>
    ),
  },
]
