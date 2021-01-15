import * as actionTypes from './action';

const initialState = {
    counter : 0,
    results:[]
    
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case actionTypes.INC:
            return {
                ...state,
                counter:state.counter+1
            } 
        case actionTypes.DEC:
            return {
                ...state,
                counter:state.counter-1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter:state.counter+ action.value
            } 
        case actionTypes.SUB:
            return {
                ...state,
                counter:state.counter- action.value
            }  
        case actionTypes.STORE_VALUE:
            return{
                ...state,
                results:state.results.concat({id: new Date(), value: state.counter})
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