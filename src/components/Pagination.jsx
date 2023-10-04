// Pagination.js
import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {currentPage > 1 && <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>}
      {pageNumbers.map((page) => (
        <button key={page} onClick={() => onPageChange(page)} className={page === currentPage ? 'active' : ''}>
          {page}
        </button>
      ))}
      {currentPage < totalPages && <button onClick={() => onPageChange(currentPage + 1)}>Next</button>}
    </div>
  );
}

export default Pagination;
