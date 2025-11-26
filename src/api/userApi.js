import axios from "axios";

export const getMyInfoApi = () => axios.get("/api/user/me");
