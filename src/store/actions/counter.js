import * as actionType from '../actions/actionTypes';

export const increment = () => {
    return {
        type: actionType.INC
    }
} 
export const decrement = () => {
    return {
        type: actionType.DEC
    }
} 
export const add = (value) => {
    return {
        type: actionType.ADD,
        value:value
    }
}
 
export const sub = (value) => {
    return {
        type: actionType.SUB,
        value:value
    }
}
