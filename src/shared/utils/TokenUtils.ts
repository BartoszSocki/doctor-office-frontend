import type JwtData from "@Interfaces/JwtData";
import type Role from "@Types/Role";
import jwt from "jwt-decode";

const role = (): Role => {
  const token = localStorage.getItem("token");
  return token !== null ? jwt<JwtData>(token).role : "ANONYMOUS";
};

const getToken = (): string => {
  return localStorage.getItem("token") ?? ":(";
};

const saveToken = (token: string) => {
  localStorage.setItem("token", token);
};

const deleteToken = () => {
  localStorage.removeItem("token");
};

const isTokenValid = () => {
  const token = jwt<JwtData>(getToken());
  if (!("exp" in token)) {
    return false;
  }

  const nowInSeconds = Date.now() / 1000;
  return token.exp >= nowInSeconds;
};

export { role, saveToken, deleteToken, getToken, isTokenValid };
