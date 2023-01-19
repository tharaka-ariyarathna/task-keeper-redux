import React, { useState } from "react";
import AddTask from "./components/add_task/addTask";
import ShowTask from "./components/show_task/showTask";
import "./App.css";

const App = () => {
  return (
    <div className="app container-fluid">
      <div className="row mt-5">
        <div className="d-flex justify-content-center title ">
          <p className="m-2">TASK KEEPER</p>
        </div>
      </div>
      <div className="row mt-5">
        <AddTask />
      </div>
      <div className="row mt-5">
        <ShowTask />
      </div>
    </div>
  );
};

export default App;
