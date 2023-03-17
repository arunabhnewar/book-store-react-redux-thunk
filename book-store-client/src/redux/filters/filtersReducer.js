import { STATUS_CHANGED } from "./filtersActions";
import { initialState } from "./initialState";

// Create reducer function
const filtersReducer = (state = initialState, action) => {
    const newState = structuredClone(state)

    switch (action.type) {
        case STATUS_CHANGED:

            return {
                newState,
                status: action.payload,
            }

        default:
            return state;
    }
}

export default filtersReducer;