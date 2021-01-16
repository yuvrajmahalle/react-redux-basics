export const INC = 'INC';
export const DEC = 'DEC';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const STORE_VALUE = 'STORE_VALUE';
export const DELETE_VALUE = 'DELETE_VALUE';


export const increment = () => {
    return {
        type: INC
    }
} 
export const decrement = () => {
    return {
        type: DEC
    }
} 
export const add = (value) => {
    return {
        type: ADD,
        value:value
    }
}
 
export const sub = (value) => {
    return {
        type: SUB,
        value:value
    }
}

export const saveResult = (res) =>{
    return {
        type: STORE_VALUE,
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
        type: DELETE_VALUE,
        resultIdStr:id
    }
}
  