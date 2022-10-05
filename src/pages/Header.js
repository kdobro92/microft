import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './Header.module.css'

function Header() {
  const [currentNav, setCurrentNav] = useState(0)
  const [isLogin, setIsLogin] = useState(true)

  const onClickMenuHandler = (idx) => {
    setCurrentNav(idx)
  }

  const data = [
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

  // const newData = [
  //   <Link to="/">
  //     <div className="wrap_menu">
  //       <li className="menu_txt">서비스</li>
  //     </div>
  //   </Link>,
  //   <Link to="/mypage/order">
  //     <div className="wrap_menu">
  //       <li className="menu_txt">마이페이지</li>
  //     </div>
  //   </Link>,
  //   <Link to="/logout">
  //     <li className="menu_txt">로그아웃</li>
  //   </Link>,
  // ]

  return (
    <div className={styles.wrap_header}>
      <div className={styles.container_header}>
        <div className={styles.nav_left}>
          <ul>
            <li>
              <img src="img/microft.png" alt="logo" />
            </li>
          </ul>
        </div>
        <div className={styles.nav_right}>
          {isLogin && (
            <div>
              {data.map((menu, idx) => (
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
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
