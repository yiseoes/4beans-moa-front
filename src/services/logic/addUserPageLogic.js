// src/services/logic/addUserPageLogic.js
import axios from "axios";

export function initSignupPage() {
  const fileInput = document.getElementById("signupProfileImage");
  const preview = document.getElementById("signupProfilePreview");
  const btn = document.getElementById("btnSignup");

  if (fileInput && preview && !fileInput.dataset.boundPreview) {
    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      if (!file) return;

      const url = URL.createObjectURL(file);
      preview.src = url;
      preview.classList.remove("hidden");
    });
    fileInput.dataset.boundPreview = "true";
  }

  if (btn && !btn.dataset.boundSignup) {
    btn.addEventListener("click", async () => {
      const email = document.getElementById("signupEmail")?.value?.trim() || "";
      const password = document.getElementById("signupPassword")?.value || "";
      const passwordCheck = document.getElementById("signupPasswordCheck")?.value || "";
      const nickname = document.getElementById("signupNickname")?.value?.trim() || "";
      const phone = document.getElementById("signupPhone")?.value?.trim() || "";

      const agreeService = document.getElementById("agreeService")?.checked;
      const agreePrivacy = document.getElementById("agreePrivacy")?.checked;
      const agreeMarketing = document.getElementById("agreeMarketing")?.checked;

      if (!email || !password || !passwordCheck || !nickname || !phone) {
        alert("필수 정보를 모두 입력해 주세요.");
        return;
      }

      if (password !== passwordCheck) {
        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        return;
      }

      if (!agreeService || !agreePrivacy) {
        alert("필수 약관에 동의해 주세요.");
        return;
      }

      const form = new FormData();
      form.append("email", email);
      form.append("password", password);
      form.append("nickname", nickname);
      form.append("phone", phone);
      form.append("marketingAgree", agreeMarketing ? "Y" : "N");

      if (fileInput && fileInput.files[0]) {
        form.append("profile", fileInput.files[0]);
      }

      try {
        const res = await axios.post("/api/users", form, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (res.data && res.data.success) {
          window.location.href = "/login";
        } else {
          alert("회원가입에 실패했습니다.");
        }
      } catch (err) {
        alert("회원가입 중 오류가 발생했습니다.");
      }
    });

    btn.dataset.boundSignup = "true";
  }
}
