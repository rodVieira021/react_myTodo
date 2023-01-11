import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/taskSlice";
import iconEdit from "../images/iconEdit.png";
import iconDelete from "../images/iconDelete.png";

const Task = ({
  task,
  index,
  setTaskTitle,
  setTaskInput,
  setTaskDate,
  taskDate,
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
                Due in :{" "}
                {Math.ceil(
                  (new Date(task.date) - new Date()) / 1000 / 60 / 60 / 24
                )}{" "}
                day(s)
              </p>
            </div>
          }
        </div>
      </div>
      <div className="btn-task-container">
        <img
          src={iconEdit}
          className="icon-edit"
          onClick={() => editTaskNew()}
          alt="logo"
        />
        <img
          src={iconDelete}
          className="icon-delete"
          onClick={() => dispatch(deleteTask(task.id))}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Task;
