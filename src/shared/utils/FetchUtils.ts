import axios from "axios";
import { getToken } from "./TokenUtils";

const headers = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
};

const getRequest = async (url: string) => {
  return await axios.get(url, headers());
};

const postRequest = async (url: string, body: object) => {
  return await axios.post(url, body, headers());
};

const deleteRequest = async (url: string) => {
  return await axios.delete(url, headers());
};

const putRequest = async (url: string, body: object) => {
  return await axios.put(url, body, headers());
};

export { getRequest, postRequest, deleteRequest, putRequest };
