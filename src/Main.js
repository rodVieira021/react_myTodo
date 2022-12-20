import React from "react";
import { addTask, deleteTask, completeTask } from "./features/taskSlice";
import { useSelector, useDispatch } from "react-redux";
import { taskArr } from "./features/taskSlice";
import { useState } from "react";

const Main = () => {
  const tasks = useSelector(taskArr);
  const dispatch = useDispatch();
  const [taskInput, setTaskInput] = useState("");

  return (
    <div>
      <div className="container">
        <h2 className="header">My Todo</h2>
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder={" Add a new task"}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            className="btn-add"
            onClick={() => dispatch(addTask(taskInput))}
          >
            Add Task
          </button>
        </div>
      </div>
      {tasks.map((task, index) => {
        return (
          <div key={index} className="task-container flex aic">
            <div className=" task-radio-container flex">
              <input type="radio" />
              <p className="p-task">{task}</p>
            </div>
            <div className="btn-task-container">
              <button className="btn-edit">Edit</button>
              <button className="btn-delete">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
