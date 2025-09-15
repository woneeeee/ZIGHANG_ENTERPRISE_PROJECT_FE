import { useEffect, useState } from 'react'

export const useMediaQuery = (q: string) => {
  const [m, setM] = useState(false)
  useEffect(() => {
    const mq = matchMedia(q)
    const on = () => setM(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [q])
  return m
}
