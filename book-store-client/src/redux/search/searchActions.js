import { BOOK_SEARCH } from "./actionType";


// Search Action Create
export const searchAction = (searchName) => {
    return {
        type: BOOK_SEARCH,
        payload: searchName,
    }
};