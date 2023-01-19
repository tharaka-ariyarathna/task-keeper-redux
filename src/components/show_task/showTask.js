import React from "react";
import "./showTask.css";

const ShowTask = ({ taskList }) => {
  return (
    <>
      {taskList.length !== 0 && (
        <div className="showtask">
          {taskList.map((task) => {
            return (
              <div className="d-flex task m-3" style={{ alignItems: "center" }}>
                <span>{task.title}</span>
                <div style={{ display: "inline-block" }}>
                  <button
                    type="button"
                    className="btn btn-success btn-sm m-2 px-3"
                  >
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger btn-sm m-2">
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
