import Button from './Button'
import RecommendJobBox from './RecommendJobBox'
import { RECOMMENDJOBLIST } from '@/constants/RecommendJob'
import { cn } from '@/utils/cn'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import GrowingTextButton from './GrowingTextButton'
import { ICON_MAP, ONBOARDINGRESULT, type CharacterKey } from '@/constants/OnboardingResult'
import { renderWithHighlight } from '@/utils/renderWithHighlight'
import { usePngExport } from '@/hooks/usePngExport'

const characterKey: CharacterKey = 'WLB'
const description = ONBOARDINGRESULT[characterKey]
const OnboardingIcon = ICON_MAP[description.iconKey]

const Card = () => {
  const accessToken = localStorage.getItem('accessToken')
  const ctaContainerRef = useRef<HTMLDivElement | null>(null)
  const ctaInView = useInView(ctaContainerRef, {
    amount: 0.6,
    margin: '0px 0px -10% 0px',
    once: true,
  })

  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const handleSave = usePngExport(wrapperRef, {
    filename: 'onboarding-card.png',
    background: '#212642',
    scale: 2,
  })

  return (
    <main
      ref={wrapperRef}
      className="[border-image:linear-gradient(90deg, rgba(120,112,158,.8) 0%, rgba(96,65,255,0) 50%, rgba(113,104,144,.8) 100% )_1] tablet:py-[60px] tablet:max-w-[702px] laptop:max-w-[894px] desktop:max-w-[900px] mx-auto flex max-w-[288px] flex-col justify-center gap-[60px] rounded-[30px] border-[1px] border-transparent bg-[#c8c2e5]/[0.07] py-[45px] backdrop-blur-[15px]"
    >
      <div className="flex flex-col gap-[40px]">
        <section className="flex flex-col gap-[56px]">
          <div className="flex flex-col gap-[8px] text-center">
            <p className="flex flex-col">
              <span className="heading-sm-medium text-purple-200">당신은</span>
              <span className="title-sm-bold text-white">{description.title}</span>
            </p>
            <span className="body-2xl-medium text-white">{description.hashtag}</span>
          </div>
          <div className="laptop:flex-row flex flex-col items-center justify-center gap-[37px]">
            <div className="flex flex-col items-center gap-[20px]">
              <OnboardingIcon className="tablet:w-[299px] h-[220px] w-[228px]" />
              <Button
                className="caption-sm-medium tablet:caption-md-medium rounded-[4px] bg-[#fff]/[.12] p-[10px] text-white"
                onClick={handleSave}
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
        <span className="heading-md-semibold text-white">나와 딱 맞는 공고</span>
        <div className="tablet:rounded-[16px] relative overflow-hidden rounded-[8px]">
          <div
            ref={ctaContainerRef}
            className={cn(
              'laptop:grid-cols-3 tablet:grid-cols-2 tablet:grid tablet:gap-x-[10px] tablet:gap-y-[24px] flex flex-col gap-[10px]',
              !accessToken && 'blur-[7px]',
            )}
          >
            {RECOMMENDJOBLIST.map((item) => (
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
