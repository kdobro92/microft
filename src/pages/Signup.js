import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import styles from './Signup.module.css'

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [userIdError, setUserIdError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)

  const onChangeMobile = (e) => {
    setMobile(e.target.value)
  }

  // focus
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  // 유저 정보 유효성 검사
  const isValidId = (e) => {
    const userIdRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    if (userIdRegex.test(e.target.value)) {
      setUserIdError(false)
    } else setUserIdError(true)
    setEmail(e.target.value)
  }

  const isValidPwd = (e) => {
    if (password.length >= 7 && password.length < 15) {
      setPasswordError(false)
    } else setPasswordError(true)
    setPassword(e.target.value)
  }

  const isValidRePwd = (e) => {
    if (password === e.target.value) setConfirmPasswordError(false)
    else setConfirmPasswordError(true)
    setRePassword(e.target.value)
  }

  const validation = () => {
    if (!email) setUserIdError(true)
    if (!password) setPasswordError(true)
    if (!rePassword) setConfirmPasswordError(true)
  }

  // request to server
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (validation()) return
    else {
      const data = {
        email,
        password,
        mobile,
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
          onChange={isValidId}
          className={userIdError ? `${styles.input_error}` : null}
        />
        <label className={styles.input_txt}>
          비밀번호<span>(필수)</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="8~15자"
          onChange={isValidPwd}
          className={passwordError ? `${styles.input_error}` : null}
        />
        <label className={styles.input_txt}>
          비밀번호 확인<span>(필수)</span>
        </label>
        <input
          type="password"
          name="rePassword"
          placeholder="비밀번호 재입력"
          onChange={isValidRePwd}
          className={confirmPasswordError ? `${styles.input_error}` : null}
        />
        <label className={styles.input_txt}>
          핸드폰 번호<span>(필수)</span>
        </label>
        <input
          type="text"
          name="mobile"
          placeholder="핸드폰 번호"
          onChange={onChangeMobile}
        />
        <button type="submit">가입하기</button>
      </form>
    </section>
  )
}

export default Signup
