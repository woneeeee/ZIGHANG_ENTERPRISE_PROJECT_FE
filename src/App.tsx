import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from '@/pages/Landing'
import Profile from '@/pages/Profile'
import Login from '@/pages/Login'
import Redirect from '@/pages/Redirect'
import Result from '@/pages/onboarding/Result'
import RootLayout from '@/layouts/RootLayout'
import OnboardingLogin from '@/pages/onboarding/OnboardingLogin'
import Start from '@/pages/onboarding/Start'
import OnboardingTest from '@/pages/onboarding/OnboardingTest.tsx'
import Job from '@/pages/Job.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kakao/oauth" element={<Redirect />} />
        <Route path="/job" element={<Job />} />
        <Route element={<RootLayout />}>
          <Route path="/onboarding/test" element={<OnboardingTest/>}></Route>
          <Route path="/onboarding/start" element={<Start />} />
          <Route path="/onboarding/login" element={<OnboardingLogin />} />
          <Route path="/onboarding/result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
