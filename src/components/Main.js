import React from "react";
import { addTask } from "../features/taskSlice";
import { useSelector, useDispatch } from "react-redux";
import { taskArr } from "../features/taskSlice";
import { useState } from "react";
import Task from "../components/Task";

const Main = () => {
  const tasks = useSelector(taskArr);
  const dispatch = useDispatch();
  const [taskInput, setTaskInput] = useState("");

  const addTaskReset = () => {
    dispatch(addTask({ id: tasks.length + 1, task: taskInput }));
    setTaskInput(" ");
  };

  return (
    <div>
      <div className="container">
        <h2 className="header">My Todo</h2>
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder={" Add a new task..."}
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button className="btn-add" onClick={() => addTaskReset()}>
            Add Task
          </button>
        </div>
      </div>
      {tasks.map((task, index) => {
        return (
          <Task
            task={task}
            index={index}
            taskInput={taskInput}
            setTaskInput={setTaskInput}
          />
        );
      })}
    </div>
  );
};

export default Main;
