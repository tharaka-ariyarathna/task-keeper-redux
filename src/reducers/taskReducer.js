const taskReducer = (state = { tasks: [], edit: null }, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [action.data, ...state.tasks] };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index != action.data),
      };
    case "SET_EDIT":
      return { ...state, edit: action.data };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (index == action.data.id) {
            return action.data.task;
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
