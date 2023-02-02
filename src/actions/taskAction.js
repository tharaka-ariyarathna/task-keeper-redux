import { useSelector } from "react-redux";
import {
  addTaskApi,
  getAllTasksApi,
  editTAskApi,
  deleteTaskApi,
} from "../api/taskApi";

export const addTask = (task) => async (dispatch) => {
  const { data } = await addTaskApi(task);
  dispatch({ type: "ADD_TASK", data: data });
};

export const getAllTasks = () => async (dispatch) => {
  const { data } = await getAllTasksApi();
  dispatch({ type: "SET_TASK_LIST", data: data });
};

export const deleteTask = (id) => async (dispatch) => {
  await deleteTaskApi(id);
  dispatch({ type: "DELETE_TASK", data: id });
};

export const setEdit = (id) => (dispatch) => {
  dispatch({ type: "SET_EDIT", data: id });
};

export const editTask = (task, id) => async (dispatch) => {
  const { data } = await editTAskApi(id, task);
  dispatch({ type: "EDIT_TASK", data: { data, id } });
};
