import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from "../features/taskSlice";

const store = configureStore({
  reducer: {
    task: taskSliceReducer,
  },
});

export default store;
