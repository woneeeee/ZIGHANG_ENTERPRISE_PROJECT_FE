import { OnboardingWlbIcon } from '@/assets/svgComponents'

export const ICON_MAP = {
  OnboardingWlbIcon,
} as const

export type IconKey = keyof typeof ICON_MAP

export type CharacterKey = 'WLB' | 'HST' | 'CRTV'

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

export const ONBOARDINGRESULT: Record<string, CharacterCopy> = {
  WLB: {
    key: 'WLB',
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
  // 아직 미정이라서 제가 하나 그냥 만들어뒀습니당
  HST: {
    key: 'HST',
    iconKey: 'OnboardingWlbIcon',
    title: '야망가',
    hashtag: '#기회는 내가 만든다',
    bullets: [
      '빠른 성장과 임팩트를 좇는 [[드라이버형 플레이어]]입니다.',
      '도전적 목표에서 동기부여를 받고, 변화 속에서 스스로 기회를 만들어냅니다.',
    ],
    traits: {
      paragraphs: [
        '당신은 명확한 목표와 속도를 중시하는 [[야망가]]입니다.',
        '성과 기반 보상과 책임 권한이 분명한 조직에서 잠재력을 최대화합니다.',
        '커뮤니케이션은 간결하게, 실행은 빠르게를 선호합니다.',
      ],
    },
  },
} as const
