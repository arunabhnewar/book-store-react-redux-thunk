import React from "react";
import BooksFilter from "./BooksFilter";
import BooksList from "./BooksList";

const StoreHeader = () => {
  return (
    <div className='order-2 xl:-order-1'>
      <BooksFilter />
      <BooksList />
    </div>
  );
};

export default StoreHeader;
