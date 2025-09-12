import type { Profile } from '@/types/profile'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ProfileStore = {
  profile: Profile | null
  setProfile: (p: Profile) => void
  clear: () => void
}

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (p) => set({ profile: p }),
      clear: () => set({ profile: null }),
    }),
    {
      name: 'my-profile',
      partialize: (s) => ({ profile: s.profile }),
    },
  ),
)
