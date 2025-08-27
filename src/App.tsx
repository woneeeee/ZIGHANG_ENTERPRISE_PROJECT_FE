import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from '@/pages/Landing'
import Login from '@/pages/Login'
import Redirect from '@/pages/Redirect'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<Login />} />
        <Route path="/kakao/oauth" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
