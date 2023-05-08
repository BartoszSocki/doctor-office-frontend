import { useState } from "react";
import jwt from "jwt-decode";
import type JwtData from "shared/interfaces/JwtData";
import type Credentials from "shared/interfaces/Credentials";
import { isNotEmpty } from "shared/utils/StringUtils";
import axios from "axios";
import type Role from "shared/types/Role";

const TOKEN_URL = import.meta.env.VITE_API_URL + "/token";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    isNotEmpty(localStorage.getItem("token"))
  );
  const [role, setRole] = useState<Role>("ANONYMOUS");

  const login = async (credentials: Credentials, onSuccess: () => void) => {
    const res = await axios.post(TOKEN_URL, credentials);

    if (!("token" in res.data)) {
      setIsAuthenticated(false);
      setRole("ANONYMOUS");
      return;
    }

    localStorage.setItem("token", res.data.token);
    const token: JwtData = jwt(res.data.token);

    setIsAuthenticated(true);
    setRole(token.role);
    onSuccess();
  };

  const logout = (onSuccess: () => void) => {
    setIsAuthenticated(false);
    setRole("ANONYMOUS");

    localStorage.removeItem("token");
    onSuccess();
  };

  return { isAuthenticated, role, login, logout };
};

export default useAuth;
