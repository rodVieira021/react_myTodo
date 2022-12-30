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
    },
  },
});

export default taskSlice.reducer;
export const taskArr = (state) => state.task.allTasks;
export const { addTask, deleteTask } = taskSlice.actions;
