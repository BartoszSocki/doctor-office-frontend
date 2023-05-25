import axios from "axios";
import { getToken } from "./TokenUtils";

const DoctorAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/doctor`,
  headers: { Authorization: `Bearer ${getToken() ?? ""}` },
});

const ClientAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/client`,
  headers: { Authorization: `Bearer ${getToken() ?? ""}` },
});

const UserAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

export { DoctorAPI, ClientAPI, UserAPI };
