import * as actionType from './actionTypes';

export const saveResult = (res) =>{
    return {
        type: actionType.STORE_VALUE,
        result:res
    }
}
 
export const storeValue = (result) => {   
    return dispatch => {
        setTimeout( ()=>{
            dispatch(saveResult(result))
        },2000);
    }
}
 
export const deleteValue = (id) => {
    return {
        type: actionType.DELETE_VALUE,
        resultIdStr:id
    }
}
  