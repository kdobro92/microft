import styles from './Service.module.css'

function Service() {
  return (
    <>
      <div className={styles.wrap}>
        <img src="img/thumbnail.png" alt="thumbnail" />
        <button type="button" className={styles.order_btn}>
          주문하기
        </button>
      </div>
    </>
  )
}

export default Service
