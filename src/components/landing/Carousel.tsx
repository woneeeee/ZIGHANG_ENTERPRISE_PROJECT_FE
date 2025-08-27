import { CarouselProvider } from '@/contexts/CarouselContext'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { CarouselContent, CarouselItem } from './CarouselPart'
import { BANNERS } from '@/constants/Carousel'

const Carousel = () => {
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }))

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="메인 배너"
      className="relative mx-auto mb-[36px] h-[136px] w-[900px] max-w-screen-xl"
    >
      <CarouselProvider opts={{ loop: true }} plugins={[autoplay.current]}>
        <CarouselContent>
          {BANNERS.map((banner, i) => (
            <CarouselItem key={i}>
              <img
                src={banner.icon}
                width={900}
                height={136}
                className="w-full rounded-lg object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselProvider>
    </section>
  )
}

export default Carousel
