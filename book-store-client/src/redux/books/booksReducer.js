import { BOOK_ADDED, BOOK_DELETED, LOADED } from "./booksActionType";
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
            return newState.filter(book => book.id !== action.payload)

        default:
            return state;
    }
}


export default booksReducer;