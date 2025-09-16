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
import Category from '@/pages/Category.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SignUp from '@/pages/SignUp.tsx'
import OnboardingSignUp from '@/pages/onboarding/OnboardingSignUp.tsx'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/job" element={<Job />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/kakao/oauth" element={<Redirect />} />
          <Route path="/auth/login/kakao" element={<Redirect />} />
          <Route element={<RootLayout />}>
            <Route path="/onboarding/test" element={<OnboardingTest />}></Route>
            <Route path="/onboarding/start" element={<Start />} />
            <Route path="/onboarding/login" element={<OnboardingLogin />} />
            <Route path="/onboarding/result" element={<Result />} />
          </Route>
          <Route path="/onboarding/sign-up" element={<OnboardingSignUp />} />
          <Route path="/:category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
