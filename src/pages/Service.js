import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './Service.module.css'

function Service() {
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)

  const onClickHandler = () => {
    if (!token) {
      alert('로그인을 해주세요.')
      navigate('/sign-up')
    } else {
      alert('주문 성공!')
    }
  }

  return (
    <>
      <div className={styles.wrap}>
        <img src="img/thumbnail.png" alt="thumbnail" />
        <button
          type="button"
          className={styles.order_btn}
          onClick={onClickHandler}>
          주문하기
        </button>
      </div>
    </>
  )
}

export default Service
