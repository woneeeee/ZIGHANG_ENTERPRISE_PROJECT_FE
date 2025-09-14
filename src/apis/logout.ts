import api from '@/apis/api'

const logout = async (): Promise<boolean> => {
  try {
    const res = await api.post('/auth/sign-out')
    if (res.data?.isSuccess) {
      localStorage.clear()
      delete api.defaults.headers.common.Authorization
      return true
    }
  } catch (e) {
    console.error('logout failed:', e)
  }
  return false
}

export default logout
