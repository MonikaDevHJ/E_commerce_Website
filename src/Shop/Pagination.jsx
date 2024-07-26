import React from 'react';

const Paginations = ({ productsPerPage, totaLProducts, paginate, activePage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totaLProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='default-pagination'>
      {pageNumbers.map((number) => (
        <li key={number} className={`page-item ${number === activePage ? 'active' : ''}`}>
          <a href="#" onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Paginations;
