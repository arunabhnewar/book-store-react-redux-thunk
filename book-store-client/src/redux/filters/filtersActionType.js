import { STATUS_CHANGED } from "./filtersActions";



// Filter Status Changed Action Create
export const statusChangedAction = (status) => {
    return {
        type: STATUS_CHANGED,
        payload: status,
    }
};