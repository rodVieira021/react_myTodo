import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/taskSlice";

const Task = ({
  task,
  index,
  taskTitle,
  setTaskTitle,
  taskInput,
  setTaskInput,
  taskDate,
  setTaskDate,
  tasks,
}) => {
  const dispatch = useDispatch();
  const [checkbox, setCheckBox] = useState(false);

  const editTaskNew = () => {
    setTaskTitle(task.title);
    setTaskInput(task.task);
    setTaskDate(task.date);
    dispatch(deleteTask(task.id));
  };

  return (
    <div key={index} className="task-container flex aic">
      <div className=" task-radio-container flex">
        <input
          type="checkbox"
          className="check"
          defaultChecked={checkbox}
          onChange={() => setCheckBox(!checkbox)}
        />
        <div
          className="p-task"
          style={{
            textDecorationLine: checkbox ? "line-through" : "",
            color: checkbox ? "rgba(191, 178, 178, 0.752)" : "",
          }}
        >
          {
            <div className="task-div">
              <h2 className="t-title">{task.title}</h2>
              <p className="t-task">{task.task} </p>
              <p className="t-date">
                Due in:{" "}
                {Math.ceil((task.date - new Date()) / 1000 / 60 / 60 / 24)}{" "}
                day(s) left
                


              </p>
            </div>
          }
        </div>
      </div>
      <div className="btn-task-container">
        <button className="btn-edit" onClick={() => editTaskNew()}>
          Edit
        </button>
        <button
          className="btn-delete"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
