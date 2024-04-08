"use client";

import LoginModal from "@/app/components/login/loginmodal";
import React, { Fragment, useState } from "react";
import KakaoLogout from "@/app/components/kakao/kakaologout";
import KakaoLogin from "../components/kakao/kakaologin";

export default function LoginBtn() {
  const [showModal, setshowModal] = useState(false);
  return (
    <Fragment>
      <button
        className="text-white bg-blue-700 font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
        onClick={() => setshowModal(true)}
      >
        Login Modal
      </button>
      <LoginModal openModal={showModal} onClose={() => setshowModal(false)} />
      <div>
        <KakaoLogin />
        <KakaoLogout />
      </div>
    </Fragment>
  );
}
