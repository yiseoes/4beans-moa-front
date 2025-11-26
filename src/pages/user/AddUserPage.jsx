// src/pages/user/AddUserPage.jsx
import { useEffect } from "react";
import { initSignupPage } from "@/services/logic/addUserPageLogic";

import kakaoIcon from "@/assets/icons/kakao.png";
import googleIcon from "@/assets/icons/google.png";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AddUserPage() {
  useEffect(() => {
    initSignupPage();
  }, []);

  return (
    <div className="flex flex-col items-center pt-28 pb-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">회원가입</h2>
      <p className="text-gray-500 mb-10 text-sm">아래 정보를 정확히 입력해 주세요.</p>

      {/* 기본 정보 */}
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="text-xl">기본 정보 입력</CardTitle>
          <CardDescription>
            이메일, 비밀번호, 휴대폰 번호를 입력해주세요.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* 이메일 */}
          <div className="space-y-1">
            <Label htmlFor="signupEmail">이메일(아이디)</Label>
            <Input id="signupEmail" placeholder="예: moa@email.com" />
          </div>

          {/* 비밀번호 */}
          <div className="space-y-1">
            <Label htmlFor="signupPassword">비밀번호</Label>
            <Input id="signupPassword" type="password" placeholder="8~20자 / 영문+숫자 조합" />
          </div>

          {/* 비밀번호 확인 */}
          <div className="space-y-1">
            <Label htmlFor="signupPasswordCheck">비밀번호 확인</Label>
            <Input id="signupPasswordCheck" type="password" placeholder="다시 입력" />
          </div>

          {/* 닉네임 */}
          <div className="space-y-1">
            <Label htmlFor="signupNickname">닉네임</Label>
            <Input id="signupNickname" placeholder="닉네임 입력" />
          </div>

          {/* 휴대폰 번호 + 본인인증 */}
          <div className="flex items-end gap-2">
            <div className="flex-1 space-y-1">
              <Label htmlFor="signupPhone">휴대폰 번호</Label>
              <Input id="signupPhone" placeholder="숫자만 입력" />
            </div>

            <Button
              id="btnPhoneVerify"
              role="link"
              data-href="/auth/pass"
              type="button"
              className="cursor-pointer"
            >
              본인인증
            </Button>
          </div>

          {/* 프로필 이미지 */}
          <div className="space-y-2">
            <Label>프로필 이미지</Label>

            <div className="flex items-center gap-4 mt-1">
              <div className="w-20 h-20 border rounded-lg bg-gray-100 overflow-hidden">
                <img
                  id="signupProfilePreview"
                  className="hidden w-full h-full object-cover"
                />
              </div>

              <Input id="signupProfileImage" type="file" accept="image/*" />
            </div>
          </div>

          {/* 이용약관 */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input id="agreeService" type="checkbox" className="cursor-pointer" />
              서비스 이용약관 동의 (필수)
            </label>

            <label className="flex items-center gap-2">
              <input id="agreePrivacy" type="checkbox" className="cursor-pointer" />
              개인정보 처리방침 동의 (필수)
            </label>

            <label className="flex items-center gap-2">
              <input id="agreeMarketing" type="checkbox" className="cursor-pointer" />
              마케팅 정보 수신 동의 (선택)
            </label>
          </div>
        </CardContent>

        <CardFooter>
          <Button id="btnSignup" className="w-full cursor-pointer">
            회원가입
          </Button>
        </CardFooter>
      </Card>

      {/* 소셜 계정 */}
      <Card className="w-full max-w-xl mt-8">
        <CardHeader>
          <CardTitle className="text-base">소셜 계정으로 간편 가입</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <Button
            id="btnKakaoSignup"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black flex items-center justify-center gap-2 cursor-pointer"
          >
            <img src={kakaoIcon} className="w-6 h-6" />
            카카오 계정으로 가입
          </Button>

          <Button
            id="btnGoogleSignup"
            variant="outline"
            className="w-full flex items-center justify-center gap-2 cursor-pointer"
          >
            <img src={googleIcon} className="w-6 h-6" />
            Google 계정으로 가입
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
