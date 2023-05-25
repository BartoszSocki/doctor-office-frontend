import { useState } from "react";

import type Credentials from "@Interfaces/Credentials";
import type Role from "@Types/Role";
import { isNotEmpty } from "@Utils/StringUtils";
import {
  role as tokenRole,
  saveToken,
  deleteToken,
  isTokenValid,
} from "@Utils/TokenUtils";
import { UserAPI } from "@Utils/ApiUtils";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    isNotEmpty(localStorage.getItem("token")) && isTokenValid()
  );
  const [role, setRole] = useState<Role>(tokenRole());

  const login = async (credentials: Credentials, onSuccess: () => void) => {
    const res = await UserAPI.post("/token", credentials);

    if (!("token" in res.data)) {
      setIsAuthenticated(false);
      setRole("ANONYMOUS");
      return;
    }

    setIsAuthenticated(true);
    saveToken(res.data.token);
    setRole(tokenRole());
    onSuccess();
  };

  const logout = (onSuccess: () => void) => {
    setIsAuthenticated(false);
    setRole("ANONYMOUS");

    deleteToken();
    onSuccess();
  };

  return { isAuthenticated, role, login, logout };
};

export default useAuth;
