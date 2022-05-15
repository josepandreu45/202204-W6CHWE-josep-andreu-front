import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RobotsList from "./components/RobotsList/RobotsList";
import { loadRobotsThunk } from "./redux/thunks/thunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>ROBOTS</h1>
      <RobotsList />
    </div>
  );
}

export default App;
