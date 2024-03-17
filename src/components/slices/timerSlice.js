import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    time: "00:00",
    initialTime: "",
    isRunning: false,
  },
  reducers: {
    setTime(state, action) {
      state.time = action.payload;
    },
    setInitialTime(state, action) {
      state.initialTime = action.payload;
    },
    setIsRunning(state, action) {
      state.isRunning = action.payload;
    },
  },
});

export const { setTime, setInitialTime, setIsRunning } = timerSlice.actions;
