import { useState } from "react";

const TOKEN_URL = import.meta.env.VITE_API_URL + "/token";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState("ANONYMOUS");

  const login = (username: string, password: string) => {
    console.log({ username, password });
    setIsAuthenticated(true);
    console.log(TOKEN_URL);
    setRole("TODO");
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole("ANONYMOUS");
  };

  return { isAuthenticated, role, login, logout };
}

export default useAuth;
