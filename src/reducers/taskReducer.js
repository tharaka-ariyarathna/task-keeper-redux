const taskReducer = (state = {tasks:[], edit:null}, action) => {
    switch(action.type){
        case "ADD_TASK" :
            return {...state, tasks : [action.data, ...state.tasks]} ;
        case "DELETE_TASK" :
            return {...state, tasks : state.tasks.filter((_,index)=> index != action.data)} ;
        case "SET_EDIT" :
            return {...state, edit : action.data}
        default :
            return state
    }
}

export default taskReducer ;