import React from "react";
import { addTask, loadTask } from "../features/taskSlice";
import { useSelector, useDispatch } from "react-redux";
import { taskArr } from "../features/taskSlice";
import { useState, useEffect } from "react";
import Task from "../components/Task";
import plus from "../images/plusIcon.png";
import { format } from "date-fns";

const Main = () => {
  let tasks = useSelector(taskArr);
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskInput, setTaskInput] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("task date: ", format(new Date(taskDate), "dd/mm/yyyy"));
    // console.log("todays date: ", format(new Date(), "dd/mm/yyyy"));
    // console.log(new Date() - new Date(taskDate));
    if (
      format(new Date(taskDate), "dd/mm/yyyy") >=
      format(new Date(), "dd/mm/yyyy")
    ) {
      const taskObj = {
        id: tasks.length + 1,
        title: taskTitle.toUpperCase(),
        task: taskInput,
        date: taskDate,
      };

      dispatch(addTask(taskObj));
      localStorage.setItem("tasks", JSON.stringify([...tasks, taskObj]));
      setTaskTitle("");
      setTaskInput("");
      setTaskDate("");
    } else {
      setTaskDate("");
      alert("Please add a date in the future!");
    }
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
          <label>Title:</label>
          <input
            required
            className="input-title"
            type="text"
            value={taskTitle}
            onChange={(a) => setTaskTitle(a.target.value)}
          />
          

          <label> Task :</label>
          <input
            required
            className="input-task"
            type="text"
            value={taskInput}
            onChange={(b) => setTaskInput(b.target.value)}
          />

          <label> Deadline: </label>
          <input
            required
            className="input-date"
            type="date"
            value={taskDate}
            onChange={(c) => setTaskDate(c.target.value)}
          />
          <button className="btn-submit" type="submit">
            <img src={plus} className="icon-plus" alt="icon" />
          </button>
        </form>
      </div>
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
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
