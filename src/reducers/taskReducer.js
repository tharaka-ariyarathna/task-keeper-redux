const taskReducer = (state = {tasks:[]}, action) => {
    switch(action.type){
        case "ADD_TASK" :
            return [...state, action.data] ;
        default :
            return state
    }
}

export default taskReducer ;