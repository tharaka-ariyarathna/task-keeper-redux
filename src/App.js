import React from "react";
import AddTask from "./components/add_task/addTask";
import ShowTask from "./components/show_task/showTask";
import "./App.css";

const App = () => {
  return (
  <div className="app container-fluid">
    <div className="row mt-4">
        <div className="d-flex justify-content-center title ">
            <p className="m-2">TASK KEEPER</p>
        </div>
    </div>
    <AddTask />
    <ShowTask />
  </div>
  );
};

export default App;
