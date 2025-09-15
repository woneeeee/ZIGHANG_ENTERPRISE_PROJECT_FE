import type { RecommendJobItem } from '@/constants/RecommendJob'
import {
  HyundaiIcon,
  HyundaiLogoIcon,
  KakaobankIcon,
  KakaobankLogoIcon,
  NaverCloudIcon,
  NaverCloudLogoIcon,
  MicrosoftIcon,
  MicrosoftLogoIcon,
  DaangnIcon,
  DaangnLogoIcon,
} from '@/assets/svgComponents'
import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'

const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, '')

const RANDOM_ICONS: React.ComponentType<React.SVGProps<SVGSVGElement>>[] = [
  DaangnIcon,
  MicrosoftIcon,
  NaverCloudIcon,
  KakaobankIcon,
  HyundaiIcon,
]

export const DefaultIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const Icon = useMemo(() => {
    const i = Math.floor(Math.random() * RANDOM_ICONS.length)
    return RANDOM_ICONS[i]
  }, [])
  return <Icon {...props} />
}

export function makeTextLogo(name: string): React.ComponentType<React.SVGProps<SVGSVGElement>> {
  const label = name.trim()
  const VIEW_W = 81
  const VIEW_H = 28
  const PADDING_X = 6
  const FONT_SIZE = 11
  const FONT_WEIGHT = 500

  const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const textRef = useRef<SVGTextElement | null>(null)
    const [display, setDisplay] = useState(label)

    useLayoutEffect(() => {
      const el = textRef.current
      if (!el) return

      const maxWidth = VIEW_W - PADDING_X * 2

      el.textContent = label
      if (el.getComputedTextLength() <= maxWidth) {
        setDisplay(label)
        return
      }

      const ellipsis = '…'
      let lo = 0
      let hi = label.length
      while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2)
        const test = label.slice(0, mid) + ellipsis
        el.textContent = test
        if (el.getComputedTextLength() <= maxWidth) {
          lo = mid + 1
        } else {
          hi = mid
        }
      }
      const finalText = label.slice(0, Math.max(0, lo - 1)) + ellipsis
      setDisplay(finalText)
    }, [label])

    return (
      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} role="img" aria-label={label} {...props}>
        <rect width="100%" height="100%" rx="5" fill="#916FFF" />
        <text
          ref={textRef}
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={FONT_SIZE}
          fontWeight={FONT_WEIGHT}
          fill="#fff"
        >
          {display}
        </text>
      </svg>
    )
  }

  return Logo
}

export const COMPANY_ASSET_MAP = {
  [normalize('현대자동차')]: { icon: HyundaiIcon, logo: HyundaiLogoIcon },
  [normalize('네이버클라우드')]: { icon: NaverCloudIcon, logo: NaverCloudLogoIcon },
  [normalize('카카오뱅크')]: { icon: KakaobankIcon, logo: KakaobankLogoIcon },
  [normalize('Microsoft')]: { icon: MicrosoftIcon, logo: MicrosoftLogoIcon },
  [normalize('당근')]: { icon: DaangnIcon, logo: DaangnLogoIcon },
} as const

export function adaptSearchToRecommend(
  list: { title: string; companyName: string }[],
): RecommendJobItem[] {
  return list.map((s, idx) => {
    const key = normalize(s.companyName)
    const assets = COMPANY_ASSET_MAP[key] ?? {
      icon: DefaultIcon,
      logo: makeTextLogo(s.companyName),
    }
    return {
      id: `api-${idx}-${key}`,
      icon: assets.icon,
      logo: assets.logo,
      enterprise: s.companyName,
      description: s.title,
    }
  })
}
