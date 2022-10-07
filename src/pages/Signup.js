import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import styles from './Signup.module.css'

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userIdError, setUserIdError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    rePassword: '',
    mobile: '',
  })

  // focus
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  // 유저 정보 유효성 검사
  const handleInput = (e) => {
    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    })

    const isValidId = (value) => {
      const userIdRegex =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
      if (userIdRegex.test(value)) {
        setUserIdError(false)
      } else setUserIdError(true)
    }
    isValidId(value)

    const isValidPwd = (value) => {
      if (inputValue.password.length >= 7 && inputValue.password.length < 15) {
        setPasswordError(false)
      } else setPasswordError(true)
    }
    isValidPwd(value)

    const isValidRePwd = (value) => {
      if (inputValue.password === value) setConfirmPasswordError(false)
      else setConfirmPasswordError(true)
    }
    isValidRePwd(value)
  }

  // const focusBlur = (e) => {
  //   const checkData = errCheck(inputValue)
  //   setErr(checkData)
  // }

  const validation = () => {
    if (!inputValue.email) setUserIdError(true)
    if (!inputValue.password) setPasswordError(true)
    if (!inputValue.rePassword) setConfirmPasswordError(true)
  }

  // request to server
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (validation()) return
    if (Object.values(inputValue).includes('')) {
      alert('모든 항목은 필수입니다.')
    } else {
      const data = {
        email: inputValue.email,
        password: inputValue.password,
        mobile: inputValue.mobile,
      }
      try {
        await axios
          .post('https://mycroft-test-api.herokuapp.com/sign-up', data, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((res) => {
            dispatch({
              type: 'auth/isLogin',
              payload: res.data,
            })
            navigate('/')
          })
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <section className={styles.wrap}>
      <form onSubmit={onSubmitHandler} className={styles.container}>
        <label className={styles.input_txt}>
          아이디<span>(필수)</span>
        </label>
        <input
          type="text"
          name="email"
          placeholder="이메일 형식"
          ref={inputRef}
          onChange={handleInput}
          className={userIdError ? `${styles.input_error}` : null}
        />
        <label className={styles.input_txt}>
          비밀번호<span>(필수)</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="8~15자"
          onChange={handleInput}
          className={passwordError ? `${styles.input_error}` : null}
        />
        <label className={styles.input_txt}>
          비밀번호 확인<span>(필수)</span>
        </label>
        <input
          type="password"
          name="rePassword"
          placeholder="비밀번호 재입력"
          onChange={handleInput}
          className={confirmPasswordError ? `${styles.input_error}` : null}
        />
        <label className={styles.input_txt}>
          핸드폰 번호<span>(필수)</span>
        </label>
        <input
          type="text"
          name="mobile"
          placeholder="핸드폰 번호"
          onChange={handleInput}
        />
        <button type="submit">가입하기</button>
      </form>
    </section>
  )
}

export default Signup
