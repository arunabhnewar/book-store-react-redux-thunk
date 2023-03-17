import { EDITED } from "./actionType";
import { initialState } from "./initialState";


const editReducer = (state = initialState, action) => {

    let newState = structuredClone(state);

    switch (action.type) {
        case EDITED:
            newState = action.payload;
            return newState;


        default:
            return state;
    }

}

export default editReducer;