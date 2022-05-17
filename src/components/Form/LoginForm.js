import { useState } from "react";
import { useDispatch } from "react-redux";
import loginThunk from "../../redux/thunks/usersThunks";

const LoginForm = () => {
  const blankFields = {
    username: "",
    password: "",
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(blankFields);

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const submitLogin = (event) => {
    event.preventDefault();
    dispatch(loginThunk(formData));
  };

  return (
    <form noValidate onSubmit={submitLogin}>
      <label htmlFor="username">UserName:</label>
      <input
        id="username"
        type="text"
        value={formData.username}
        onChange={changeData}
        autoComplete="off"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={formData.password}
        onChange={changeData}
        autoComplete="off"
      />
      <input type="submit" value={"Login"} />
    </form>
  );
};

export default LoginForm;
