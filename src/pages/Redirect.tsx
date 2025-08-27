import { useEffect } from 'react'
import { useNavigate } from 'storybook/internal/router'

const Redirect: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const code = queryParams.get('code')

    if (code) {
      //api 연결 로직
    }
  }, [navigate])

  return <div />
}

export default Redirect
