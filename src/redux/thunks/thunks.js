import axios from "axios";
import {
  deleRobotActionCreator,
  loadRobotsActionCreator,
} from "../features/robotsSlice";

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODI1ZDY2ZDcxNTAyY2Y3MjUxYTQ2NyIsImlhdCI6MTY1MjcyMzc0MX0.Vs-YnDeYSg8j1d7KLDKtAQ7KjlhqFcO2Hh3_go_oQew";

export const loadRobotsThunk = () => async (dispatch) => {
  const { data: robots } = await axios.get(process.env.REACT_APP_API_URL, {
    headers: {
      Authorization: token,
    },
  });
  dispatch(loadRobotsActionCreator(robots));
};

export const deleteRobotThunk = (id) => async (dispatch) => {
  const { data: robot } = await axios.delete(
    `${process.env.REACT_APP_API_URL}/${id}`
  );
  dispatch(deleRobotActionCreator(robot._id));
};
