import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadBooks from "../../redux/books/thunk/loadBooks";
import BookDetails from "./BookDetails";

const BooksList = () => {
  // Use Selector
  const books = useSelector(state => state.books);
  const filters = useSelector(state => state.filters);

  // Dispatch
  const dispatch = useDispatch();

  // UseEffect
  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  // Status Filter function
  const statusByFilter = book => {
    const { status } = filters;

    switch (status) {
      case "Featured":
        return book.featured;

      default:
        return true;
    }
  };

  return (
    <div className='lws-bookContainer'>
      {books?.filter(statusByFilter)?.map(book => (
        <BookDetails book={book} key={book.id} />
      ))}
    </div>
  );
};

export default BooksList;
