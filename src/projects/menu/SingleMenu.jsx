import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const SingleMenu = ({ items }) => {
  const [pageNumber, setPageNumber] = useState(0);
  
  const menuPerPage = 6;
  const pagesVisited = pageNumber * menuPerPage;
  const displayMenu = items.slice(pagesVisited, pagesVisited + menuPerPage).map(item => {
    const { image, title, price, desc } = item;
    return (
      <div key={item.id} className="menu-item">
        <div className="menu-image">
          <img src={image} alt={title} />
        </div>

        <div className="menu-details">
          <h4 className="menu-title">
            {title}
            <span className="menu-price">${price}</span>
          </h4>

          <div className="menu-text">
            {desc}
          </div>
        </div>
      </div>
    )
  })

  const pageCount = Math.ceil(items.length / menuPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <>
      {displayMenu}

      <ReactPaginate
        previousLabel="Prev"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="pagination"
        // previousLinkClassName="pagination-prev"
        // nextLinkClassName="pagination-next"
        disabledClassName="disabled"
        activeClassName="active"
      />
    </>
  )
}

export default SingleMenu;
