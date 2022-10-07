function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination-container">
      {pageNumbers.map((number) => (
        <li
          key={number}
          style={
            currentPage === number
              ? {
                  color: '#ffffff',
                  background: '#222',
                }
              : null
          }>
          <span
            onClick={() => paginate(number)}
            className="page-item"
            aria-hidden="true">
            {number}
          </span>
        </li>
      ))}
    </div>
  )
}

export default Pagination
