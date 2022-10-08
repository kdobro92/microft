import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import styles from './Mypage.module.css'
import Item from '../components/Mypage/Item'
import Pagination from '../components/Mypage/Pagination'

function Mypage() {
  const dispatch = useDispatch()
  const [item, setItem] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = item.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    getAllLists()
  }, [])

  const getAllLists = async () => {
    await axios
      .get('https://mycroft-test-api.herokuapp.com/order?page=0')
      .then((res) => {
        dispatch({
          type: 'itemInfo/setUpdateItemInfo',
          payload: res.data.content,
        })
        setItem(res.data.content)
      })
  }

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.wrap_container}>
          <img src="/img/mypage.png" alt="thumbnail" />
        </div>
        <div className={styles.container}>
          <h2>내 주문목록</h2>
          <div className={styles.wrap_list}>
            <div className={styles.wrap_list_con}>
              <h3>번호</h3>
              <h3>상품명</h3>
            </div>
            {currentPosts.length > 0
              ? currentPosts.map((item) => {
                  return <Item key={item.id} item={item} />
                })
              : null}
          </div>
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={item.length}
          currentPage={currentPage}
          paginate={paginate}
          setItem={setItem}
        />
      </div>
    </>
  )
}

export default Mypage
