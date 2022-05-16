import axios from "axios";
import {
  deleRobotActionCreator,
  loadRobotsActionCreator,
} from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  const { data: robots } = await axios.get(process.env.REACT_APP_API_URL, {
    headers: {
      Authorization: `${process.env.REACT_APP_TOKEN}`,
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
