import { loginApi, signupApi } from "../api/authApi";

export const login = (data) => loginApi(data);
export const signup = (data) => signupApi(data);
