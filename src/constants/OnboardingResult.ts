import {
  OnboardingWlbIcon,
  ResultBabsimChampionIcon,
  ResultCareerRocketIcon,
  ResultCommuterRacerIcon,
  ResultCommutingNinjaIcon,
  ResultFullOptionDreamerIcon,
  ResultInHouseFoodLoverIcon,
  ResultKaltoeMasterIcon,
  ResultLevelUpCraftsmanIcon,
  ResultLunchWorldTourerIcon,
  ResultMealSupportersIcon,
  ResultNoNonsenseChampionIcon,
  ResultRefreshExplorerIcon,
  ResultRocketGrowthrIcon,
  ResultSkillMasterIcon,
  ResultSurvivalMasterIcon,
  ResultTeleportationArtisanIcon,
  ResultTheEnduringWarriorIcon,
  ResultVacationHunterIcon,
  ResultWorkLifeBalanceWarriorIcon,
  ResultOfficeEscaperIcon,
  ResultSeminarTranscriptionIcon,
  ResultMenuAdventurerIcon,
  ResultCommutingGamblerIcon,
  ResultChallengeFanaticIcon,
  ResultWorkationMasterIcon,
  ResultCareerChameleonIcon,
  ResultBabsimInnovatorIcon,
  ResultShuttleJumperIcon,
  ResultFreeWorkerIcon,
  ResultVacationWizardIcon,
  ResultSkillUpManiaIcon,
  ResultLunchPowererIcon,
  ResultTranscendentCommuterIcon,
  ResultPioneerOfGreedIcon,
} from '@/assets/svgComponents'

export const ICON_MAP = {
  OnboardingWlbIcon,
  ResultBabsimChampionIcon,
  ResultCareerRocketIcon,
  ResultCommuterRacerIcon,
  ResultCommutingNinjaIcon,
  ResultFullOptionDreamerIcon,
  ResultInHouseFoodLoverIcon,
  ResultKaltoeMasterIcon,
  ResultLevelUpCraftsmanIcon,
  ResultLunchWorldTourerIcon,
  ResultMealSupportersIcon,
  ResultNoNonsenseChampionIcon,
  ResultRefreshExplorerIcon,
  ResultRocketGrowthrIcon,
  ResultSkillMasterIcon,
  ResultSurvivalMasterIcon,
  ResultTeleportationArtisanIcon,
  ResultTheEnduringWarriorIcon,
  ResultVacationHunterIcon,
  ResultWorkLifeBalanceWarriorIcon,
  ResultOfficeEscaperIcon,
  ResultSeminarTranscriptionIcon,
  ResultMenuAdventurerIcon,
  ResultCommutingGamblerIcon,
  ResultChallengeFanaticIcon,
  ResultWorkationMasterIcon,
  ResultCareerChameleonIcon,
  ResultBabsimInnovatorIcon,
  ResultShuttleJumperIcon,
  ResultFreeWorkerIcon,
  ResultVacationWizardIcon,
  ResultSkillUpManiaIcon,
  ResultLunchPowererIcon,
  ResultTranscendentCommuterIcon,
  ResultPioneerOfGreedIcon,
} as const

export type IconKey = keyof typeof ICON_MAP

export type CharacterKey =
  | '워라밸 신봉자'
  | '커리어 로켓'
  | '밥심 챔피언'
  | '칼퇴 마스터'
  | '풀옵션 드리머'
  | '휴가 헌터'
  | '스킬 마스터'
  | '사내밥 애호가'
  | '출퇴근 닌자'
  | '실속 챔피언'
  | '리프레시 탐험가'
  | '레벨업 장인'
  | '점심 월드투어러'
  | '출퇴근 레이서'
  | '생존 마스터'
  | '워라밸 용사'
  | '로켓 성장러'
  | '식사 서포터즈'
  | '순간이동 장인'
  | '버티는 용사'
  | '오피스 탈출러'
  | '세미나 전사'
  | '메뉴 모험가'
  | '출근 겜블러'
  | '도전광인러'
  | '워케이션 마스터'
  | '커리어 카멜레온'
  | '밥심 혁신러'
  | '셔틀 점핑러'
  | '프리워커'
  | '바캉스 마법사'
  | '스킬업 매니아'
  | '점심 파워러'
  | '출퇴근 초월자'
  | '탐욕의 개척자'

export interface CharacterCopy {
  key: CharacterKey
  iconKey: IconKey
  title: string
  hashtag: string
  bullets: string[]
  traits: {
    paragraphs: string[]
  }
}

export const ONBOARDINGRESULT: Record<CharacterKey, CharacterCopy> = {
  '워라밸 신봉자': {
    key: '워라밸 신봉자',
    iconKey: 'OnboardingWlbIcon',
    title: '워라밸 신봉자',
    hashtag: '#퇴근은 칼, 복지는 풀옵션!',
    bullets: [
      '휴식과 여유를 소중히 여기며, 일과 삶의 균형을 지켜가는 [[안정형 우주비행사]] 입니다.',
      '자신만의 리듬을 유지하며 꾸준히 성과를 만들어내고, 균형 속에서 만족감을 찾습니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 일과 삶의 균형을 무엇보다 중요하게 여기는 [[워라밸 신봉자]]입니다.',
        '회사는 단순히 생계를 위한 공간이 아니라, 내 삶의 리듬을 해치지 않는 선에서 일할 수 있는 무대여야 합니다.',
        '야근 대신 저녁의 취미생활, 회식 대신 나만의 휴식 시간을 챙기는 것이 곧 최고의 성과라고 생각하는 타입이죠.',
        '',
        '[[외국계 기업 문화]]에 특히 잘 맞으며, 출퇴근의 자유와 유연한 근무 제도가 큰 만족 포인트가 됩니다.',
        '프로젝트가 아무리 크더라도, 내 삶을 송두리째 집어삼킨다면 오래 버틸 수 없다고 보는 [[현실적인 시각]]을 가지고 있어요.',
      ],
    },
  },
  '커리어 로켓': {
    key: '커리어 로켓',
    iconKey: 'ResultCareerRocketIcon',
    title: '커리어 로켓',
    hashtag: '#커리어_패스 #안정사다리',
    bullets: [
      '탄탄한 사다리를 타고 꾸준히 성장하는 [[안정형 플레이어]]입니다.',
      '성실함과 체계적 계획으로 커리어를 쌓아갑니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 승진이나 평가 등 구조화된 시스템 속에서 자신의 위치를 정확히 파악하고, 목표 달성을 위해 꾸준히 노력합니다.',
        '성실함과 신뢰를 바탕으로 팀과 회사 안에서 중요한 역할을 맡으며, [[장기적 관점]]에서 안정적 성과를 만들어냅니다.',
        '때로는 속도를 늦춰도 계획대로 [[한 단계씩]] 올라가는 것을 선호하며, 커리어를 단기적 성취가 아닌 자기 성장의 여정으로 봅니다.',
      ],
    },
  },
  '밥심 챔피언': {
    key: '밥심 챔피언',
    iconKey: 'ResultBabsimChampionIcon',
    title: '밥심 챔피언',
    hashtag: '#밥심파워 #든든러',
    bullets: [
      '밥이 곧 힘이라 믿는, 사내 식당의 [[충실한 후원자]]입니다.',
      '안정된 끼니 속에서 업무 에너지를 충전합니다.',
    ],
    traits: {
      paragraphs: [
        '당신은  [["든든히 먹어야 일도 잘한다"]]는 철학을 가진 타입입니다. 동료들과 점심을 함께하며 관계를 쌓고, 협업과 소통에도 ',
        '활력을 불어넣습니다. 식사는 단순한 배 채우기가 아니라, 하루를 계획하고 성과를 내는 중요한 도구라고 믿습니다.',
        '때로는 메뉴 선택에서 작은 즐거움을 느끼며, 사내 문화와 팀워크 속에서 자신만의 루틴을 만들어갑니다.',
      ],
    },
  },
  '칼퇴 마스터': {
    key: '칼퇴 마스터',
    iconKey: 'ResultKaltoeMasterIcon',
    title: '칼퇴 마스터',
    hashtag: '#정시퇴근 #워라벨_마스터',
    bullets: [
      '정해진 시간을 철저히 지키며 [[칼같이 퇴근하는 마스터]]입니다.',
      '시간 관리 능력으로 삶의 균형을 유지합니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 업무와 개인 시간을 철저히 구분하며, 일과 삶의 균형을 가장 중시하는 타입입니다. 업무 시간에는 최선을 다해 집중',
        '하고 성과를 내지만, 퇴근 시간이 되면 철저히 업무에서 벗어나 [[자신만의 시간]]을 즐깁니다. 취미생활, 운동, 휴식 등 자기 관',
        '리에 투자하며, 이를 통해 재충전된 에너지가 다음 업무의 생산성으로 이어집니다. 단순히 퇴근을 지키는 것이 아니라, 자기 ',
        '삶을 존중하고 [[스스로의 루틴]]을 지키는 책임감 있는 방식입니다.',
      ],
    },
  },
  '풀옵션 드리머': {
    key: '풀옵션 드리머',
    iconKey: 'ResultFullOptionDreamerIcon',
    title: '풀옵션 드리머',
    hashtag: '#복지풀세트 #안정성추구',
    bullets: [
      '복지와 안정 속에서 [[꿈을 키워가는 드리머]]입니다.',
      '안정된 울타리 안에서 성장을 추구합니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 안정적 환경 속에서 효율적으로 목표를 달성하는 [[전략형 타입]]입니다. 회사에서 제공하는 복지와 시스템을 적극',
        '활용하며, 안정적인 성취와 만족을 동시에 추구합니다.',
        '불필요한 고민보다는 계획과 자원 활용에 집중하며, [[꾸준히 자신의 커리어와 삶을 관리]]합니다. 안정성과 균형 속에서 장기적 성장과 행복을 모두 놓치지 않습니다. ',
      ],
    },
  },
  '휴가 헌터': {
    key: '휴가 헌터',
    iconKey: 'ResultVacationHunterIcon',
    title: '휴가 헌터',
    hashtag: '#연차 사냥꾼 #휴가탐지기',
    bullets: [
      '연차를 전략적으로 활용해 작은 행복을 쌓아가는 [[헌터]]입니다.',
      '휴가가 곧 삶의 활력소이자 가장 큰 동기부여입니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 달력과 공휴일을 조합해 [[황금연휴]]를 창조해내는 능력자입니다.',
        '회사의 제도를 200% 활용해 삶의 만족도를 높이는 실속형 타입이죠. ',
        '업무에서는 집중력을 발휘하지만 보상으로 주어진 [[휴식]]이 없다면 버티기 힘들다고 느낍니다. ',
        '언제든 여행을 떠날 준비가 되어 있으며, 동료들의 휴가 정보원 역할을 톡톡히 합니다.',
      ],
    },
  },
  '스킬 마스터': {
    key: '스킬 마스터',
    iconKey: 'ResultSkillMasterIcon',
    title: '스킬 마스터',
    hashtag: '#전문성강화 #스킬업',
    bullets: [
      '직무에 대한 전문성을 갈고닦아 회사의 [[핵심 인재]]로 성장합니다. ',
      '기술과 실력으로 자신만의 경쟁력을 확보합니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 특정 분야에서 누구보다 뛰어난 [[전문성]]을 발휘하는 타입입니다.',
        '중견기업의 환경을 발판으로 자신만의 기술력을 다듬으며, 사람보다 실력으로 인정받기를 원합니다.',
        '커리어의 무기는 곧 본인의 전문 역량이며, 이를 기반으로 [[시장 가치]]도 높여갑니다.',
      ],
    },
  },
  '사내밥 애호가': {
    key: '사내밥 애호가',
    iconKey: 'ResultInHouseFoodLoverIcon',
    title: '사내밥 애호가',
    hashtag: '#든든식사 #실속러',
    bullets: [
      '사내식당을 누구보다 애정하는 [[합리적 선택자]]입니다.',
      '맛과 실속을 동시에 추구합니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 [[점심 시간]]을 계획적이고 합리적으로 활용하는 타입입니다.',
        '메뉴를 미리 확인하고, 가성비와 만족도를 동시에 고려하며 하루의 활력을 충전하죠.',
        '점심 시간을 단순한 식사가 아닌 작은 행복과 재충전의 시간으로 여기며, 동료와의 소통에도 자연스럽게 활용합니다. ',
        '안정적인 선택을 통해 업무 몰입도를 높이고, [[실속 있게]] 하루를 관리합니다.',
      ],
    },
  },
  '출퇴근 닌자': {
    key: '출퇴근 닌자',
    iconKey: 'ResultCommutingNinjaIcon',
    title: '출퇴근 닌자',
    hashtag: '#순간이동 #출퇴근고수',
    bullets: [
      '출퇴근길을 기가 막히게 피하며 시간을 아끼는 [[전략가]]입니다.',
      '교통 상황을 완벽히 파악하는 생활 닌자입니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 가장 효율적인 루트를 선택하며 출퇴근 시간을 [[최소화]]하는 타입입니다. ',
        '출퇴근 시간 단축이 곧 자기 삶의 질이라고 믿으며, 이동 시간에도 작은 전략과 계획을 세워 활용합니다. ',
        '남들보다 한 발 앞서 움직이며, [[실속 있게]] 하루를 관리하고 효율적인 생활 패턴을 유지합니다.',
      ],
    },
  },
  '실속 챔피언': {
    key: '실속 챔피언',
    iconKey: 'ResultNoNonsenseChampionIcon',
    title: '실속 챔피언',
    hashtag: '#가성비중시 #합리적선택',
    bullets: [
      '합리적인 선택을 통해 [[안정과 기회]]를 동시에 챙깁니다. ',
      '[[균형 잡힌 안목]]으로 커리어를 이어갑니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 과도한 모험보다는 [[합리적 판단과 계획을 우선]]하며, 안정적 환경 속에서도 성장을 놓치지 않는 타입입니다. ',
        '중견기업의 균형된 시스템을 활용해 기회를 포착하고, 꾸준히 성과를 쌓아갑니다. ',
        '안정과 발전을 동시에 추구하며, [[신중하지만 실속 있는 선택]]으로 장기적 커리어를 관리합니다.',
      ],
    },
  },
  '리프레시 탐험가': {
    key: '리프레시 탐험가',
    iconKey: 'ResultRefreshExplorerIcon',
    title: '리프레시 탐험가',
    hashtag: '#마인드 리셋 #즉흥 여행',
    bullets: [
      '짧고 굵게 떠나는 리프레시로 활력을 찾는 [[모험가]]입니다.',
      '휴식은 곧 새로운 도전을 위한 에너지입니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 [[“짧더라도 확실히 즐긴다”]]라는 신조를 가졌습니다.',
        '긴 휴가보다도 1박 2일 즉흥 여행이나 번개 모임에서 더 큰 만족을 느끼죠. ',
        '회사 생활의 스트레스를 새로운 경험으로 씻어내며 일상 속 활기를 잃지 않습니다. ',
        '늘 같은 일상보다 작은 변화 속에서 다시 달릴 힘을 얻습니다.',
      ],
    },
  },
  '레벨업 장인': {
    key: '레벨업 장인',
    iconKey: 'ResultLevelUpCraftsmanIcon',
    title: '레벨업 장인',
    hashtag: ' #빠른성장 #자기계발',
    bullets: [
      '[[다양한 일]]을 경험하며 빠른 속도로 성장하는 탐험가입니다.',
      '작은 성취 하나하나를 레벨업처럼 즐깁니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 여러 업무를 맡으며 [[빠른 학습 곡선]]을 그리는 타입입니다. ',
        '작은 회사의 특성상 잡다한 일을 해내지만, 그 속에서 성취감을 얻고 자기 역량을 단숨에 키워내죠. ',
        '“레벨업”을 삶의 모토로 삼아 끊임없이 성장하고, 경험치를 쌓으며 커리어에서 [[빠르게 발전]]시킵니다. ',
      ],
    },
  },
  '점심 월드투어러': {
    key: '점심 월드투어러',
    iconKey: 'ResultLunchWorldTourerIcon',
    title: '점심 월드투어러',
    hashtag: '#맛집탐방 #점심여행',
    bullets: [
      '점심시간마다 [[새로운 맛집]]을 탐험하는 [[월드투어러]]입니다.',
      '식사는 곧 [[작은 여행]]이자 즐거움입니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 "밥은 먹고 다니냐"가 아닌 "어디서 먹고 다니냐"를 묻는 타입입니다. 회사 근처의 [[다양한 맛집]]을 찾아다니며, 점심',
        '시간을 미니 여행처럼 즐깁니다. 한 끼 식사를 통해 업무 스트레스를 풀고, 새로운 음식 경험에서 활력과 즐거움을 얻습니',
        '다. [[식도락]]을 통해 일상에 재미와 에너지를 더하며, 동료들과 소소한 공감과 이야기를 나누는 시간을 소중히 여깁니다. ',
      ],
    },
  },
  '출퇴근 레이서': {
    key: '출퇴근 레이서',
    iconKey: 'ResultCommuterRacerIcon',
    title: '출퇴근 레이서',
    hashtag: '#빠른발걸음 #출퇴근 승부사',
    bullets: [
      '출근길을 매일 [[레이스]]처럼 달려가는 에너지러입니다.',
      '늦을 땐 더 강해지는 [[순발력]]을 발휘합니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 매일 아슬아슬한 출근 시간을 긴장감과 스릴로 즐기며, 지각 위기를 멋진 [[역전극]]으로 바꿔내는 타입입니다.',
        '출근길 자체를 하루의 첫 승부로 여기며, 긴박한 상황에서도 에너지를 발휘하고 집중력을 극대화합니다. ',
        '빠르게 움직이는 능력과 [[순간 판단력]]이 뛰어나며, 이런 특성을 업무 시작 전부터 자연스럽게 활용합니다.',
      ],
    },
  },
  '생존 마스터': {
    key: '생존 마스터',
    iconKey: 'ResultSurvivalMasterIcon',
    title: '생존 마스터',
    hashtag: '#적응의달인 #생존력최강',
    bullets: [
      '어떤 환경에서도 살아남는 [[생존의 달인]]입니다. ',
      '위기 속에서도 기민하게 적응합니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 중소기업의 한정된 자원과 불확실한 환경 속에서도 꿋꿋이 버티는 타입입니다. ',
        '부족한 부분은 스스로 메우며 [[올라운더]]로서 다양한 역량을 키워갑니다.',
        '예상치 못한 위기 상황에서도 기민하게 적응하며, 상황에 맞는 전략과 판단으로 꾸준히 성과를 만들어냅니다.',
      ],
    },
  },
  '워라밸 용사': {
    key: '워라밸 용사',
    iconKey: 'ResultWorkLifeBalanceWarriorIcon',
    title: '워라밸 용사',
    hashtag: '#주말챙김 #힐링충전',
    bullets: [
      '빠른 성장 속에서도 [[균형]]을 찾으며 번아웃을 막는 전사입니다.',
      '[[열정]]과 [[자기관리]]를 동시에 챙기는 인재죠.',
    ],
    traits: {
      paragraphs: [
        '당신은 빠른 성장보다 자기 페이스와 삶의 균형을 중요하게 여기며, 번아웃을 예방하기 위해 취미와 휴식을 적극적으로 챙',
        '기는 타입입니다. 몰입이 필요한 순간에는 집중력을 발휘하지만, 필요할 땐 과감히 속도를 늦추어 자신을 보호합니다.',
        '자기 관리와 성장, 두 가지를 동시에 달성하며 안정적이고 [[지속 가능한 커리어]]를 만들어 갑니다.',
      ],
    },
  },
  '로켓 성장러': {
    key: '로켓 성장러',
    iconKey: 'ResultRocketGrowthrIcon',
    title: '로켓 성장러',
    hashtag: '#커리어발사 #업무스피드업',
    bullets: [
      '다양한 일을 경험하며 빠른 속도로 [[성장하는 스타일]]입니다.',
      '작은 성취 하나하나를 레벨업처럼 즐깁니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 작은 회사에서 다양한 업무를 동시에 수행하며, [[빠르게 성장]]할 수 있는 경험을 쌓아가는 타입입니다.',
        '잡다한 일도 성취감을 느끼는 원동력이 되며, 각 경험에서 얻은 노하우를 곧바로 자기 역량으로 전환합니다.',
        '[[“레벨업”]]을 삶의 모토로 삼아 끊임없이 도전하며, 경험치를 쌓아 커리어를 빠르게 발전시킵니다.',
      ],
    },
  },
  '식사 서포터즈': {
    key: '식사 서포터즈',
    iconKey: 'ResultMealSupportersIcon',
    title: '식사 서포터즈',
    hashtag: '#팀밥문화 #밥친구',
    bullets: [
      '팀원들과 [[함께 식사]]하며 관계를 다지는 [[서포터즈]]입니다.',
      '[[밥자리]]는 곧 [[팀워크]]의 시작점입니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 밥을 매개로 동료들과 관계를 깊게 만드는 타입입니다. 유니콘의 치열한 환경에서 함께 먹는 점심은 동료애를 다지',
        '는 시간이라 생각하죠. 메뉴보다 중요한 건 사람이며, 함께 [[밥을 먹는 문화]]를 통해 소속감과 유대감을 강화합니다.',
      ],
    },
  },
  '순간이동 장인': {
    key: '순간이동 장인',
    iconKey: 'ResultTeleportationArtisanIcon',
    title: '순간이동 장인',
    hashtag: '#유연근무 #디지털노마드',
    bullets: [
      '근무지와 시간을 유연하게 활용하는 [[순간이동러]]입니다.',
      '언제 어디서든 일할 수 있는 자유를 만끽합니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 [[유니콘]]의 유연근무제와 원격 업무 문화를 적극 활용하는 타입입니다. ',
        '집, 카페, 공유 오피스 등 장소에 구애받지 않고 업무를 소화하며, 유연한 근무 환경을 최대한 활용합니다. ',
        '출퇴근 시간을 최소화하고 이동에서 오는 스트레스를 줄이며, 업무 몰입도를 높입니다. ',
        '자신의 라이프스타일과 업무 효율을 조화롭게 유지하며, [[원격 근무]]의 장점을 극대화합니다. ',
      ],
    },
  },
  '버티는 용사': {
    key: '버티는 용사',
    iconKey: 'ResultTheEnduringWarriorIcon',
    title: '버티는 용사',
    hashtag: '#버티기_정신 #도전',
    bullets: [
      '[[빠른 성장]]과 [[혼란]] 속에서도 끝까지 버티는 용사입니다. ',
      '지치더라도 끝까지 살아남는 [[근성]]을 보여줍니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 빠른 성장과 가혹한 환경 속에서도 [[자기 속도]]를 유지하며 꾸준히 업무를 수행하는 타입입니다.',
        '번아웃과 혼란 속에서도 포기하지 않고 버티며, 작은 성취가 모여 큰 결과로 이어진다고 믿습니다.',
        '균형과 자기 관리를 중요시하며, 장기적으로 [[지속 가능한 성장]]을 추구합니다. ',
      ],
    },
  },
  '오피스 탈출러': {
    key: '오피스 탈출러',
    iconKey: 'ResultOfficeEscaperIcon',
    title: '오피스 탈출러',
    hashtag: '#야근 탈출 #자유영혼',
    bullets: [
      '사무실보단 세상 밖에서 더 많은 영감을 얻는 [[자유 영혼]]입니다.',
      '회사와 삶의 경계를 분명히 나누는 타입입니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 [["일은 일, 인생은 인생"]]이라는 기준이 명확합니다.',
        '스타트업의 자유로운 근무 환경을 십분 활용하며, 시간과 장소에 구애받지 않고 자기만의 방식으로 업무를 처리합니다.',
        '필요하면 언제든 바깥으로 나가 새로운 경험과 아이디어를 얻고, 이를 업무에 창의적으로 적용합니다.',
        '[[자유]] 속에서 몰입과 효율을 동시에 추구하며, 일과 삶의 균형을 자신만의 방식으로 유지합니다.',
      ],
    },
  },
  '세미나 전사': {
    key: '세미나 전사',
    iconKey: 'ResultSeminarTranscriptionIcon',
    title: '세미나 전사',
    hashtag: '#네트워킹러 #세미나러버',
    bullets: [
      '외부 세미나와 스터디를 통해 끊임없이 [[배우는 전사]]입니다. ',
      '[[배움]]이 곧 [[무기]]이며, 스타트업 성장의 [[원동력]]입니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 “내가 배우는 만큼 회사도 성장한다”는 신념을 가진 타입입니다. 새로운 지식과 트렌드를 탐구하며, 이를 동료와 공',
        '유해 조직 내에서 긍정적 영향을 미칩니다. 자기 계발을 멈추지 않고, 학습과 성장의 곡선을 꾸준히 유지하며 [[커리어 경쟁력]]',
        '을 높입니다. 다양한 프로젝트와 경험을 통해 스킬을 확장하며, 동료들에게 영감을 주고 조직 성과에도 기여합니다.',
      ],
    },
  },
  '메뉴 모험가': {
    key: '메뉴 모험가',
    iconKey: 'ResultMenuAdventurerIcon',
    title: '메뉴 모험가',
    hashtag: '#도전정신 #점심개척자',
    bullets: [
      '새로운 메뉴에 주저 없이 [[도전하는 모험가]]입니다. ',
      '점심시간은 곧 작은 실험의 장입니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 다양한 식당과 신메뉴를 탐험하며 [[점심 시간]]을 즐기는 타입입니다. ',
        '실패와 시행착오도 즐기는 경험으로 받아들이고, 이를 통해 일상에 신선한 변화를 불어넣습니다. ',
        '[[스타트업]]의 유연함과 창의성을 점심에도 적용하며, 작은 모험에서 얻는 재미와 활력으로 하루를 더욱 풍성하게 채웁니다.  ',
      ],
    },
  },
  '출근 겜블러': {
    key: '출근 겜블러',
    iconKey: 'ResultCommutingGamblerIcon',
    title: '출근 겜블러',
    hashtag: '#스타트업라이프 #지옥철은Pass',
    bullets: [
      '[[출근길]]마다 [[변수]]를 맞닥뜨리며 매일 도박 같은 하루를 시작하는 [[겜블러]]입니다. ',
      '[[예측 불가능]]하지만 그 속에서 [[재미]]를 찾습니다',
    ],
    traits: {
      paragraphs: [
        '당신은 교통, 일정, 회의까지 모든 것이 변수인 환경에서 살아남는 타입입니다.',
        '[[출근길의 혼란]]조차 게임처럼 즐기며, 긴박한 상황에서도 침착함과 유연함을 유지합니다. ',
        '불확실성을 두려워하지 않고 도전으로 받아들이며, 예상치 못한 상황에서도 [[전략적]]으로 행동하고 [[성취]]를 만들어냅니다.',
      ],
    },
  },
  도전광인러: {
    key: '도전광인러',
    iconKey: 'ResultChallengeFanaticIcon',
    title: '도전광인러',
    hashtag: '#도전정신 #열정폭발',
    bullets: [
      '매일이 새로운 도전이라 여기는 [[광인 같은 열정러]]입니다.',
      '위험도 마다하지 않고 기회를 향해 달려갑니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 불확실성을 기회로 여기는 타입입니다. ',
        '불확실한 상황에서도 주저하지 않고 새로운 기회를 찾아 도전하며, 실패조차 학습의 재료로 활용합니다. ',
        '무모해 보이는 시도도 있지만, 그 열정은 팀과 조직에 활력과 동기를 부여합니다.',
        '[[끊임없는 탐험]]과 실험으로 자신의 성장뿐만 아니라 주변에도 [[긍정적인 변화]]를 만들어냅니다. ',
      ],
    },
  },
  '워케이션 마스터': {
    key: '워케이션 마스터',
    iconKey: 'ResultWorkationMasterIcon',
    title: '워케이션 마스터',
    hashtag: '#출장은_싫어 #휴식모드ON',
    bullets: [
      '워케이션을 활용해 일과 휴식을 자유롭게 오가는 [[마스터]]입니다.',
      '출장이나 야근보다 [[자기 페이스]]를 지키는 것을 최우선으로 합니다',
    ],
    traits: {
      paragraphs: [
        '당신은 [[효율과 자유]]를 동시에 챙기는 타입입니다. ',
        '업무가 필요할 때는 집중력을 발휘하고, 그렇지 않은 시간에는 자신만의 힐링과 재충전 시간을 철저히 지킵니다.',
        '이러한 균형 덕분에 번아웃 없이 꾸준히 성과를 내며, 업무 효율과 개인 삶 모두를 충족시킵니다.',
        '자신만의 속도로 일과 삶을 조율하며, 주변 동료들에게도 건강한 [[워라밸 문화]]를 보여줍니다.',
      ],
    },
  },
  '커리어 카멜레온': {
    key: '커리어 카멜레온',
    iconKey: 'ResultCareerChameleonIcon',
    title: '커리어 카멜레온',
    hashtag: '#커리어마스터 #어디서든적응완벽',
    bullets: [
      '[[외국계]]에서 다양한 커리어를 자유자재로 바꿔가며 성장하는 [[카멜레온]]입니다.',
      '빠르게 변화하는 환경에서도 [[자신만의 길]]을 만들어 갑니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 [[글로벌 무대]]에서도 끊임없이 변화하며 기회를 잡는 타입입니다.',
        '[[변화무쌍한 환경]] 속에서도 유연하게 적응하며, 새로운 기회를 놓치지 않습니다.',
        '다양한 경험과 프로젝트를 흡수하여 자신만의 강점으로 만들고, 변화하는 상황에서도 꾸준히 성장해 나갑니다. ',
        '회사와 역할이 달라져도 당황하지 않고 항상 새로운 환경에서 [[성과]]를 만들어내며, 글로벌 무대에서도 두각을 나타냅니다.',
      ],
    },
  },
  '밥심 혁신러': {
    key: '밥심 혁신러',
    iconKey: 'ResultBabsimInnovatorIcon',
    title: '밥심 혁신러',
    hashtag: '#점심파워 #점심이곧혁신',
    bullets: [
      '점심시간을 전략적으로 활용하며, 외국계 기업의 식대 혜택을 적극 즐기는 [[혁신러]]입니다. ',
      '[[맛과 효율]]을 모두 잡으며, 점심에서 얻는 활력으로 업무를 이어갑니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 회사 근처 다양한 맛집과 메뉴를 탐험하며 [[점심시간]]을 즐겁고 효율적으로 활용하는 타입입니다.',
        '식대를 단순한 비용이 아닌 에너지를 충전하는 기회로 삼으며, 업무 몰입도를 높입니다.',
        '점심 한 끼에서 얻은 활력을 바탕으로 업무에 집중하며, 동료들에게도 [[긍정적인 에너지]]를 전파합니다.',
      ],
    },
  },
  '셔틀 점핑러': {
    key: '셔틀 점핑러',
    iconKey: 'ResultShuttleJumperIcon',
    title: '셔틀 점핑러',
    hashtag: '#교통스트레스제로 #시간을버는자',
    bullets: [
      '[[출퇴근 시간]]을 [[점프]]하듯 단축하며 효율을 극대화하는 점핑러입니다. ',
      '교통 스트레스 없이 하루를 활기차게 시작합니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 시간을 가장 소중한 자원으로 생각하는 타입입니다.',
        '출퇴근 시간을 단순 이동이 아닌 [[자기계발]]과 [[재충전]]의 시간으로 활용하며, 하루를 보다 효율적으로 구성합니다.',
        '시간을 아껴 활용함으로써 업무 집중력과 생산성을 높이고, 개인적인 성장과 휴식을 동시에 챙깁니다.',
        '작은 시간 관리의 습관이 쌓여 일상과 커리어 모두에서 [[의미 있는 성과]]를 만들어냅니다.',
      ],
    },
  },
  프리워커: {
    key: '프리워커',
    iconKey: 'ResultFreeWorkerIcon',
    title: '프리워커',
    hashtag: '#일도삶도내맘대로 #자유로운워라밸인생',
    bullets: [
      '[[외국계 풀복지]]를 활용해 일과 삶을 자유롭게 누리는 [[워라밸러]]입니다.',
      '회사 밖에서도 자기만의 [[리듬]]을 지켜갑니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 [[복지]]를 단순한 혜택이 아니라 [[삶의 질 향상]]으로 바꾸는 타입입니다.',
        '유연한 근무 환경과 다양한 복지 혜택을 적극 활용해 자기 삶과 업무를 최적화합니다.',
        '복지는 단순한 혜택이 아니라 일과 삶의 균형을 높이는 수단으로 삼으며, 이를 통해 [[지속적인 자기 성장]]을 추구합니다.',
        '자유로운 환경 속에서 집중력과 몰입을 극대화하고, 스스로 설정한 목표와 성과를 꾸준히 만들어냅니다. ',
      ],
    },
  },
  '바캉스 마법사': {
    key: '바캉스 마법사',
    iconKey: 'ResultVacationWizardIcon',
    title: '바캉스 마법사',
    hashtag: '#쉼이곧성장 #휴가매직',
    bullets: [
      '[[휴가 제도]]를 자유자재로 활용하는 마법 같은 사람입니다. ',
      '쉴 땐 확실히 쉬고, 일할 땐 몰입합니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 휴식과 성과의 균형을 누구보다 잘 아는 타입입니다.',
        '[[휴가]]는 단순한 쉼이 아니라, [[새로운 에너지]]를 얻고 [[생산성]]을 높이는 중요한 전략으로 삼습니다.',
        '쉬는 순간에도 자기 계발과 행복을 잊지 않고, [[균형 잡힌 삶]] 속에서 업무 몰입도와 성과를 동시에 높입니다.',
        '휴가를 지혜롭게 활용해 자신만의 성장과 만족을 극대화하며, 주변 동료들에게도 [[건강한 워라밸]]의 모범을 보여줍니다.',
      ],
    },
  },
  '스킬업 매니아': {
    key: '스킬업 매니아',
    iconKey: 'ResultSkillUpManiaIcon',
    title: '스킬업 매니아',
    hashtag: '#계속배우는자  #레벨업장인',
    bullets: [
      '다양한 기업의 기회를 활용해 스킬을 무한히 [[성장시키는 매니아]]입니다.',
      '성장은 곧 즐거움이고, 배움은 곧 동력입니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 항상 [[새로운 도전]]에 스스로를 던지는 타입입니다. ',
        '새로운 업무와 프로젝트에 도전하며, 배움의 과정에서 느끼는 성취와 성장을 즐깁니다. ',
        '자신의 역량을 지속적으로 업그레이드하며, 회사와 역할이 바뀌어도 [[빠르게 적응]]하고 성과를 만들어냅니다. ',
        '끊임없는 자기계발을 통해 누구도 쉽게 따라올 수 없는 [[커리어 스펙트럼]]을 완성합니다. ',
      ],
    },
  },
  '점심 파워러': {
    key: '점심 파워러',
    iconKey: 'ResultLunchPowererIcon',
    title: '점심 파워러',
    hashtag: '#칼퇴대신칼밥 #밥심파워',
    bullets: [
      '[[든든한 식대]]를 무기로 낮과 밤을 모두 지켜내는 히어로입니다.',
      '에너지 넘치게 업무를 이어가는 [[히어로 타입]]입니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 항상 충분히 식사하며 에너지를 유지하고, 이를 바탕으로 업무에 [[최적의 몰입]]을 발휘하는 타입입니다.',
        '식대와 다양한 점심 메뉴를 전략적으로 활용하며, 배고픔에 방해받지 않고 집중력을 최대화합니다.',
        '언제나 활기차고 든든한 팀의 [[에너지 담당자]]입니다. ',
      ],
    },
  },
  '출퇴근 초월자': {
    key: '출퇴근 초월자',
    iconKey: 'ResultTranscendentCommuterIcon',
    title: '출퇴근 초월자',
    hashtag: '#교통마스터 #시간은내편',
    bullets: [
      '[[출퇴근 제도]]를 능숙하게 활용해 시간을 지배하는 초월자입니다.',
      '교통의 스트레스를 [[초월]]한 여유형 타입입니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 시간을 자유자재로 다루는 타입입니다. ',
        '[[출퇴근 시간]]을 단순 이동이 아닌, [[자기계발과 재충전]]의 시간으로 활용하며 하루를 최적화합니다.',
        '[[이동 시간을 절약]]해 업무 집중력을 높이는 동시에, 개인적인 휴식과 자기 성장을 병행합니다.',
        '작은 시간 관리 습관이 쌓여 일상과 커리어 모두에서 의미 있는 성과를 만들어냅니다.',
      ],
    },
  },
  '탐욕의 개척자': {
    key: '탐욕의 개척자',
    iconKey: 'ResultPioneerOfGreedIcon',
    title: '탐욕의 개척자',
    hashtag: '#욕심도스펙 #모든혜택은내것',
    bullets: [
      '모든 [[복지를 개척]]하고 누리며 한계를 넘어서는 개척자입니다.',
      '[[탐욕]]이 곧 [[성장 동력]]이 됩니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 복지의 최대치를 경험하며 스스로를 [[업그레이드]]하는 타입입니다.',
        '회사의 다양한 복지 혜택을 적극 활용하며 자기계발과 삶의 질을 동시에 높입니다.',
        '욕심과 전략을 겸비해, 주어진 자원을 최대한 활용하며 [[성취와 만족도]]를 극대화합니다.',
        '복지와 성과를 모두 챙기며, 주변 동료들에게도 효율적이고 스마트한 업무 스타일의 모범을 보여주는 최종 보스형입니다.',
      ],
    },
  },
} as const

export function toCharacterKey(name?: string | null): CharacterKey {
  const key = (name ?? '').trim() as CharacterKey
  return key && key in ONBOARDINGRESULT ? key : '워라밸 신봉자'
}
