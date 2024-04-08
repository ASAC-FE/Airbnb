"use client";
import { useSearchParams } from "next/navigation";

export default function GetToken() {
  const params = useSearchParams();

  const code = params.get("access_token");
  localStorage.setItem("accesstoken", code);
  if (localStorage.getItem) {
    window.close();
  }
}
