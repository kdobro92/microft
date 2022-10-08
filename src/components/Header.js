import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './Header.module.css'

function Header({ isLogin, logoutHandler }) {
  const [currentNav, setCurrentNav] = useState(0)

  const onClickMenuHandler = (idx) => {
    setCurrentNav(idx)
  }

  const isLoggedOut = [
    <Link to="/">
      <li className={styles.nav_txt}>서비스</li>
    </Link>,
    <Link to="/sign-up">
      <li className={styles.nav_txt}>회원가입</li>
    </Link>,
    <Link to="/login">
      <li className={styles.nav_txt}>로그인</li>
    </Link>,
  ]

  const isLoggedIn = [
    <Link to="/">
      <li className={styles.nav_txt}>서비스</li>
    </Link>,
    <Link to="/mypage/order">
      <li className={styles.nav_txt}>마이페이지</li>
    </Link>,
    <li className={styles.nav_txt} onClick={logoutHandler}>
      로그아웃
    </li>,
  ]

  if (isLogin) {
    return (
      <div className={styles.wrap_header}>
        <div className={styles.container_header}>
          <Link to="/">
            <div className={styles.nav_left}>
              <ul>
                <li>
                  <img src="/img/logo.png" alt="logo" />
                </li>
              </ul>
            </div>
          </Link>
          <div className={styles.nav_right}>
            <div>
              {isLoggedIn.map((menu, idx) => (
                <ul
                  key={idx}
                  className={
                    currentNav === idx
                      ? `${styles.nav_menu} ${styles.focused}`
                      : `${styles.nav_menu}`
                  }
                  onClick={() => onClickMenuHandler(idx)}>
                  {menu}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrap_header}>
      <div className={styles.container_header}>
        <Link to="/">
          <div className={styles.nav_left}>
            <ul>
              <li>
                <img src="/img/logo.png" alt="logo" />
              </li>
            </ul>
          </div>
        </Link>
        <div className={styles.nav_right}>
          <div>
            {isLoggedOut.map((menu, idx) => (
              <ul
                key={idx}
                className={
                  currentNav === idx
                    ? `${styles.nav_menu} ${styles.focused}`
                    : `${styles.nav_menu}`
                }
                onClick={() => onClickMenuHandler(idx)}>
                {menu}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
