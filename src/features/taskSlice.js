import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    allTasks: [],
  },

  reducers: {
    addTask: (state, action) => {

      state.allTasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.allTasks = state.allTasks.filter((task) => {
        return task.id !== action.payload;
      });
      localStorage.setItem("tasks", JSON.stringify([...state.allTasks]));
    },
    loadTask: (state, action) => {
      state.allTasks = JSON.parse(localStorage.getItem("tasks"));
    },
  },
});

export default taskSlice.reducer;
export const taskArr = (state) => state.task.allTasks;
export const { addTask, deleteTask, loadTask, liveDate } = taskSlice.actions;
