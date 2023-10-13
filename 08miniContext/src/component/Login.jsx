import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const handleSubmit = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState("");
    
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={usernmae}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        pattern="password"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
