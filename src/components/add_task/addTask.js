import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./addTask.css";

const AddTask = () => {
  const task = useSelector(state => state.tasks) ;
  console.log(task) ;
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
    handleClear();
  };

  useEffect(() => {}, []);

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
