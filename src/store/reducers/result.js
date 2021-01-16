import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter : 0,
    results:[]
    
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case actionTypes.STORE_VALUE:
            return{
                ...state,
                results:state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_VALUE:
            const updatedArray = state.results.filter(result => result.id !== action.resultIdStr);
        return{
            ...state,
            results: updatedArray
        }

    }
    return state;
}


export default reducer;