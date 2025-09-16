import { useCallback, type RefObject } from 'react'
import { toPng } from 'html-to-image'

export type PngExportOptions = {
  filename?: string
  background?: string
  scale?: number
  skipAttr?: string
}

export function usePngExport<T extends HTMLElement>(
  ref: RefObject<T | null>,
  {
    filename = 'export.png',
    background = '#212642',
    scale,
    skipAttr = 'data-skip-export',
  }: PngExportOptions = {},
) {
  const save = useCallback(async () => {
    const node = ref.current
    if (!node) return

    const toHide = Array.from(node.querySelectorAll<HTMLElement>(`[${skipAttr}]`))
    const prevDisplay = toHide.map((el) => el.style.display)
    toHide.forEach((el) => {
      el.style.display = 'none'
    })

    try {
      const fonts = (document as unknown as { fonts?: { ready?: Promise<unknown> } }).fonts
      await fonts?.ready?.catch(() => undefined)

      const { width, height } = node.getBoundingClientRect()
      const w = Math.ceil(width)
      const h = Math.ceil(height)
      const ratio = Math.max(scale ?? 2, window.devicePixelRatio || 1)

      const dataUrl = await toPng(node, {
        cacheBust: true,
        backgroundColor: background,
        width: w,
        height: h,
        pixelRatio: ratio,
        canvasWidth: w * ratio,
        canvasHeight: h * ratio,
        style: {
          margin: '0',
          position: 'static',
          left: '0',
          top: '0',
          transform: 'none',
          display: 'inline-block',
          width: `${w}px`,
          height: `${h}px`,
          overflow: 'visible',
        },
        filter: (n) => !(n instanceof Element && n.hasAttribute(skipAttr)),
      })

      const a = document.createElement('a')
      a.href = dataUrl
      a.download = filename
      a.click()
    } finally {
      toHide.forEach((el, i) => {
        el.style.display = prevDisplay[i]
      })
    }
  }, [ref, filename, background, scale, skipAttr])

  return save
}
