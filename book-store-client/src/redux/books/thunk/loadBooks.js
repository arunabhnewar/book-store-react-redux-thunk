import { loadAction } from "../booksActions";

const loadBooks = () => {
    return async (dispatch,) => {
        const response = await fetch('http://localhost:9000/books')
        const books = await response.json();
        // console.log(books);

        dispatch(loadAction(books));
    }
}

export default loadBooks;