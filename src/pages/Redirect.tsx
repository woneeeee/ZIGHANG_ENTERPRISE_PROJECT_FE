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
          const { userId, accessToken, refreshToken } = res.data.result
          localStorage.setItem('userId', userId)

          const from = localStorage.getItem('loginFrom')

          if (res.data.code === '200') {
            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('refreshToken', refreshToken)
            navigate(resolveSignUpPath(from), { replace: true })
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
