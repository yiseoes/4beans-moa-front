import axios from "axios";

export const loginApi = (data) =>
  axios.post("/api/auth/login", data);

export const signupApi = (data) =>
  axios.post("/api/auth/signup", data);
