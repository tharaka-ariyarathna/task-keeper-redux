const taskReducer = (state = { tasks: [], edit: null }, action) => {
  switch (action.type) {
    case "SET_TASK_LIST":
      return { ...state, tasks: action.data };
    case "ADD_TASK":
      return { ...state, tasks: [action.data, ...state.tasks] };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => task.id != action.data),
      };
    case "SET_EDIT":
      return { ...state, edit: action.data };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id == action.data.id) {
            return action.data.data;
          } else {
            return task;
          }
        }),
      };
    default:
      return state;
  }
};

export default taskReducer;
