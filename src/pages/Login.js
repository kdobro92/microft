import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import styles from './Login.module.css'

function Login({ setIsLogin }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const inputRef = useRef(null)

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleInput = (e) => {
    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (Object.values(inputValue).includes('')) {
      alert('모든 항목은 필수입니다.')
    } else if (inputValue.password.length < 8) {
      alert('비밀번호를 다시 확인해주세요.')
    } else {
      const data = {
        email: inputValue.email,
        password: inputValue.password,
      }
      try {
        await axios
          .post('https://mycroft-test-api.herokuapp.com/login', data, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((res) => {
            dispatch({
              type: 'userInfo/setUpdateUserInfo',
              payload: res.data,
            })
            navigate('/')
            setIsLogin(true)
          })
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <section className={styles.wrap}>
      <form onSubmit={onSubmitHandler} className={styles.container}>
        <label className={styles.input_txt}>아이디</label>
        <input
          type="text"
          name="email"
          placeholder="이메일 형식"
          ref={inputRef}
          onChange={handleInput}
        />
        <label className={styles.input_txt}>비밀번호</label>
        <input
          type="password"
          name="password"
          placeholder="8~15자"
          onChange={handleInput}
        />
        <button type="submit">로그인</button>
      </form>
    </section>
  )
}

export default Login
