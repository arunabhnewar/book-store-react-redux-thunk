import { addBookAction } from "../booksActions";

const addBook = (bookInfo) => {
    return async (dispatch,) => {
        const response = await fetch('http://localhost:9000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookInfo)
        })
        const book = await response.json();
        // console.log(books);

        if (book) {
            dispatch(addBookAction(book));
        }
    }
}

export default addBook;