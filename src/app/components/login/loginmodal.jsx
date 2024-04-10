"use client";

import React, { useState } from "react";
import X from "/public/XMark.svg";
import SignupModal from "@/app/components/signup/signupmodal";
import KakaoLogin from "@/app/components/kakao/kakaologin";

export default function LoginModal({ openModal, onClose }) {
  const [signupModal, setsignupModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  if (!openModal) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleSignupModal = () => {
    setsignupModal(true);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    localStorage.setItem("Email", e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    return emailRegex.test(email);
  };
  return (
    // 모달띄우기
    <div
      className="fixed inset-0 bg-black bg-opacity-25 overflow-y-auto flex justify-center items-center z-50"
      id="wrapper"
      onClick={handleClose}
    >
      {/* 모달헤더 */}
      <div className="relative bg-white w-[568px] h-[400px] divide-y divide-gray-300 text-black items-center border rounded-2xl text-center animate-slideUp">
        <div className="py-3.5">
          <button
            className="absolute top-1 left-1 rounded-full p-1.5 m-1.5 hover:bg-gray-100"
            onClick={() => onClose()}
          >
            <X className="w-[16px] h-[16px]" />
          </button>
          <span className="text-center text-base font-semibold px-[24px]">
            로그인 또는 회원 가입
          </span>
        </div>
        {/* 모달 내용 */}
        <div className="p-6">
          <h3 className="pb-2 text-xl font-semibold text-left">
            에어비앤비에 오신 것을 환영합니다.
          </h3>
          <div>
            <div className="rounded-lg border border-gray-400 py-3 mt-4 focus-within:ring focus-within:ring-black">
              <input
                type="text"
                name="이메일"
                placeholder="이메일"
                autoComplete="off"
                className="py-1 px-3 block w-full bg-transparent text-sm placeholder:text-gray-500 focus:outline-none focus:ring-0"
                onChange={handleEmail}
                value={email}
              />{" "}
            </div>
            {!isValidEmail &&
              email !== "" && ( // 이메일이 빈 문자열이 아니고 isValidEmail이 false일 때에만 아래의 문구가 표시됩니다.
                <p className="text-red-500 text-xs mt-1">
                  이메일 형식이 올바르지 않습니다.
                </p>
              )}

            <button
              className={`font-semibold mt-4 w-full transition items-center justify-center rounded-md text-sm bg-rose-500 text-white h-12 ${
                isValidEmail ? "" : "opacity-70 cursor-not-allowed"
              }`}
              type="button"
              onClick={handleSignupModal}
              disabled={!isValidEmail || email === ""}
            >
              계속
            </button>
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-300 border-0" />
            <span className="absolute px-3 font-medium text-gray-900 bg-white ">
              또는
            </span>
          </div>{" "}
          <KakaoLogin />
          {signupModal && <SignupModal onClose={() => setsignupModal(false)} />}
        </div>
      </div>
    </div>
  );
}
