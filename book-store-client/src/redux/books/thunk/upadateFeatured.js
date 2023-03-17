import { updateAction } from "../booksActions";

const updateFeatured = (id, updatedData) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
        const book = await response.json();
        // console.log(book);

        if (book?.id) {
            dispatch(updateAction(book.id, book))
        };
    };
}

export default updateFeatured;