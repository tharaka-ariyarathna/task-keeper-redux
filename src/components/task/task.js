import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../show_task/showTask.css";

const Task = ({ task, index, handleEdit, handleDelete }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div className="task m-3" onClick={handleClick}>
      <div className="d-flex " style={{ alignItems: "center" }} key={index}>
        <span className="ml-1" style={{ alignItems: "center" }}>
          {task.title}
        </span>
        <div className="buttondiv">
          <Link to="/tasks/add">
            <button
              type="button"
              className="btn btn-success btn-sm m-2 px-3"
              id={task.id}
              onClick={handleEdit}
            >
              Edit
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-danger btn-sm m-2"
            id={task.id}
            onClick={handleDelete}
          >
            delete
          </button>
        </div>
      </div>
      {clicked && (
        <div className="ml-1" style={{ margineLeft: "5%" }}>
          {task.description}
        </div>
      )}
    </div>
  );
};

export default Task;
