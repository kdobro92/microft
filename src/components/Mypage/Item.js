import { Link } from 'react-router-dom'
import styles from './Item.module.css'

function Item({ item }) {
  return (
    <Link to={`/mypage/order/${item.id}`}>
      <div className={styles.order_list} aria-hidden="true">
        <div className={styles.item_list}>
          <li>{item.id}</li>
          <li>{item.itemName}</li>
        </div>
      </div>
    </Link>
  )
}

export default Item
