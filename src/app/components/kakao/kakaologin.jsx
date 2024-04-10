"use client";
const KAKAO_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
import Kakao from "@/app/users/img/kakao_login_large_wide.png";
import Image from "next/image";
import Link from "next/link";

export default function KakaoLogin() {
  const authParam = new URLSearchParams({
    client_id: KAKAO_API_KEY || " ",
    redirect_uri: "http://localhost:8080/kakao",
    response_type: "code",
  });

  const handleLoginClick = () => {
    const authCodeUrl = `https://kauth.kakao.com/oauth/authorize?${authParam.toString()}`;
    window.open(
      authCodeUrl,
      "_blank",
      "popup=1, width=500,height=600,left=500,top=50"
    );
  };

  return (
    <Link href="" onClick={handleLoginClick} className="w-52 h-12">
      <Image src={Kakao} alt="카카오로그인" className="h-12 w-full" />
    </Link>
  );
}
