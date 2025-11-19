import axios from "axios";
import { store } from "..//store/store";      // <-- IMPORTANT
import { removeUser } from "../features/reducers/AuthSlice";   // <-- IMPORTANT

// Prefer env, fallback to localhost for dev
const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api";

// Create Axios Instance
export const AxiosIntance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, 
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// REQUEST INTERCEPTOR
AxiosIntance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR
AxiosIntance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      // Logout user from Redux
      store.dispatch(removeUser(null));

      // If user is inside CMS, redirect to homepage
      if (window.location.pathname.startsWith("/cms")) {
        window.location.href = "/";
      }
    }

    return Promise.reject(error);
  }
);
