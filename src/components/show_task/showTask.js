import React from "react";
import Task from '../task/task' ;
import {taskListDummy} from '../../data/taskList' ;
import "./showTask.css";
import { useSelector } from "react-redux";

const ShowTask = () => {
  const taskList = useSelector(state => state.tasks) ;
  console.log(taskList) ;

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
