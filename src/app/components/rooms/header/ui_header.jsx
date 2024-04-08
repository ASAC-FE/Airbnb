"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SVG_Menu from "/public/menu.svg";
import SVG_Search from "/public/search.svg";
import SVG_Global from "/public/global.svg";
import SVG_Profile from "/public/profile.svg";

export default function Header() {
  return (
    <React.Fragment>
      <header className="absolute left-0 top-0 w-full h-[80px] border-b"></header>
      <div
        className="relative w-full max-w-7xl h-[80px] m-auto px-[80px]
          flex justify-between items-center"
      >
        <Logo />
        <MainSerch />
        <NavComponents />
      </div>
    </React.Fragment>
  );
}

/**
 * 로고 이미지
 * @returns -
 */
function Logo() {
  return (
    <div className="flex flex-grow">
      <Link href="/" className="w-auto h-auto">
        <Image src="/common/logo.png" width={102} height={32} alt=""></Image>
      </Link>
    </div>
  );
}

/**
 * 세부 검색
 * Button onClick 이벤트 처리 (Arrow Function)
 * @returns -
 */
function MainSerch() {
  return (
    <div className="w-[410px] h-12 px-6 inline-flex flex-grow-[0.5px]">
      <span
        className="flex justify-center items-center 
          border rounded-full shadow hover:shadow-md duration-200 ease-in-out"
      >
        {/* 어디든지 */}
        <button
          className="w-[105px] h-12 pl-2 m-[-1px]"
          onClick={(e) => {
            // e.currentTarget
            console.log("Search - onClickEventAnywhere");
          }}
        >
          <div className="px-4 text-sm font-semibold">어디든지</div>
        </button>
        <span className="w-[1px] h-6 bg-customBGGray"></span>

        {/* 언제든 일주일 */}
        <button
          className="w-[120px] h-12 m-[-1px]"
          onClick={(e) => {
            console.log("Search - onClickEventAnytime");
          }}
        >
          <div className="px-4 text-sm font-semibold">언제든 일주일</div>
        </button>
        <span className="w-[1px] h-6 bg-customBGGray"></span>

        {/* 게스트 추가 */}
        <button
          className="w-[150px] h-12 m-[-1px] flex items-center"
          onClick={(e) => {
            console.log("Search - onClickEventGuest");
          }}
        >
          <div className="px-4 text-sm text-customTextGray">게스트 추가</div>
          <div className="w-8 h-8  flex justify-center items-center rounded-full bg-[#ff385c]">
            <SVG_Search className="w-[12px] h-[12px]" />
          </div>
        </button>
      </span>
    </div>
  );
}

/**
 * 내비게이션
 * @returns -
 */
function NavComponents() {
  return (
    <nav className="relative w-[360px] h-[80px] flex justify-end items-center">
      <div className="w-[265px] h-[40px] mr-2 flex justify-end">
        {/* 당신의 공간을 에어비앤비하세요 */}
        <Link
          href="https://www.airbnb.co.kr/host/homes"
          target="_blank"
          className="relative w-[240px] h-[40px] p-3 left-[-3px] right-[-3px]
          hover:bg-customBGHover rounded-full"
        >
          <div className="w-auto h-[16px] items-center text-sm font-semibold">
            당신의 공간을 에어비앤비하세요
          </div>
        </Link>

        {/* Global Button */}
        <button
          className="w-[40px] h-[40px] flex justify-center items-center
          hover:bg-customBGHover rounded-full"
        >
          <SVG_Global className="w-[16px] h-[16px] mt-1" />
        </button>
      </div>

      {/* Menu Button */}
      <div className="w-[86px] h-[48px]">
        <button
          className="w-full h-full p-2 pl-[14px] 
            flex items-center border rounded-full hover:shadow-md duration-200 ease-in-out"
        >
          <SVG_Menu className="w-[16px] h-[16px]" />
          <div className="w-8 h-8 ml-[14px] flex justify-center items-center">
            <SVG_Profile className="w-8 h-8" />
          </div>
        </button>
      </div>
    </nav>
  );
}
