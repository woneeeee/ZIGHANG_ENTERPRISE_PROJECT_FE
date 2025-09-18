import Button from './Button'
import RecommendJobBox from './RecommendJobBox'
import { RECOMMENDJOBLIST, type RecommendJobItem } from '@/constants/RecommendJob'
import { cn } from '@/utils/cn'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import GrowingTextButton from './GrowingTextButton'
import {
  ICON_MAP,
  ONBOARDINGRESULT,
  toCharacterKey,
  type CharacterKey,
} from '@/constants/OnboardingResult'
import { renderWithHighlight } from '@/utils/renderWithHighlight'
import { ChevronRightIcon } from '@/assets/svgComponents'
import { useLocation, useNavigate } from 'react-router-dom'
import { getMyPageAll } from '@/apis/getOnboardingResultAll'
import { adaptSearchToRecommend } from '@/constants/companyAssetMap'
import { useOnboardingTestStore, useReOnboardingTestStore } from '@/stores/onboardingTestStore'
import { usePngExport } from '@/hooks/usePngExport'
import { PROFILECARD_BY_TITLE } from '@/utils/profileCards'
import ProfileCard from '../profile/Card'

const normalize = (s?: string | null) => (s ?? '').trim().toLowerCase().replace(/\s+/g, '')

const Card = () => {
  const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null
  const isLoggedIn = Boolean(accessToken)

  const nav = useNavigate()
  const ctaContainerRef = useRef<HTMLDivElement | null>(null)
  const ctaInView = useInView(ctaContainerRef, {
    amount: 0.6,
    margin: '0px 0px -10% 0px',
    once: true,
  })

  const { state: navState } = useLocation() as { state?: { focus?: 'jobs' | 'bottom' } }
  const { state: State } = useLocation() as {
    state?: { from?: 'mypage' | 'retest' | 'onboarding' }
  }

  const [items, setItems] = useState<RecommendJobItem[]>([])
  const [ckey, setCkey] = useState<CharacterKey>('워라밸 신봉자')

  const [profileName, setProfileName] = useState<string | null>(null)

  const scrollToJobs = useCallback(() => {
    const el = ctaContainerRef.current
    if (!el) return
    const headerOffset = 160
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top: y, behavior: 'auto' })
  }, [])

  useEffect(() => {
    if (navState?.focus === 'jobs' && items.length > 0) {
      scrollToJobs()

      const t1 = setTimeout(scrollToJobs, 0)
      const t2 = setTimeout(scrollToJobs, 200)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
  }, [navState?.focus, items.length, scrollToJobs])

  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const handleEntire = () => {
    nav('/custom')
  }
  const onboardingCharacterData = useOnboardingTestStore((state) => state.onboardingCharacterData)
  const reonboardingCharacterData = useReOnboardingTestStore(
    (state) => state.reonboardingCharacterData,
  )

  const description = ONBOARDINGRESULT[ckey]
  const OnboardingIcon =
    ICON_MAP[description.iconKey as keyof typeof ICON_MAP] ?? ICON_MAP.OnboardingWlbIcon

  useEffect(() => {
    const fetchData = async () => {
      if (State?.from === 'mypage' && isLoggedIn) {
        try {
          const data = await getMyPageAll()
          setCkey(toCharacterKey(data.characterName))
          setProfileName(data.characterName)
          const mapped = adaptSearchToRecommend(data.searchResponses ?? [])
          setItems(mapped.length ? mapped : RECOMMENDJOBLIST)
        } catch (e) {
          console.error('[my-page/all] failed:', e)
          setCkey('워라밸 신봉자')
          setProfileName('워라밸 신봉자')
          setItems(RECOMMENDJOBLIST)
        }
      } else if (State?.from === 'retest' && isLoggedIn && reonboardingCharacterData) {
        setCkey(toCharacterKey(reonboardingCharacterData.characterName))
        console.log(reonboardingCharacterData.characterName)
        setProfileName(reonboardingCharacterData.characterName)
        const mapped = adaptSearchToRecommend(reonboardingCharacterData.searchResponses ?? [])
        setItems(mapped.length ? mapped : RECOMMENDJOBLIST)
      } else if (onboardingCharacterData) {
        setCkey(toCharacterKey(onboardingCharacterData.characterName))
        setProfileName(onboardingCharacterData.characterName)
        setItems(RECOMMENDJOBLIST)
      } else {
        setCkey('워라밸 신봉자')
        setProfileName('워라밸 신봉자')
        setItems(RECOMMENDJOBLIST)
      }
    }

    fetchData()
  }, [isLoggedIn, navState, onboardingCharacterData, reonboardingCharacterData])

  const profileCardItem = useMemo(() => {
    if (!profileName) return undefined
    return PROFILECARD_BY_TITLE.get(normalize(profileName))
  }, [profileName])

  const hiddenProfileRef = useRef<HTMLDivElement>(null)
  const saveProfileCard = usePngExport(hiddenProfileRef, {
    filename: 'profile-card.png',
    background: '#212642',
    scale: 2,
  })

  const handleSaveProfileCard = async () => {
    if (!profileCardItem) {
      console.warn('프로필 카드 정보를 찾지 못해 저장할 수 없어요.')
      return
    }
    await saveProfileCard()
  }

  return (
    <main
      ref={wrapperRef}
      className="[border-image:linear-gradient(90deg, rgba(120,112,158,.8) 0%, rgba(96,65,255,0) 50%, rgba(113,104,144,.8) 100% )_1] tablet:py-[60px] tablet:max-w-[702px] laptop:max-w-[894px] desktop:max-w-[900px] mx-auto flex max-w-[288px] flex-col justify-center gap-[60px] rounded-[30px] border-[1px] border-transparent bg-[#c8c2e5]/[0.07] py-[45px] backdrop-blur-[15px]"
    >
      {profileCardItem && (
        <div
          style={{ position: 'fixed', left: -10000, top: 0, opacity: 0, pointerEvents: 'none' }}
          aria-hidden="true"
        >
          <ProfileCard ref={hiddenProfileRef} item={profileCardItem} />
        </div>
      )}
      <div className="flex flex-col gap-[40px]">
        <section className="flex flex-col gap-[56px]">
          <div className="flex flex-col gap-[8px] text-center">
            <p className="flex flex-col">
              <span className="caption-sm-medium tablet:heading-sm-medium text-purple-200">
                당신은
              </span>
              <span className="heading-lg-bold tablet:title-sm-bold text-white">
                {description.title}
              </span>
            </p>
            <span className="caption-sm-medium tablet:body-2xl-medium text-white">
              {description.hashtag}
            </span>
          </div>
          <div className="laptop:flex-row flex flex-col items-center justify-center gap-[37px]">
            <div className="flex flex-col items-center gap-[20px]">
              <OnboardingIcon className="tablet:w-[299px] h-[220px] w-[228px]" />
              <Button
                className="caption-sm-medium tablet:caption-md-medium rounded-[4px] bg-[#fff]/[.12] p-[10px] text-white hover:bg-[#fff]/[.5]"
                onClick={handleSaveProfileCard}
              >
                이미지 저장하기
              </Button>
            </div>
            <div className="tablet:body-xl-regular caption-md-medium tablet:w-[440px] tablet:px-[38px] tablet:h-[218px] flex h-[176px] w-[258px] flex-col justify-center gap-[20px] rounded-[14px] bg-gradient-to-r from-[#7260AC]/40 via-[#5D4588]/40 to-[#5D4DA2]/40 px-[16px] py-[30px] text-white">
              {description.bullets.map((b, i) => (
                <ul key={i} className="list-outside list-disc pl-4 marker:text-white">
                  <li>{renderWithHighlight(b)}</li>
                </ul>
              ))}
            </div>
          </div>
        </section>

        <section className="tablet:px-[81px] laptop:px-[50px] flex flex-col gap-[16px] px-[15px]">
          <span className="body-2xl-semibold tablet:heading-md-semibold text-white">나의 성향</span>
          <span className="tablet:body-xl-regular caption-md-regular text-neutral-50">
            {description.traits.paragraphs.map((line, idx) => (
              <span key={idx}>
                {renderWithHighlight(line)}
                <br />
              </span>
            ))}
          </span>
        </section>
      </div>
      <div className="tablet:px-[81px] laptop:px-[50px] flex flex-col gap-[22px] px-[15px]">
        <div className="flex items-center justify-between">
          <span className="heading-md-semibold text-white">나와 딱 맞는 공고</span>
          {isLoggedIn && (
            <button
              type="button"
              className="caption-sm-medium tablet:body-xl-semibold inline-flex cursor-pointer items-center whitespace-nowrap text-white"
              onClick={handleEntire}
            >
              전체보기 <ChevronRightIcon className="ml-1 fill-white" />
            </button>
          )}
        </div>
        <div className="tablet:rounded-[16px] relative overflow-hidden rounded-[8px]">
          <div
            ref={ctaContainerRef}
            className={cn(
              'laptop:grid-cols-3 tablet:grid-cols-2 tablet:grid tablet:gap-x-[10px] tablet:gap-y-[24px] flex flex-col gap-[10px]',
              !accessToken && 'blur-[7px]',
            )}
          >
            {items.map((item) => (
              <RecommendJobBox key={item.id} item={item} />
            ))}
          </div>
          <AnimatePresence>
            {!accessToken && (
              <motion.div
                key="cta"
                className="absolute inset-0 z-20 grid place-items-center bg-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <GrowingTextButton open={ctaInView} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}

export default Card
