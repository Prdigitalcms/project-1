import { AxiosIntance } from "../config/Axios.Intance";

// POST /api/auth/register
export const registerApi = async (payload) => {
  const res = await AxiosIntance.post("/auth/register", payload);
  return res.data; // { msg, user }
};

// POST /api/auth/login
export const loginApi = async (payload) => {
  const res = await AxiosIntance.post("/auth/login", payload);
  return res.data; // { msg, user }
};

// GET /api/auth/me
export const getCurrentUserApi = async () => {
  const res = await AxiosIntance.get("/auth/me");
  return res.data; // { msg, user }
};

// POST /api/auth/logout
export const logoutApi = async () => {
  const res = await AxiosIntance.post("/auth/logout");
  return res.data; // { msg }
};

// POST /api/auth/forgot-password
export const forgotPasswordApi = async (email) => {
  const res = await AxiosIntance.post("/auth/forgot-password", { email });
  return res.data; // "ok" or { msg }
};

// POST /api/auth/update-password/:id
export const updatePasswordApi = async ({ userId, password }) => {
  const res = await AxiosIntance.post(`/auth/update-password/${userId}`, {
    password,
  });
  return res.data; // { msg, user }
};
