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
  const firstIndexOfLastPage = (pages.length-1)*hotelPerPage;
  return (
  <Pagination>
    <Pagination.First className = "mt-2" onClick={() =>
          changePage(0, hotelPerPage, 1)
        }/>
    <Pagination.Prev className = "mt-2" onClick={() =>
          changePage((currentPage-2) * hotelPerPage, (currentPage-1)*hotelPerPage, currentPage-1)
        }/>
    {pages.filter(item => Math.abs(item.key - currentPage) < 2)}
    <Pagination.Next className = "mt-2" onClick={() =>
          changePage((currentPage) * hotelPerPage, (currentPage+1)*hotelPerPage, currentPage+1)
        }/>
    <Pagination.Last className = "mt-2" onClick={() =>
          changePage(firstIndexOfLastPage,numberOfHotels,pages.length)
        }/>
  </Pagination>);
};

export default Pages;
