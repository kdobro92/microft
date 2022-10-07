import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './Signup.module.css'

function Signup() {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    rePassword: '',
    mobile: '',
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  }

  // error check

  // request to server
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (Object.values(inputValue).includes('')) {
      alert('모든 항목은 필수입니다.')
      // setModal({
      //   open: true,
      //   title: '모든 항목은 필수 입니다.',
      // })
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
              'content-type': 'application/json',
            },
            withCredentials: true,
          })
          .then((res) => {
            console.log(res)
            // setModal({
            //   open: true,
            //   title: '회원가입이 완료 되었습니다!',
            //   callback: () => {
            //     navigate('/')
            //   },
            // })
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
          onChange={handleInput}
        />
        <label className={styles.input_txt}>
          비밀번호<span>(필수)</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="8~15자"
          onChange={handleInput}
        />
        <label className={styles.input_txt}>
          비밀번호 확인<span>(필수)</span>
        </label>
        <input
          type="password"
          name="rePassword"
          placeholder="비밀번호 재입력"
          onChange={handleInput}
        />
        <label className={styles.input_txt}>
          핸드폰 번호<span>(필수)</span>
        </label>
        <input
          type="text"
          name="mobile"
          placeholder="핸드폰 번호 형식"
          onChange={handleInput}
        />
        <button type="submit">가입하기</button>
      </form>
    </section>
  )
}

export default Signup
