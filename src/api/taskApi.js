import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/tasks" });

export const addTaskApi = (data) => API.post("/", data);

export const getAllTasksApi = () => API.get("/");

export const editTAskApi = (id, data) => API.put(`/${id}`, data);

export const deleteTaskApi = (id) => API.delete(`/${id}`);
