import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "@Hooks/useAuth";
import type Credentials from "@Interfaces/Credentials";

import "./style.css";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  });

  const handleLogin = async () => {
    await login(credentials, () => navigate("/dashboard"));
  };

  return (
    <div className="page-wrapper">
      <div className="login-wrapper">
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <h1>Login</h1>
          <section className="login-section">
            <label className="login-label" htmlFor="username-input">
              email
            </label>
            <input
              className="login-input"
              id="username-input"
              name="username-input"
              type="text"
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
          </section>
          <section className="login-section">
            <label className="login-label" htmlFor="password-input">
              password
            </label>
            <input
              className="login-input"
              id="password-input"
              name="password-input"
              type="password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </section>
          <button className="login-btn-login" onClick={handleLogin}>
            login
          </button>
        </form>
        <Link to={"/register/client"} className="login-btn-register">
          register as client
        </Link>
        <Link to={"/register/doctor"} className="login-btn-register">
          register as doctor
        </Link>
      </div>
    </div>
  );
};

export default Login;
