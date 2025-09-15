import type { ReactNode } from 'react'
import {
  CjOliveYoungLogoIcon,
  CjOvlieYoungIcon,
  DaangnIcon,
  DaangnLogoIcon,
  HyundaiIcon,
  HyundaiLogoIcon,
  KakaobankIcon,
  KakaobankLogoIcon,
  MicrosoftIcon,
  MicrosoftLogoIcon,
  NaverCloudIcon,
  NaverCloudLogoIcon,
} from '@/assets/svgComponents'

export type RecommendJobItem = {
  id: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>
  enterprise: string
  description: ReactNode
}

export const RECOMMENDJOBLIST: RecommendJobItem[] = [
  {
    id: 'hyundai',
    icon: HyundaiIcon,
    logo: HyundaiLogoIcon,
    enterprise: '현대자동차',
    description: '통합 보안 Mobility Security Engineer 채용',
  },
  {
    id: 'microsoft',
    icon: MicrosoftIcon,
    logo: MicrosoftLogoIcon,
    enterprise: 'Microsoft',
    description: 'Al Applications Solution Engineer',
  },
  {
    id: 'kakaobank',
    icon: KakaobankIcon,
    logo: KakaobankLogoIcon,
    enterprise: '카카오뱅크',
    description: '자산 운용 업무 개발자 Core Banking 채용',
  },
  {
    id: 'daangn',
    icon: DaangnIcon,
    logo: DaangnLogoIcon,
    enterprise: '당근',
    description: 'Software Engineer Intern, Backend - 커머스 팀',
  },
  {
    id: 'navercloud',
    icon: NaverCloudIcon,
    logo: NaverCloudLogoIcon,
    enterprise: '네이버클라우드',
    description: '네이버 클라우드 플랫폼 (NCP) 개발 (경력) 채용',
  },
  {
    id: 'cjovlieyoung',
    icon: CjOvlieYoungIcon,
    logo: CjOliveYoungLogoIcon,
    enterprise: 'CJ올리브영',
    description: 'QA Engineer (코어 플랫폼)',
  },
]
