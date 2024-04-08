import React, { useState, useEffect } from 'react'
import Search from '/public/home/search.svg'
import LocationModal from '@/app/components/header/LocationModal'
import TravelerModal from '@/app/components/header/TravelerModal'
import CalendarModal from '@/app/components/header/CalendarModal'

export default function SearchBar() {
  const [locationAnchorEl, setLocationAnchorEl] = useState(null)
  const [travelerAnchorEl, setTravelerAnchorEl] = useState(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(null); // 새로운 상태 추가
  const [checkOutDate, setCheckOutDate] = useState(null); // 새로운 상태 추가
  const [guests, setGuests] = useState(0);

  const handleLocationModalOpen = (e) => {
    setLocationAnchorEl(e.currentTarget)
  }
  const handleTravelerModalOpen = (e) => {
    setTravelerAnchorEl(e.currentTarget)
  }
  const handleCheckInOutClick = () => {
    setShowCalendar(!showCalendar)
  }
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleSelectRange = (newRange) => {
    // 수정: newRange.from이 Date 객체인지 확인
    if (newRange.from instanceof Date) {
      setCheckInDate(newRange?.from);
    }
    setCheckOutDate(newRange?.to);
    setShowCalendar(false);
  }
  const [guestCounts, setGuestCounts] = useState({
    adult: 0,
    child: 0,
    baby: 0,
    pet: 0,
  });

  // Function to handle count change
  const handleCountChange = (counts) => {
    setGuestCounts({
      adult: counts[0],
      child: counts[1],
      baby: counts[2],
      pet: counts[3],
    });
  };

  return (
    <div className="w-[900px] h-[72px] relative flex border border-b border-gray-300 rounded-full shadow-lg">
      {/* 검색바 */}
      <button
        className="w-1/3 flex flex-col hover:bg-gray-100 rounded-full justify-center text-sm"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleLocationModalOpen}
      >      
        <div className='w-full flex flex-col justify-start items-start border-r'>
          <div className="mx-8 text-black font-bold">여행지</div>
          <input
            className="w-auto text-black-500 text-md font-bold items-center ml-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            placeholder="여행지 검색"
            value={selectedLocation}
            readOnly
          />
        </div> 
      </button>

      <button
        className="w-1/6 flex flex-col justify-center rounded-full hover:bg-gray-100 text-sm"
        onClick={handleCheckInOutClick}
      >
        <div className='w-full flex flex-col justify-start items-start border-r'>
          <div className="mx-8 text-black font-bold">체크인</div>
          <input
            className="w-2/3 pr-4 text-black-500 text-md font-bold items-center ml-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            placeholder="날짜 추가"
            value={checkInDate}
            readOnly
          />
        </div> 
      </button>
      <button
        className="w-1/6 flex flex-col justify-center rounded-full hover:bg-gray-100 text-sm"
        onClick={handleCheckInOutClick}
      >
        <div className='w-full flex flex-col justify-start items-start border-r'>
          <div className="mx-8 text-black font-bold">체크아웃</div>
          <input
            className="w-2/3 pr-4 text-black-500 text-md font-bold items-center ml-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            placeholder="날짜 추가"
            value={checkInDate}
            readOnly
          />
        </div> 
      </button>
      <button
        className="w-1/3 flex flex-col justify-center pr-8 rounded-full hover:bg-gray-100 text-sm"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleTravelerModalOpen}
      >
        <div className="text-black font-bold ml-8">여행자</div>
        <input
          className="w-auto text-black-500 text-md font-bold items-center ml-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          placeholder="여행지 검색"
          readOnly
        />
      </button>
      <div className="flex flex-row items-center mr-4">
        <button className="flex justify-center items-center rounded-full w-12 h-12 bg-rose-500 hover:bg-rose-600">
          <Search width="24" height="24" color={'white'} />
        </button> 
      </div>

      {/* 모달 */}
      <LocationModal
        anchorEl={locationAnchorEl}
        setAnchorEl={setLocationAnchorEl}
        onSelectLocation={handleLocationSelect}
      />
      <TravelerModal
        anchorEl={travelerAnchorEl}
        setAnchorEl={setTravelerAnchorEl}
        onCountChange={handleCountChange} 
      />
      {showCalendar && (
        <div className="absolute top-16 right-0 z-20">
          <CalendarModal onSelectRange={handleSelectRange} />
        </div>
      )}
    </div>
  )
}
