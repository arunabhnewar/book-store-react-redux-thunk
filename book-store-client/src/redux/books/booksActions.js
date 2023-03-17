import { BOOK_ADDED, BOOK_DELETED, BOOK_UPDATED, LOADED } from "./booksActionType";

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


// Delete Action Create
export const deleteAction = (id) => {
    return {
        type: BOOK_DELETED,
        payload: id,
    }
};


// Update Action Create
export const updateAction = (id, updateInfo) => {
    return {
        type: BOOK_UPDATED,
        payload: { id, updateInfo },
    }
};







