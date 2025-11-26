import axios from "axios";

const API = "/api/party";

export const getPartyList = () => axios.get(`${API}/list`);
export const getPartyDetail = (id) => axios.get(`${API}/detail/${id}`);
