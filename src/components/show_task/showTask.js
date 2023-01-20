import React from "react";
import Task from '../task/task' ;
import { useSelector, useDispatch } from "react-redux";
import {deleteTask, setEdit} from "../../actions/taskAction";
import { Link } from "react-router-dom";
import "./showTask.css";

const ShowTask = ({setShowMessage}) => {
  const {tasks, edit} = useSelector(state => state) ;
  const dispatch = useDispatch() ;

  const handleDelete = (e) => {
    setShowMessage(prev => !prev) ;
    if(!edit){
      dispatch(deleteTask(e.target.id)) ;
      setTimeout(() => {
        setShowMessage(prev => !prev) ;
      }, 3000)
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
