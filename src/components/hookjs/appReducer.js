

const appReducer = (state, action) =>{
    switch (action.type){
        case 'add':
            return [
                ...state,
                {
                    id: Date.now(),
                    text: '',
                    completed: false
                }
            ]
        case 'delete':
           return state.filter(item => item.id !== action.payload)
        
        case 'completed':
            return state.map(item => {
                if(item.id === action.payload){
                    return{
                        ...item,
                        completed: !item.completed
                    }
                }
                return item
            })
        case 'reset':
            return action.payload

        default:
            return state;
    }
}


export default appReducer;