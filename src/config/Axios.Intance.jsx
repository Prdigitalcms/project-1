
import axios from "axios";

// Prefer env, fallback to localhost for dev
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const AxiosIntance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // use httpOnly auth cookie
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// REQUEST INTERCEPTOR (add common headers, etc.)
AxiosIntance.interceptors.request.use(
  (config) => {
    // Example: add app version / custom header if needed
    // config.headers["X-App-Version"] = "1.0.0";
    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR (handle errors, 401, etc.)

// RESPONSE INTERCEPTOR
AxiosIntance.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error?.response?.status;
  
      if (status === 401) {
        // Token invalid/expired => logout and redirect home
        store.dispatch(removeUser(null));
  
        // sirf agar CMS routes par ho tab redirect karein
        if (window.location.pathname.startsWith("/cms")) {
          window.location.href = "/";
        }
      }
  
      return Promise.reject(error);
    }
  );
