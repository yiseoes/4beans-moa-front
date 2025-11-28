import axios from "axios";

export function initSignupPage() {
  const fileInput = document.getElementById("signupProfileImage");
  const preview = document.getElementById("signupProfilePreview");
  const btn = document.getElementById("btnSignup");
  const passBtn = document.getElementById("btnPhoneVerify");

  if (passBtn && !passBtn.dataset.boundPass) {
    passBtn.addEventListener("click", async () => {
      try {
        const res = await axios.get("/api/user/pass/start");
        const { impCode, merchantUid } = res.data.data;

        if (!window.IMP) {
          alert("본인인증 모듈이 로드되지 않았습니다.");
          return;
        }

        window.IMP.init(impCode);
        window.IMP.certification(
          {
            merchant_uid: merchantUid,
            popup: true,
            pg: "inicis_unified"
          },
          async function (rsp) {
            if (!rsp.success) {
              alert("본인인증 실패");
              return;
            }

            const verify = await axios.post("/api/user/pass/verify", {
              imp_uid: rsp.imp_uid
            });

            const data = verify.data.data;

            document.getElementById("signupPhone").readOnly = true;
            document.getElementById("signupPhone").value = data.phone;

            sessionStorage.setItem("PASS_CI", data.ci);
            sessionStorage.setItem("PASS_DI", data.di);

            alert("본인인증 성공!");
          }
        );
      } catch (err) {
        console.log(err);
        alert("본인인증 요청 오류 발생");
      }
    });

    passBtn.dataset.boundPass = "true";
  }

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
      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value;
      const passwordCheck = document.getElementById("signupPasswordCheck").value;
      const nickname = document.getElementById("signupNickname").value.trim();
      const phone = document.getElementById("signupPhone").value.trim();
      const agreeMarketing = document.getElementById("agreeMarketing")?.checked ?? false;

      if (!email || !password || !passwordCheck || !nickname || !phone) {
        alert("필수 정보를 모두 입력해 주세요.");
        return;
      }

      if (password !== passwordCheck) {
        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        return;
      }
      const ci = sessionStorage.getItem("PASS_CI");
      const di = sessionStorage.getItem("PASS_DI");

      if (!ci || !di) {
          alert("본인인증이 완료되지 않았습니다.");
          return;
      }

      const form = new FormData();
      form.append("email", email);
      form.append("password", password);
      form.append("passwordConfirm", passwordCheck);
      form.append("nickname", nickname);
      form.append("phone", phone);
      form.append("ci", ci);
      form.append("di", di);
      form.append("agreeMarketing", agreeMarketing ? "Y" : "N");

      if (fileInput.files[0]) {
        form.append("profile", fileInput.files[0]);
      }

      try {
      const res = await axios.post("/api/user/add", form);

        if (res.data.success) {
          window.location.href = "/login";
        } else {
          alert("회원가입 실패");
        }
      } catch (err) {
        console.log(err);
        alert("회원가입 중 오류가 발생했습니다.");
      }
    });

    btn.dataset.boundSignup = "true";
  }
}
