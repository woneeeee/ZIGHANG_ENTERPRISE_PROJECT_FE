// 2. Intersection Observer 훅
import { useEffect, useRef } from 'react'

export const useIntersectionObserver = (
  callback: () => void,
  options?: IntersectionObserverInit
) => {
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback()
        }
      },
      {
        threshold: 0.1,
        ...options
      }
    )

    observer.observe(target)

    return () => {
      observer.unobserve(target)
    }
  }, [callback, options])

  return targetRef
}
