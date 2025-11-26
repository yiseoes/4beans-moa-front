// src/pages/auth/FindIdPage.jsx
import { useEffect } from "react";
import { initFindIdPage } from "../../services/logic/findIdLogic";

export default function FindIdPage() {
  useEffect(() => {
    initFindIdPage();
  }, []);

  return (
    <div className="flex flex-col items-center pt-28 pb-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">아이디 찾기</h2>
      <p className="text-gray-500 mb-10 text-sm">
        가입 시 사용한 휴대폰 번호로 본인 인증 후 이메일을 확인하세요.
      </p>

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-10 space-y-8">
        {/* 단계 표시 */}
        <div className="flex items-center justify-center gap-6 text-sm font-medium">
          <div
            id="findIdStep1"
            className="flex items-center gap-2 text-blue-600"
          >
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
              1
            </span>
            <span>본인 인증</span>
          </div>

          <div className="w-8 h-px bg-gray-300" />

          <div
            id="findIdStep2"
            className="flex items-center gap-2 text-gray-400"
          >
            <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs">
              2
            </span>
            <span>이메일 확인</span>
          </div>
        </div>

        {/* 본문 카드 */}
        <div className="border rounded-xl p-8 bg-gray-50">
          <p
            id="findIdGuide"
            className="text-gray-700 mb-8 text-center leading-relaxed"
          >
            PASS 버튼을 눌러 본인 인증을 진행해 주세요.
            <br />
            인증이 완료되면 회원가입된 이메일이 아래에 표시됩니다.
          </p>

          <div className="flex justify-center mb-6">
            <button
              id="btnPassAuth"
              className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-xl text-lg font-bold cursor-pointer shadow-md transition"
            >
              PASS
            </button>
          </div>

          <div className="space-y-3 pt-4">
            <p className="text-gray-600 text-sm text-center">
              회원가입된 이메일
            </p>

            <input
              id="findIdEmail"
              readOnly
              className="w-full border p-3 rounded-lg text-center font-semibold hidden bg-white"
              placeholder="본인 인증 후 이메일이 표시됩니다."
            />

            <button
              id="btnGoLogin"
              role="link"
              data-href="/login"
              className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-full text-sm font-semibold cursor-pointer hidden transition"
            >
              로그인하러가기
            </button>
          </div>
        </div>

        {/* 안내 문구 */}
        <p className="text-xs text-gray-400 text-center">
          휴대폰 명의자와 가입자 정보가 다를 경우 아이디 찾기가 제한될 수 있습니다.
        </p>
      </div>
    </div>
  );
}
