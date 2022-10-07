import { Link } from 'react-router-dom'

function List({ post }) {
  return (
    <Link to={`/boards/${post.id}`}>
      <div className="list-container" aria-hidden="true">
        <div className="container">{post.id}</div>
        <div className="container">{post.put_titl_cont}</div>
        <div className="container">{post.user.user_email_addr}</div>
        <div className="list-date">{post.createdAt.slice(0, 10)}</div>
        <div className="container">{post.view_count}</div>
      </div>
    </Link>
  )
}

export default List
