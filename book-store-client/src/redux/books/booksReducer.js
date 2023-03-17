import { BOOK_ADDED, BOOK_DELETED, BOOK_UPDATED, LOADED } from "./booksActionType";
import { initialState } from "./initialState";


// Create reducer function
const booksReducer = (state = initialState, action) => {
    const newState = structuredClone(state)

    switch (action.type) {
        case LOADED:
            return action.payload;

        case BOOK_ADDED:
            newState.push(action.payload)
            return newState;

        case BOOK_DELETED:
            return newState.filter(book => book.id !== action.payload);

        case BOOK_UPDATED:
            const updatedBook = action.payload.updateInfo;
            const index = newState.findIndex(book => book.id === action.payload.id);

            if (!index || index) {
                newState[index] = updatedBook;
            }

            return newState;

        default:
            return state;
    }
}


export default booksReducer;