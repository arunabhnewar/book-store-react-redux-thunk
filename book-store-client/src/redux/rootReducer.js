import { combineReducers } from "redux";
import booksReducer from "./books/booksReducer";
import editReducer from "./edit/editReducer";
import filtersReducer from "./filters/filtersReducer";
import searchReducer from "./search/searchReducer";


// Create RootReducer function use combine reducer function
const rootReducer = combineReducers({
    books: booksReducer,
    filters: filtersReducer,
    search: searchReducer,
    editing: editReducer,
})

export default rootReducer;