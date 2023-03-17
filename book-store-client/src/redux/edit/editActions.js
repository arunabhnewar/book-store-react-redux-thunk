import { EDITED } from "./actionType";


// Book Edit Action Create
export const editAction = (updateInfo) => {
    return {
        type: EDITED,
        payload: updateInfo,
    }
};