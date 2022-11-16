import React from "react";

const Pagination = ({ postPerPage, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPosts / postPerPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center">
      {pageNumbers.map((page, index) => {
        return (
          <button
            key={index}
            className="mx-2 text-lg border border-black rounded-2xl px-2"
            onClick={() => {
              setCurrentPage(page), console.log(totalPosts, postPerPage);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
