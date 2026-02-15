import { useState } from "react";

const LoginForm = () => {
  // useState
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // HandleLogin Form
  const handleLogin = (event) => {
    event.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  // handleLogout
  const handleLogout = () => {
    setUsername("");
    setPassword("");
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <>
        <h1>Welcome back {username}</h1>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          placeholder="enter your username"
          required
        />{" "}
        <br />
        <label htmlFor="password">Username</label>
        <input
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="enter your password"
          required
        />{" "}
        <br />
        <button type="submit">Login</button>
      </>
    </form>
  );
};

export default LoginForm;
