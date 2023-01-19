import React from "react";
import "./showTask.css";

const ShowTask = ({ taskList, setTaskList, setEdit }) => {
  const handleDelete = (e) => {
    setTaskList((prev) => prev.filter((_, index) => index != e.target.id));
  };

  const handleEdit = (e) => {
    setEdit(e.target.id) ;
  }

  return (
    <>
      {taskList.length !== 0 && (
        <div className="showtask">
          {taskList.map((task, index) => {
            return (
              <div
                className="d-flex task m-3"
                style={{ alignItems: "center" }}
                key={index}
              >
                <span>{task.title}</span>
                <div style={{ display: "inline-block" }}>
                  <button
                    type="button"
                    className="btn btn-success btn-sm m-2 px-3"
                    id={index}
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm m-2"
                    id={index}
                    onClick={handleDelete}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ShowTask;
