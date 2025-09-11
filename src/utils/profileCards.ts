import { PROFILECARD, type ProfileCardItem } from '@/constants/ProfileCard'

const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, '')

export const PROFILECARD_BY_TITLE = new Map<string, ProfileCardItem>(
  PROFILECARD.map((c) => [normalize(c.title), c]),
)
