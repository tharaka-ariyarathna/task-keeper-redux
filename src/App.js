import React, { useState } from "react";
import AddTask from "./components/add_task/addTask";
import ShowTask from "./components/show_task/showTask";
import "./App.css";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [edit, setEdit] = useState(null);
  console.log(taskList);
  console.log(edit) ;

  return (
    <div className="app container-fluid">
      <div className="row mt-5">
        <div className="d-flex justify-content-center title ">
          <p className="m-2">TASK KEEPER</p>
        </div>
      </div>
      <div className="row mt-5">
        <AddTask
          setTaskList={setTaskList}
          taskList={taskList}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
      <div className="row mt-5">
        <ShowTask
          taskList={taskList}
          setTaskList={setTaskList}
          setEdit={setEdit}
        />
      </div>
    </div>
  );
};

export default App;
