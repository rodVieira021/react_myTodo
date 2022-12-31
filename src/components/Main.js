import React from "react";
import { addTask } from "../features/taskSlice";
import { useSelector, useDispatch } from "react-redux";
import { taskArr } from "../features/taskSlice";
import { useState } from "react";
import Task from "../components/Task";

const Main = () => {
  const tasks = useSelector(taskArr);
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskInput, setTaskInput] = useState("");
  const [taskDate, setTaskDate] = useState("");
  console.log(taskTitle);
  const addTaskReset = (e) => {
    dispatch(
      addTask({
        id: tasks.length + 1,
        title: taskTitle,
        task: taskInput,
        date: taskDate,
      })
    );
    setTaskTitle(" ");
    setTaskInput(" ");
    setTaskDate(" ");
  };

  return (
    <div>
      <div className="container">
        <h2 className="header">My Todo</h2>
        <form
          className="input-container grid"
          onSubmit={(e) => {
            e.preventDefault();
            addTaskReset();
          }}
        >
          <label>
            {"Task title: "}
            <input
              className="input-title"
              type="text"
              value={taskTitle}
              onChange={(a) => setTaskTitle(a.target.value)}
            />
          </label>
          <label>
            {"Task description: "}
            <input
              className="input-task"
              type="text"
              placeholder=""
              value={taskInput}
              onChange={(b) => setTaskInput(b.target.value)}
            />
          </label>
          <label>
            {"Deadline: "}
            <input
              className="input-date"
              type="date"
              value={taskDate}
              onChange={(c) => setTaskDate(c.target.value)}
            />
          </label>
          <button className="btn-add" type="submit">
            Add Task
          </button>
        </form>
      </div>
      {tasks.map((task, index) => {
        return (
          <Task
            task={task}
            index={index}
            taskTitle={taskTitle}
            setTaskTitle={setTaskTitle}
            taskInput={taskInput}
            setTaskInput={setTaskInput}
            taskDate={taskDate}
            setTaskDate={setTaskDate}
          />
        );
      })}
    </div>
  );
};

export default Main;
