import { BOOK_ADDED, BOOK_DELETED, BOOK_EDITED, BOOK_SEARCH, LOADED } from "./booksActionType";

// Loaded Action Create
export const loadAction = (books) => {
    return {
        type: LOADED,
        payload: books,
    }
};


// Add Book Action Create
export const addBookAction = (bookInfo) => {
    return {
        type: BOOK_ADDED,
        payload: bookInfo,
    }
};


// Book Edit Action Create
export const editAction = (bookId, updateInfo) => {
    return {
        type: BOOK_EDITED,
        payload: { id: bookId, updateInfo },
    }
};


// Delete Action Create
export const deleteAction = (id) => {
    return {
        type: BOOK_DELETED,
        payload: id,
    }
};


// Search Action Create
export const searchAction = (books) => {
    return {
        type: BOOK_SEARCH,
        payload: books,
    }
};




