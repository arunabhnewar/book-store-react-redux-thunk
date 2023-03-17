import { deleteAction } from "../booksActions";

const deleteBook = (id) => {
    return async (dispatch,) => {
        await fetch(`http://localhost:9000/books/${id}`, {
            method: 'DELETE',
        })

        dispatch(deleteAction(id));
    }
}

export default deleteBook;