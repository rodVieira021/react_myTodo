import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/taskSlice";

const Task = ({ task, index, taskInput, setTaskInput }) => {
  const dispatch = useDispatch();
  const [checkbox, setCheckBox] = useState(false);

  const editTaskNew = () => {
    setTaskInput(task.task);
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
        <p
          className="p-task"
          style={{
            textDecorationLine: checkbox ? "line-through" : "",
            color: checkbox ? "rgba(191, 178, 178, 0.752)" : "",
          }}
        >
          {task.task}
        </p>
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
