// src/api/userApi.js
import httpClient from "./httpClient";

export const startPassAuth = () =>
  httpClient.get("/user/pass/start");

export const verifyPassAuth = (impUid) =>
  httpClient.post("/user/pass/verify", { imp_uid: impUid });
