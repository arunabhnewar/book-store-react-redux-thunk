import { BOOK_SEARCH } from "./actionType";
import { initialState } from "./initialState";


const searchReducer = (state = initialState, action) => {

    const newState = structuredClone(state)

    switch (action.type) {
        case BOOK_SEARCH:
            newState.searchName = action.payload;
            return newState;

        default:
            return state;
    }
}


export default searchReducer;