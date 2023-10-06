import axios from "axios";
import { getToken } from "./TokenUtils";

const getAuthorization = () => `Bearer ${getToken() ?? ""}`;

const DoctorAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/doctor`,
});

DoctorAPI.interceptors.request.use((config) => {
  config.headers.Authorization = getAuthorization();
  return config;
});

const ClientAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/client`,
});

ClientAPI.interceptors.request.use((config) => {
  config.headers.Authorization = getAuthorization();
  return config;
});

axios.interceptors.request.use((config) => {
  config.headers.Authorization = getAuthorization();
  return config;
});

const UserAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

export { DoctorAPI, ClientAPI, UserAPI };
