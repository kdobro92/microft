import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './MypageDetail.module.css'

function MypageDetail() {
  const { id } = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    const getPostDetail = async () => {
      try {
        await axios
          .get(`https://mycroft-test-api.herokuapp.com/order/${id}`)
          .then((res) => {
            console.log(res)
            setItem(res.data)
          })
      } catch (err) {
        console.log(err)
      }
    }
    getPostDetail()
  }, [])

  return (
    <div className={styles.wrap}>
      <h2>주문 상세정보</h2>
      <div className={styles.container}>
        <li>{item.id}</li>
        <li>{item.itemName}</li>
      </div>
    </div>
  )
}

export default MypageDetail
