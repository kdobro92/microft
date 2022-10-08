import { useDispatch } from 'react-redux'
import axios from 'axios'
import styles from './Pagination.module.css'

function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setItem,
}) {
  const dispatch = useDispatch()
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const goToPageFirst = async () => {
    await axios
      .get('https://mycroft-test-api.herokuapp.com/order?page=0')
      .then((res) => {
        setItem(res.data.content)
      })
  }

  const goToPageTwo = async () => {
    await axios
      .get('https://mycroft-test-api.herokuapp.com/order?page=1')
      .then((res) => {
        dispatch({
          type: 'itemInfo/setUpdateItemInfo',
          payload: res.data,
        })
        setItem(res.data.content)
      })
  }

  const goToPageThree = async () => {
    await axios
      .get('https://mycroft-test-api.herokuapp.com/order?page=2')
      .then((res) => {
        dispatch({
          type: 'itemInfo/setUpdateItemInfo',
          payload: res.data,
        })
        setItem(res.data.content)
      })
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.page_btn}>
        <button type="button" onClick={goToPageFirst}>
          1
        </button>
        <button type="button" onClick={goToPageTwo}>
          2
        </button>
        <button type="button" onClick={goToPageThree}>
          3
        </button>
      </div>
    </div>
  )
}

export default Pagination
