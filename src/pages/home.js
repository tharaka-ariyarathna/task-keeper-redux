import React, {useState} from "react";
import ShowTask from "../components/show_task/showTask";
import { setEdit } from "../actions/taskAction";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(setEdit(null));
  };

  return (
    <div className="app container-fluid">
      {showMessage 
      ? <div style={{margineLeft:"50%", color:"red"}}>
        <h5>Task Deleted Successfully</h5>
      </div> : ""}
      <div className="row mt-5">
        <div className="d-flex justify-content-center title ">
          <p className="m-2">TASK KEEPER</p>
        </div>
        <div className="my-4" style={{ marginLeft: "44%" }}>
          <Link to="/tasks/add">
            <button
              className="btn btn-primary m-2"
              style={{ width: "10%" }}
              onClick={handleButtonClick}
            >
              Add Task
            </button>
          </Link>
        </div>
      </div>
      <div className="row mt-5">
        <ShowTask setShowMessage={setShowMessage}/>
      </div>
    </div>
  );
};

export default Home;
