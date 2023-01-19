import React from "react";
import Task from '../task/task' ;
import "./showTask.css";

const ShowTask = ({ taskList, setTaskList, setEdit }) => {
  const handleDelete = (e) => {
    setTaskList((prev) => prev.filter((_, index) => index != e.target.id));
    setTimeout(() => {
        alert("Item deleted")
    }, 3000);
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
                <>
                    <Task task={task} index={index} handleEdit={handleEdit} handleDelete={handleDelete}/>
                </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ShowTask;
