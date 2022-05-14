import { createSlice } from "@reduxjs/toolkit";

const robotsSlice = createSlice({
  name: "robots",
  initialState: [],
  reducers: {
    loadRobots: (state, action) => [...action.payload],
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;

export default robotsSlice.reducer;
