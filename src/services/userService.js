import axios from "axios";

/* ===========================
   조회
=========================== */
export const getUser = () => axios.get("/api/user/me");
export const getUserList = (params) => axios.get("/api/user", { params });
export const getLoginHistory = () => axios.get("/api/user/login-history");
export const getFindIdResult = (txId) =>
  axios.get("/api/user/find-id", { params: { txId } });

/* ===========================
   등록
=========================== */
export const addUser = (formData) =>
  axios.post("/api/user", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

/* ===========================
   수정
=========================== */
export const updateUser = (data) =>
  axios.put("/api/user", data);

export const updatePwd = (data) =>
  axios.put("/api/user/password", data);

export const updatePhoneByPassAuth = (data) =>
  axios.put("/api/user/phone", data);

export const uploadProfileImage = (formData) =>
  axios.post("/api/user/profile", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

/* ===========================
   비번 재설정
=========================== */
export const resetPwd = (data) =>
  axios.post("/api/user/password/reset", data);

/* ===========================
   삭제(탈퇴)
=========================== */
export const withdrawUser = () =>
  axios.delete("/api/user");

/* ===========================
   기타(로그인/검증/인증)
=========================== */
export const login = (data) => axios.post("/api/auth/login", data);
export const kakaoLogin = (code) => axios.post("/api/auth/kakao", { code });
export const googleLogin = (code) => axios.post("/api/auth/google", { code });

export const checkEmail = (email) =>
  axios.get("/api/user/check-email", { params: { email } });

export const checkNickname = (nickname) =>
  axios.get("/api/user/check-nickname", { params: { nickname } });

export const checkPasswordFormat = (password) =>
  axios.post("/api/user/check-password-format", { password });

export const checkPasswordConfirm = (password, confirm) =>
  axios.post("/api/user/check-password-confirm", { password, confirm });

export const startPassAuth = () =>
  axios.get("/api/auth/pass/start");

export const passCallback = (data) =>
  axios.post("/api/auth/pass/callback", data);

export const sendFindIdEmail = (data) =>
  axios.post("/api/auth/send-find-id-email", data);
