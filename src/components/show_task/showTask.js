import React from "react";
import Task from '../task/task' ;
import { useSelector, useDispatch } from "react-redux";
import {deleteTask, setEdit} from "../../actions/taskAction";
import "./showTask.css";

const ShowTask = () => {
  const {tasks, edit} = useSelector(state => state) ;
  const dispatch = useDispatch() ;

  const handleDelete = (e) => {
    if(!edit){
      dispatch(deleteTask(e.target.id)) ;
    }
  };

  const handleEdit = (e) => {
    dispatch(setEdit(e.target.id)) ;
  }

  return (
    <>
      {tasks.length !== 0 && (
        <div className="showtask">
          {tasks.map((task, index) => {
            return (
                <>
                    <Task task={task} key={index} index={index} handleEdit={handleEdit} handleDelete={handleDelete}/>
                </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ShowTask;
