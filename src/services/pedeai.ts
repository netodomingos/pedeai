import axios, { AxiosError } from "axios";
import { API_URL } from '@env'
import { useLogout } from "../hooks/useAuth";

const API = axios.create({
  baseURL: `${API_URL}`, 
})

API.interceptors.response.use(
  (response) => {
    return response;
  },(error: AxiosError) => {
    if (error.response?.status === 401) {
      useLogout()
    }
    return Promise.reject(error);
  }
);

export default API