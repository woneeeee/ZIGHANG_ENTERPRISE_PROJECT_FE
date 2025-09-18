import api from '@/apis/api'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect: React.FC = () => {
  const navigate = useNavigate()

  const resolveSignUpPath = (from: string | null) => {
    if (from === '/onboarding/login') return '/onboarding/sign-up'
    if (from === '/login') return '/sign-up'

    if (from?.startsWith('/onboarding')) return '/onboarding/sign-up'
    return '/sign-up'
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const code = queryParams.get('code')

    if (code) {
      api
        .post('/auth/login/kakao', null, {
          params: { code, redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI },
        })
        .then((res) => {
          const { userId, accessToken, refreshToken, first } = res.data.result
          localStorage.setItem('userId', userId)

          if (res.data.code === '200') {
            if (first === false) {
              const onboardingTestStorage = localStorage.getItem('onboarding-test-storage')
              if (onboardingTestStorage) {
                navigate('/onboarding/result', { replace: true, state: { from: 'mypage' } })
              } else {
                navigate('/', { replace: true })
              }
            } else {
              const from = localStorage.getItem('loginFrom')
              navigate(resolveSignUpPath(from), { replace: true })
            }

            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('refreshToken', refreshToken)
          } else {
            navigate('/login')
          }
        })
        .catch((err) => {
          console.log(err)
          navigate('/login')
        })
    }
  }, [navigate])

  return <div />
}

export default Redirect
