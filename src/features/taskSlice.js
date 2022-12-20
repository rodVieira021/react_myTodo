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
    editTask: (state, action) => {},
    completeTask: (state, action) => {},
    deleteTask: (state, action) => {},
  },
});

export default taskSlice.reducer;
export const { addTask, editTask, completeTask, deleteTask } =
  taskSlice.actions;
export const taskArr = (state) => state.task.allTasks;
