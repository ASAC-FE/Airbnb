"use client";
import React, { useState } from "react";
import Back from "/public/Back.svg";
import MoreOne from "@/app/components/signup/moreone";
export default function SignUpModal({ onClose, email }) {
  const [openMore, setopenMore] = useState(false);
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
    e.stopPropagation();
  };

  const handleOpenMore = () => {
    setopenMore(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); //입력 중간의 새로 고침 등 기본적인 제출에 대한 이벤트 발생 방지

    //사용자에게 입력 받은 데이터 객체 생성
    const formData = {
      user_name: event.target.user_name.value,
      user_last_name: event.target.user_last_name.value,
      birth_day: event.target.birth_day.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await fetch("/members/new", {
        // 프록시 이용하여 POST 요청
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), //데이터를 JSON 문자열로 변환하여 전송
      });

      if (response.ok) {
        alert("회원가입에 성공했습니다."); //status 200
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요."); //status 500(중복회원)
      }
    } catch (error) {
      console.error("회원가입 요청 중 오류가 발생했습니다:", error); //POST 요청 실패
      alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 flex flex-col justify-center items-center animate-fadeIn"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="relative bg-white divide-y divide-gray-200 w-[568px] h-[657.6px] text-black border rounded-2xl text-center">
        <div className="py-4 ">
          <button
            className="absolute top-0 left-0 m-3 p-2.5 hover:bg-gray-100 rounded-full"
            onClick={() => onClose()}
          >
            <Back className="w-3 h-3" />
          </button>
          <span className="text-center text-base font-semibold">
            회원 가입 완료하기
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full h-[600px] overflow-y-auto overflow-x-hidden p-6"
        >
          <div className="divide-y divide-gray-400 border border-gray-400 rounded-lg">
            <div className="py-3 border border-white focus-within:ring focus-within:ring-black rounded-lg">
              <input
                type="text"
                name="user_name"
                placeholder="이름(예: 길동)"
                autoComplete="off"
                className="py-1 px-3 block w-full bg-transparent text-sm placeholder:text-gray-500 focus:outline-none focus:ring-0"
              />
            </div>
            <div className="py-3 border border-white focus-within:ring focus-within:ring-black rounded-lg">
              <input
                type="text"
                name="user_last_name"
                placeholder="성(예: 홍)"
                autoComplete="off"
                className="py-1 px-3 block w-full bg-transparent text-sm placeholder:text-gray-500 focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <p className="text-left text-zinc-500 text-xs my-1 py-1 tracking-tight">
            정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
          </p>
          <div className="rounded-lg border border-gray-400 py-3 mt-4 focus-within:ring focus-within:ring-black">
            <input
              type="text"
              name="birth_day"
              placeholder="생년월일"
              autoComplete="off"
              className="py-1 px-3 block w-full bg-transparent text-sm placeholder:text-gray-500 focus:outline-none focus:ring-0"
            />
          </div>
          <p className="text-left text-zinc-500 text-xs my-1 py-1 tracking-tight">
            18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 에어비앤비의
            다른 회원에게 공개되지 않습니다.
          </p>
          <div className="rounded-lg border border-gray-400 py-3 mt-4 focus-within:ring focus-within:ring-black">
            <input
              type="text"
              name="email"
              placeholder="이메일"
              autoComplete="off"
              className="py-1 px-3 block w-full bg-transparent text-sm placeholder:text-gray-500 focus:outline-none focus:ring-0"
              defaultValue={localStorage.getItem("Email")}
            />
          </div>
          <p className="text-left text-zinc-500 text-xs my-1 py-1 tracking-tight">
            예약 확인과 영수증을 이메일로 보내드립니다.
          </p>
          <div className="rounded-lg border border-gray-400 py-3 my-6 focus-within:ring focus-within:ring-black">
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              autoComplete="off"
              className="py-1 px-3 block w-full bg-transparent text-sm placeholder:text-gray-500 focus:outline-none focus:ring-0"
            />
          </div>
          <hr />
          <div className="w-[503.2px] h-[84px] mt-6 border border-white mb-2">
            <label className="size-auto cursor-pointer flex space-x-14">
              <div className="text-xs text-left tracking-tight">
                <p className="font-medium pb-1">
                  개인정보 수집 및 이용에 동의합니다.
                </p>
                <p className="text-zinc-500">
                  1. 에어비앤비가 수집하는 개인 정보 에어비앤비 플랫폼을
                  이용하는 데 필요한 정보 당사는 회원님이 에어비앤비 플랫폼을
                  이용할 때 회원님의 개인 정보를 수집합니다. 그렇지 않은 경우,
                  에어비앤비는 요청하신 서비스를 회원님께 제공하지 못할 수
                  있습니다. 이러한 정보에는 다음이 포함됩니다.
                </p>
              </div>
              <span className="w-6 h-21">
                <input
                  type="checkbox"
                  className="accent-black cursor-pointer scale-[2.0]"
                />
              </span>
            </label>
          </div>
          <button
            className="block my-3 text-xs underline decoration-[1.5px] font-bold  hover:bg-gray-100"
            type="button"
            onClick={handleOpenMore}
          >
            더 보기
          </button>
          <div className="w-[503.2px] h-[52px] mt-2 border border-white mb-2">
            <label className="size-auto cursor-pointer flex space-x-14">
              <div className="text-xs text-left tracking-tight">
                <p className="font-medium pb-1">
                  마케팅 이메일 수신을 원합니다(선택).
                </p>
                <p className="text-zinc-500">
                  에어비앤비 회원 전용 할인, 추천 여행 정보, 마케팅 이메일, 푸시
                  알림을 보내드립니다. 계정 설정 또는 마케팅 알림에서 언제든지
                  수신을 거부할 수 있습니다.
                </p>
              </div>
              <span className="w-6 h-10">
                <input
                  type="checkbox"
                  className="accent-black cursor-pointer scale-[2.0]"
                />
              </span>
            </label>
          </div>
          <button
            className="block mt-3 mb-8 text-xs underline decoration-[1.5px] font-bold  hover:bg-gray-100"
            type="button"
            onClick={handleOpenMore}
          >
            더 보기
          </button>
          <hr />
          <p className="py-3 my-3 text-sm text-left">
            동의 및 계속하기를 선택하여 에어비앤비{" "}
            <span className="text-[#2875f0] underline font-semibold">
              서비스 약관
            </span>
            ,{" "}
            <span className="text-[#2875f0] underline font-semibold">
              결제 서비스 약관
            </span>
            ,
            <br />
            <span className="text-[#004cc4] underline font-semibold">
              위치기반서비스 이용약관
            </span>
            ,
            <span className="text-[#004cc4] underline font-semibold">
              차별 금지 정책
            </span>
            ,
            <span className="text-[#004cc4] underline font-semibold">
              개인정보 처리방침
            </span>
            에 동의합니다.
          </p>
          <button
            className="font-semibold w-full transition items-center justify-center rounded-md text-sm bg-rose-500 text-white h-11"
            type="submit"
          >
            동의 및 계속하기
          </button>
        </form>
        {openMore && <MoreOne onClose={() => setopenMore(false)} />}
      </div>
    </div>
  );
}
