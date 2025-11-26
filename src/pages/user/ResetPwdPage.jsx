import { useEffect } from "react";
import { initResetPwdPage } from "../../services/logic/resetPwdLogic";

export default function ResetPwdPage() {
  useEffect(() => {
    initResetPwdPage();
  }, []);

  return (
    <div className="flex flex-col items-center pt-28 pb-20">
      <h2 className="text-3xl font-bold mb-10">비밀번호 재설정</h2>

      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow">
        <p className="text-gray-700 mb-6">새 비밀번호를 입력해주세요.</p>

        <div className="space-y-4">
          <div>
            <label className="font-medium text-sm">새 비밀번호</label>
            <input
              id="resetNewPassword"
              type="password"
              className="w-full border rounded-lg p-3 mt-1"
              placeholder="8~20자 / 영문+숫자 조합"
            />
          </div>

          <div>
            <label className="font-medium text-sm">새 비밀번호 확인</label>
            <input
              id="resetNewPasswordCheck"
              type="password"
              className="w-full border rounded-lg p-3 mt-1"
              placeholder="다시 입력해주세요."
            />
          </div>
        </div>

        <button
          id="btnResetPwd"
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold cursor-pointer"
        >
          확인
        </button>
      </div>
    </div>
  );
}
