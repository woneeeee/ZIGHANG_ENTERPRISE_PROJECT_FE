import type { SVGProps } from 'react'
const SvgMicrosoftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 260 97"
    {...props}
  >
    <path fill="url(#microsoft-icon_svg__a)" d="M0 .412h260v95.842H0z" />
    <defs>
      <linearGradient
        id="microsoft-icon_svg__a"
        x1={130}
        x2={130}
        y1={0.412}
        y2={96.254}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgMicrosoftIcon
