import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import Service from './pages/Service'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Mypage from './pages/Mypage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </>
  )
}

export default App
