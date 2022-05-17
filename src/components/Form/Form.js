import { useState } from "react";

const LoginForm = () => {
  const blankFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankFields);

  const changeData = (event) => {
    setFormData({ ...formData, [event.taget.id]: event.target.value });
  };

  return (
    <form autoComplete="off" noValidate>
      <label htmlFor="username" />
      <input id="username" value={formData.username} onChange={changeData} />
      <label htmlFor="password" />
      <input id="password" value={formData.password} onChange={changeData} />
      <button>Log in</button>
    </form>
  );
};

export default LoginForm;
