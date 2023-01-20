import React from "react";
import Task from '../task/task' ;
import {taskList} from '../../data/taskList' ;
import "./showTask.css";

const ShowTask = () => {

  const handleDelete = (e) => {
    
  };

  const handleEdit = (e) => {
    
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
