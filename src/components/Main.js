import React from "react";
import { addTask, loadTask } from "../features/taskSlice";
import { useSelector, useDispatch } from "react-redux";
import { taskArr } from "../features/taskSlice";
import { useState, useEffect } from "react";
import Task from "../components/Task";

const Main = () => {
  let tasks = useSelector(taskArr);
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskInput, setTaskInput] = useState("");
  const [taskDate, setTaskDate] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();


    let dueDate = new Date(taskDate);

    const taskObj = {
      id: tasks.length + 1,
      title: taskTitle,
      task: taskInput,
      date: dueDate,
    };
    dispatch(addTask(taskObj));
    localStorage.setItem("tasks", JSON.stringify([...tasks, taskObj]));
    setTaskTitle("");
    setTaskInput("");
    setTaskDate("");
  };

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      dispatch(loadTask());
    } 
  }, []);



  return (
    <div>
      <div className="container">
        <h2 className="header">My Todo</h2>
        <form
          className="input-container grid"
          onSubmit={(e) => submitHandler(e)}
        >
          <label>Task title:</label>
          <input
            className="input-title"
            type="text"
            value={taskTitle}
            onChange={(a) => setTaskTitle(a.target.value)}
          />

          <label> Task description:</label>
          <input
            className="input-task"
            type="text"
            value={taskInput}
            onChange={(b) => setTaskInput(b.target.value)}
          />

          <p> Today's date: </p>
          <p></p>

          <label> Deadline: </label>
          <input
            className="input-date"
            type="date"
            value={taskDate}
            onChange={(c) => setTaskDate(c.target.value)}
          />

          <button className="btn-add" type="submit">
            Add Task
          </button>
        </form>
      </div>
      {tasks.map((task, index) => {
        return (
          <Task
            tasks={tasks}
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
