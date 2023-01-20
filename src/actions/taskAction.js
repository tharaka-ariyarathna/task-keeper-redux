export const addTask = (data) => (dispatch) => {
    dispatch({type: "ADD_TASK", data: data}) ;
}