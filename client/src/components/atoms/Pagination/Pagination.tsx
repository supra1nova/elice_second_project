import React, { useState } from 'react';
// import './Pagination.css';
import * as UI from './style';
import Pagination from 'react-js-pagination';

const Paging = ({ page, setPage, total, perPage }: any) => {
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  console.log();

  return (
    <UI.PaginationBox>
      <Pagination
        activePage={page}
        itemsCountPerPage={perPage}
        totalItemsCount={total}
        pageRangeDisplayed={5}
        prevPageText='<'
        nextPageText='>'
        onChange={handlePageChange}
      />
    </UI.PaginationBox>
  );
};

export default Paging;
