import React from 'react'
import { Outlet } from 'react-router-dom'
import { BackgroundIcon } from '@/assets/svgComponents'

const RootLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <BackgroundIcon className="h-full w-full" preserveAspectRatio="xMidYMid slice" />
      </div>
      <Outlet />
    </div>
  )
}

export default RootLayout
