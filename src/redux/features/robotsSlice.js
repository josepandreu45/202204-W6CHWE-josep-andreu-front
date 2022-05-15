import { createSlice } from "@reduxjs/toolkit";

const robotsSlice = createSlice({
  name: "robots",
  initialState: [],
  reducers: {
    loadRobots: (robots, action) => [...action.payload],
    deleteRobot: (robots, action) =>
      robots.filter((robot) => robot._id !== action.payload),
  },
});

export const {
  loadRobots: loadRobotsActionCreator,
  deleteRobot: deleRobotActionCreator,
} = robotsSlice.actions;

export default robotsSlice.reducer;
