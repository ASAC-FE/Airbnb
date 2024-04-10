import React, { useState, useEffect } from 'react'
import Calendar from '@/app/components/header/Calendar'

export default function CalendarModal({onSelectRange}) {
  const [range, setRange] = useState(null) // range 상태 변수 추가
  const handleSelectRange = (newRange) => {
    onSelectRange(newRange);
  };

  return (
    <div className="flex items-center justify-center w-[800px] h-[480px] bg-white  z-10 rounded-xl shadow-lg">
      <div className="flex flex-col w-[311px] py-1 h-[44px] items-center justify-between rounded-full">
        <div className="flex mt-0 w-[300px] p-2 h-12 absolute top-8 items-center justify-between bg-gray-200 rounded-full text-sm font-semibold">
          <button className="h-10 px-2 py-1 rounded-full border bg-white">
            날짜 지정
          </button>
          <button className="px-4 py-1 rounded-full border">월 단위</button>
          <button className="px-2 py-1 rounded-full border=">
            유연한 일정
          </button>
        </div>

        <div className="absolute top-4 w-full h-full flex items-center justify-center px-0">
          <Calendar onSelectRange={handleSelectRange} />
        </div>
      </div>
    </div>
  )
}
