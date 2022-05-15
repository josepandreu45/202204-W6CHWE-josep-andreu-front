import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import RobotsList from "./components/RobotsList/RobotsList";
import { loadRobotsThunk } from "./redux/thunks/thunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <RobotsList />
    </div>
  );
}

export default App;
