import React, { useEffect, useState } from "react";
import "./addTask.css";

const AddTask = ({ setTaskList, taskList, edit, setEdit }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData((prev) => {
      return { ...prev, title: "", description: "" };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!edit){
      setTaskList([...taskList, formData]);
      handleClear();
    }else{
      setTaskList(prev =>{
        return prev.map((task, index) => {
          if(index == Number(edit)){
            return formData ;
          }else{
            return task ;
          }
        })
      })
      setEdit(null) ;
      handleClear();
    }
  };

  useEffect(() => {
    if(edit){
      setFormData(taskList[Number(edit)])
    }
  }, [edit])

  return (
    <div className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          className="mt-4"
          type="text"
          placeholder="Title"
          value={formData.title}
          style={{ width: "70%", marginLeft: "15%", border: "1px solid black" }}
          name="title"
          onChange={handleInputChange}
          required
        />
        <textarea
          rows={4}
          className="mt-4"
          style={{
            width: "70%",
            marginLeft: "15%",
            display: "block",
            border: "1px solid black",
          }}
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <div
          className="d-flex justify-content-end"
          style={{ marginRight: "15%" }}
        >
          <button
            type="button"
            className="btn btn-secondary btn-sm m-2 px-3"
            onClick={handleClear}
          >
            Clear
          </button>
          <button type="submit" className="btn btn-primary btn-sm m-2">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
