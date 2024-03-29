"use client";

import React, { useRef, useState, useEffect } from "react";
import X from "/public/XMark.svg";
import Up from "/public/up.svg";

export default function MoreOne({ onClose }) {
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
    e.stopPropagation();
  };
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const modalRef = useRef(null);

  const upBtn = () => {
    if (modalRef.current) modalRef.current.scrollTop = 0;
  };

  useEffect(() => {
    const modalCurrent = modalRef.current;

    const handleScroll = () => {
      if (modalCurrent) {
        const isAtTop = modalCurrent.scrollTop === 0;
        setIsButtonVisible(!isAtTop);
      }
    };

    modalCurrent.addEventListener("scroll", handleScroll);

    return () => {
      modalCurrent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 flex flex-col justify-center items-center animate-fadeIn"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="relative bg-white w-[568px] h-[488px] tracking-tight border rounded-2xl">
          <div className="w-[520px] h-[64px] px-6">
            <button
              className="absolute top-0 left-0 m-3 p-3 hover:bg-gray-100 rounded-full"
              onClick={() => onClose()}
            >
              <X className="w-4 h-4 stroke-2" />
            </button>
          </div>

          <div
            className="absolute text-left left-12 py-6 pl-3 pr-11 mx-5 max-h-[396px] overflow-y-auto break-keep"
            ref={modalRef}
          >
            <p className="font-semibold text-[#717171]">법적 약관</p>
            <p className="font-bold text-[32px] ">
              한국 내 정보의 수집 및 사용
            </p>
            <p className="py-2 mb-8">
              에어비앤비가 수집·이용하는 개인 정보와 수집·이용 목적.
            </p>
            <p className="font-semibold text-[22px] py-2 my-1 pr-3">
              에어비앤비 플랫폼을 이용하는 데 필요한 정보
            </p>
            <p className="pt-1">
              당사는 회원님이 에어비앤비 플랫폼을 이용할 때 회원님의 개인 정보를
              수집합니다. 그렇지 않은 경우, 에어비앤비는 요청하신 서비스를
              회원님께 제공하지 못할 수 있습니다.
            </p>
            <ul className="list-disc mt-4 ml-10">
              <li className="mb-4">
                <strong>연락처 정보, 계정, 프로필 정보.</strong> 예약 및 호스팅
                대행 서비스를 포함하여 에어비앤비 플랫폼에서 제공하는 서비스
                이용에 필요한 회원님의 성명, 전화번호, 이메일 주소, 생년월일,
                프로필 사진 및{" "}
                <span className="text-[#222222] font-bold underline">인증</span>{" "}
                정보. 호스팅 대행 서비스를 제공하시는 경우에는 우편 주소가
                추가로 필요합니다.
              </li>
              <li className="mb-8">
                <strong>결제 정보.</strong> 대금을 지급받으려면 은행 계좌 또는
                결제 계좌 정보가 필요합니다.
              </li>
            </ul>
            <p className="font-semibold text-[22px] py-2 my-1 pr-3">
              에어비앤비 플랫폼 및 당사 결제 서비스 사용 시 자동으로 수집되는
              정보
            </p>
            <p className="pt-1.5">
              당사는 회원님이 에어비앤비 플랫폼 및 결제 서비스를 이용할 때 개인
              정보를 자동으로 수집합니다.
            </p>
            <ul className="list-disc mt-4 ml-10 break-keep">
              <li className="mb-4">
                <strong>위치 정보.</strong>
                회원님 기기의 설정에 따라 IP 주소 또는 모바일 기기의 GPS를
                이용해 판단하는 위치. 설정이나 기기 사용 권한을 통해 해당 기능을
                활성화하는 경우, 에어비앤비는 회원님이 앱을 사용하지 않는
                동안에도 이 정보를 수집할 수 있습니다.
              </li>
              <li className="mb-4">
                <strong>사용 정보.</strong> 회원님이 조회하는 페이지나 콘텐츠,
                숙소 검색, 예약 내역, 에어비앤비 플랫폼에서 수행하는 기타 활동.
              </li>
              <li className="mb-4">
                <strong>로그 데이터 및 기기 정보. </strong> 에어비앤비 플랫폼
                사용 방식(제3자 애플리케이션으로 연결되는 링크를 클릭했는지 여부
                등)에 관한 세부 정보, IP 주소, 접속 날짜 및 시간, 하드웨어 및
                소프트웨어 정보, 기기 정보, 기기 이벤트 정보, 고유 식별자, 충돌
                데이터, 쿠키 데이터, 에어비앤비 플랫폼 사용 이전 또는 이후에
                조회하거나 이용한 페이지. 에어비앤비 계정을 만들지 않았거나
                로그인하지 않은 경우에도 당사는 이러한 정보를 수집할 수
                있습니다.
              </li>
              <li className="mb-4">
                <strong className="underline">쿠키 정책</strong>에 설명된{" "}
                <strong>쿠키 및 유사 기술</strong>
              </li>
              <li className="mb-8">
                <strong>결제 거래 정보.</strong> 사용된 결제 수단, 결제 날짜 및
                시간, 결제 금액, 결제 수단 만료일, 페이팔 이메일 주소, IBAN 정보
                보유 기간
              </li>
            </ul>
            <p className="font-semibold text-[22px] py-2 my-1 pr-3">
              보유 기간
            </p>
            <p className="pt-1.5 pr-3">
              기본적으로 사용자가 계정 삭제 또는 계정 탈퇴를 요청하는 경우
              당사는 사용자의 개인정보를 삭제 처리합니다.
            </p>
            <p className="pt-3 my-3 pr-1">
              다만, 당사는 개인정보 처리방침 6.3 섹션에 설명된 바와 같이 당사의
              정당한 사업상 이익 또는 법적 의무 준수를 위하여 필요한 일정 정보를
              보유할 수 있습니다. 보유할 수 있는 정보의 구체적 내용은
              자금세탁방지, 감사 및 금융규제 준수 등 법률 준수 목적의
              &apos;지불수단 정보&apos;(관련 법률: GDPR 5(1)(e), 아일랜드
              세금통합법률 1997 및 관련 하위법령, EU 5번째 자금세탁방지법령 (EU
              법령 2018/843) 및 관련 법령) 및 플랫폼상 다수 당사자의 사기 시도
              탐지를 위한 안전 및 보안 목적의 보안 정보(로그인 및 관련 기기정보
              등 활동 관련 정보)와 보안 연결 정보(기기 및 계정 확인 관련 정보 및
              지불 수단 구별 정보)(관련 법률: GDPR 5(1)(f))입니다.
            </p>
            <p className="py-1.5 mb-5 pr-1">
              계정 삭제 요청 또는 서비스 종료에 따라 개인정보의 수집 및 이용
              목적이 달성된 개인정보는 재생이 불가능한 방법으로 파기하고
              있습니다. 전자적 파일 형태의 경우 복구 및 재생이 되지 않도록
              기술적인 방법을 이용하여 삭제하며, 실물 자료는 파쇄나 소각하여
              파기합니다.
            </p>
            <p className="font-semibold text-[22px] py-2 my-1 pr-3">
              개인정보 수집 및 이용을 거부할 권리
            </p>
            <p className="pb-10 pr-1">
              사용자는 개인정보 수집 및 이용을 거부할 권리가 있습니다. 사용자가
              회원 가입 과정에서 필수로 요구되는 최소한의 개인정보의 수집 및
              이용을 거부하는 경우 에어비앤비 서비스 이용이 어려울 수 있습니다.
            </p>
          </div>
        </div>
        <div
          className={`absolute bottom-[160px] ${
            isButtonVisible ? "visible" : "invisible"
          }`}
        >
          <button
            onClick={upBtn}
            className="flex items-center justify-center w-[141.4px] h-[48px]  bg-black rounded-lg"
          >
            <Up className="w-3 h-3 mr-1" />
            <span className="mr-1.5 text-white font-semibold">맨위로 가기</span>
          </button>
        </div>
      </div>
    </>
  );
}
