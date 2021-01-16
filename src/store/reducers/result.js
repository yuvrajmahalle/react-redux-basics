import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility'

const initialState = {
    counter : 0,
    results:[]
    
}

const deleteResult = (state, action) =>{
    const updatedArray = state.results.filter(result => result.id !== action.resultIdStr);
    return updateObject(state,{results :updatedArray});
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case actionTypes.STORE_VALUE:
            return updateObject(state,{results:state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_VALUE:
            return deleteResult(state,action);
    }
    return state;
}


export default reducer;