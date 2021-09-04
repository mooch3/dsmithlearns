import { useState } from "react";
import Card from "./Card";
import CardContent from "./CardContent";
import classes from "./Pagination.module.css";

const Pagination = ({ data, pageLimit, dataLimit }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPrevPage = () => {
    if (currentPage - 1 < 1) return;
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = +event.target.textContent;
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className={classes.posts}>
      <h1>Learning and Stuff</h1>
      <p>A look into what I am learning about, my thoughts, and daily life.</p>
      {getPaginatedData().map((data, index) => (
        <Card key={data.slug.current}>
          <CardContent
            title={data.title}
            date={data.publishedAt}
            blocks={data.body}
          />
        </Card>
      ))}

      <div className={classes.pagination}>
        <button
          onClick={goToPrevPage}
          className={`${classes.prev} ${
            currentPage === 1 ? classes.disabled : ""
          }`}
        >
          prev
        </button>
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`${classes.paginationItem} ${
              currentPage === item ? classes.active : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`${classes.next} ${
            currentPage === pages ? classes.disabled : ""
          }`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
