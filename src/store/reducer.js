const initialState = {
    counter : 0,
    results:[]
    
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case 'INC':
            return {
                ...state,
                counter:state.counter+1
            } 
        case 'DEC':
            return {
                ...state,
                counter:state.counter-1
            }
        case 'ADD':
            return {
                ...state,
                counter:state.counter+ action.value
            } 
        case 'SUB':
            return {
                ...state,
                counter:state.counter- action.value
            }  
        case 'STORE_VALUE':
            return{
                ...state,
                results:state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_VALUE':
            const updatedArray = state.results.filter(result => result.id !== action.resultIdStr);
        return{
            ...state,
            results: updatedArray
        }

    }
    return state;
}


export default reducer;