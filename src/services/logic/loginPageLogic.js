import axios from "axios";

export function initLoginPage() {
  const email = document.getElementById("loginEmail");
  const pw = document.getElementById("loginPassword");
  const btn = document.getElementById("btnLogin");

  const kakao = document.getElementById("btnKakaoLogin");
  const google = document.getElementById("btnGoogleLogin");

  if (btn) {
    btn.addEventListener("click", async () => {
      const data = {
        email: email.value,
        password: pw.value,
      };

      const res = await axios.post("/api/auth/login", data);

      if (res.data.success) {
        localStorage.setItem("token", res.data.data.token);
        window.location.href = "/";
      } else {
        alert("로그인 실패");
      }
    });
  }

  if (kakao) {
    kakao.addEventListener("click", () => {
      window.location.href = "/api/auth/oauth/kakao";
    });
  }

  if (google) {
    google.addEventListener("click", () => {
      window.location.href = "/api/auth/oauth/google";
    });
  }
}
