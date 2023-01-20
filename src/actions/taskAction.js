import { useSelector } from "react-redux";

export const addTask = (data) => (dispatch) => {
    dispatch({type: "ADD_TASK", data: data}) ;
}

export const deleteTask = (id) => (dispatch) => {
    const taskList = useSelector(state => state.tasks) ;
    taskList = taskList.filter((_, index) => index == id) ;
    dispatch({type:"DELETE_TASK", data: taskList}) ;
}