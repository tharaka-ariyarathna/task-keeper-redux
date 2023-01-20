import { useSelector } from "react-redux";

export const addTask = (data) => (dispatch) => {
    dispatch({type: "ADD_TASK", data: data}) ;
}

export const deleteTask = (id) => (dispatch) => {
    //taskList = taskList.filter((_, index) => index == id) ;
    dispatch({type:"DELETE_TASK", data: id}) ;
}

export const setEdit = (id) => (dispatch) => {
    dispatch({type:"SET_EDIT", data: id}) ;
}

export const editTask = (task, id) => (dispatch) => {
    dispatch({type:"EDIT_TASK", data:{task, id}})
}