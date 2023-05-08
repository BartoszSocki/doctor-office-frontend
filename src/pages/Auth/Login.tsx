import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "@Hooks/useAuth";
import type Credentials from "@Interfaces/Credentials";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/dashboard");
  }

  const handleLogin = async () => {
    await login(credentials, () => navigate("/dashboard"));
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="username-input">username</label>
        <input
          id="username-input"
          name="username-input"
          type="text"
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <label htmlFor="password-input">password</label>
        <input
          id="password-input"
          name="password-input"
          type="password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />

        <button onClick={handleLogin}>login</button>
      </form>
      <button>register</button>
    </div>
  );
};

export default Login;
