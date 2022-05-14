import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadRobotsThunk } from "./redux/thunks/thunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);
  return <div className="App"></div>;
}

export default App;
