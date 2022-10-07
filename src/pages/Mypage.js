import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Mypage.module.css'

function Mypage() {
  const [item, setItem] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = item.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    getAllPosts()
  }, [])

  const getAllPosts = async () => {
    await axios
      .get('https://mycroft-test-api.herokuapp.com/mypage/order')
      .then((res) => {
        setItem(res.data.data)
      })
  }

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.container}></div>
      </div>
    </>
  )
}

export default Mypage
