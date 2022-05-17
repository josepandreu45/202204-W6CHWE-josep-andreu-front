import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./components/Form/LoginForm";
import Header from "./components/Header/Header";
import RobotsList from "./components/RobotsList/RobotsList";
import { loadRobotsThunk } from "./redux/thunks/thunks";
import { loginActionCreator } from "./redux/features/usersSlice";
import jwtDecode from "jwt-decode";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const userInfo = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
    }
  }, [dispatch]);
  dispatch(loadRobotsThunk());
  return (
    <div className="App">
      <Header />
      <LoginForm />
      <RobotsList />
    </div>
  );
}

export default App;
