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
      <img
        src="https://cdn0.iconfinder.com/data/icons/movies-8/64/star_wars_hollywood_cinema_film-256.png"
        alt="logo star wars"
      />
      <h1>ROBOTS</h1>
      <RobotsList />
    </div>
  );
}

export default App;
