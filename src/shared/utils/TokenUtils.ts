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

export { role, saveToken, deleteToken, getToken };
