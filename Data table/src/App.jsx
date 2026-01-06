
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";

function App() {

  const initialstate = {
    name: "",
    password: "",
    email: ""
  };

  const [data, setData] = useState(initialstate);

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  const { name, password, email } = data;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        name="name"
        value={name}
        onChange={handleChange}
      /><br /><br />

      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleChange}
      /><br /><br />

      <input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={handleChange}
      /><br /><br />

      <input type="submit" />
    </form>
  );
}

export default App;
