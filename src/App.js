import './App.css'
import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Service from './pages/Service'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Mypage from './pages/Mypage'
import MypageDetail from './pages/MypageDetail'

function App() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)

  const logoutHandler = async () => {
    await axios
      .post('https://mycroft-test-api.herokuapp.com/logout', null)
      .then((res) => {
        console.log(res)
        setIsLogin(false)
        navigate('/')
      })
  }

  return (
    <>
      <Header isLogin={isLogin} logoutHandler={logoutHandler} />
      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/mypage/order" element={<Mypage />} />
        <Route path="/mypage/order/:id" element={<MypageDetail />} />
      </Routes>
    </>
  )
}

export default App
