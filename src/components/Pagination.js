import React from "react";
import Pagination from "react-bootstrap/Pagination";
const Pages = ({ numberOfHotels, hotelPerPage, changePage, currentPage }) => {
  let pages = [];
  for (let i = 1; i < Math.ceil(numberOfHotels / hotelPerPage + 1); i++) {
    pages.push(
      <Pagination.Item
        className = "mt-2"
        key={i}
        active={i === currentPage}
        onClick={() =>
          changePage((i-1) * hotelPerPage, (i) * hotelPerPage, i)
        }
      >
        {i}
      </Pagination.Item>
    );
  }
  return <Pagination>{pages}</Pagination>;
};

export default Pages;
