import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
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
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage/order" element={<Mypage />} />
      </Routes>
    </>
  )
}

export default App
