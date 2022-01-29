import {ADD,DELETE,CHECK} from "./action-type"

export const addHandler = (List) => {

    return {
        type: ADD,
        payload:List
    }
}
export const deleteHandler = (ID) => {

    return {
        type: DELETE,
        payload:ID
    }
}
export const checkHandler = (List) => {

    return {
        type: CHECK,
        payload:List
    }
}