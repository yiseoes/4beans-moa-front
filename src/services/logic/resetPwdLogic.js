// src/services/logic/resetPwdLogic.js
import axios from "axios";

export const initResetPwdPage = () => {
  const btn = document.getElementById("btnResetPwd");
  const newPwdInput = document.getElementById("resetNewPassword");
  const newPwdCheckInput = document.getElementById("resetNewPasswordCheck");

  if (!btn || !newPwdInput || !newPwdCheckInput) {
    return;
  }

  btn.addEventListener("click", async () => {
    const password = newPwdInput.value.trim();
    const passwordCheck = newPwdCheckInput.value.trim();

    if (!password || !passwordCheck) {
      alert("비밀번호를 모두 입력해 주세요.");
      return;
    }

    if (password !== passwordCheck) {
      alert("새 비밀번호와 확인이 일치하지 않습니다.");
      return;
    }

    if (password.length < 8 || password.length > 20) {
      alert("비밀번호는 8~20자여야 합니다.");
      return;
    }

    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+~\-={}[\]:;"'`<>,.?/]{8,20}$/;
    if (!pattern.test(password)) {
      alert("영문과 숫자를 포함한 비밀번호를 입력해 주세요.");
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      alert("유효하지 않은 비밀번호 재설정 링크입니다.");
      return;
    }

    try {
      const res = await axios.post("/api/users/reset-pwd", {
        token,
        password,
      });

      if (res.data && res.data.success) {
        alert("비밀번호가 변경되었습니다. 다시 로그인해 주세요.");
        window.location.href = "/login";
      } else {
        const msg = res.data?.error?.message || "비밀번호 변경에 실패했습니다.";
        alert(msg);
      }
    } catch (err) {
      alert("비밀번호 변경 중 오류가 발생했습니다.");
    }
  });
};
