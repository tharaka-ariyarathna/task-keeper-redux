const taskReducer = (state = {tasks:[]}, action) => {
    switch(action.type){
        case "ADD_TASK" :
            return {...state, tasks : [action.data, ...state.tasks]} ;
        default :
            return state
    }
}

export default taskReducer ;