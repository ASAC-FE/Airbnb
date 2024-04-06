
import SVG_Repot from "/public/report.svg";
import React from 'react'


export default async function Reservation({id=2}) {

  const info = await fetch(`http://localhost:3000/api/rooms/${id}`, {
    cache: "no-cache",
  });
  const parsedJson = await info.json();
  const parsedData = parsedJson.data;
  return (
    <div className="flex ml-auto mr-0 w-[375px] sticky top-20 border border-customBGGray rounded-lg shadow-xl mt-8">
          <div className="p-6">
            <div className="flex flex-col">
              <div className="mb-6">
                <span className="font-semibold text-xl">₩{parsedData.price} </span>
                <span className="text-lg">/박</span>
              </div>
              <div className="flex flex-col w-[320px] h-[120px] justify-between items-center border border-black rounded-md">
                <div className="flex flex-row h-1/2 w-full">
                  <span className="w-1/2 text-xs pr-1/2 border-r border-black p-2">체크인</span>
                  <span className="text-xs p-2">체크아웃</span>
                </div>
                <div className="h-1/2 w-full border-t border-black">
                  <span className="text-xs p-2">인원</span>
                </div>
              </div>
              <button className="my-4 py-1 h-12 bg-rose-500 w-auto justify-start items-center hover:bg-rose-700 rounded-lg text-white text-md">예약하기</button>
              <div className="px-4 text-sm text-gray-500 w-auto text-center">예약 확정 전에는 요금이 청구되지 않습니다.</div>
              <div className="flex flex-row w-auto justify-between text-md text-gray-600 mt-4">
                <span>₩{parsedData.price} x 12박</span>
                <span>₩1,100,101</span>
              </div>
              <div className="flex flex-row w-auto justify-between text-md text-gray-600 mt-4 mb-8">
                <span className="underline">에어비앤비 서비스 수수료</span>
                <span>₩171,997</span>
              </div>
              <hr />
              <div className="flex flex-row w-auto justify-between text-md font-semibold text-black-700 mt-4">
                <span>총 합계</span>
                <span>₩1,271,997</span>
              </div>
            </div>
          </div>
        </div>

  );
}
