import React, { useState } from 'react'
import Search from '/public/home/search.svg'
import LocationModal from '@/app/components/header/LocationModal'
import TravelerModal from '@/app/components/header/TravelerModal'
import CalendarModal from '@/app/components/header/CalendarModal'

export default function SearchBar() {
  const [locationAnchorEl, setLocationAnchorEl] = useState(null)
  const [travelerAnchorEl, setTravelerAnchorEl] = useState(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState('');
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
  return (
    <div className="w-[900px] h-[72px] relative flex border border-b border-gray-300 rounded-full shadow-lg">
      {/* 검색바 */}
      <button
        className="w-1/3 flex flex-col justify-center hover:bg-gray-100 rounded-full text-sm"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleLocationModalOpen}
      >       
        <div className="text-black font-bold ml-8">여행지</div>
        <input
          className="text-gray-500 items-center ml-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          placeholder="여행지 검색"
          value={selectedLocation}
          readOnly
        />
      </button>

      <button
        className="w-1/6 flex flex-col justify-center rounded-full hover:bg-gray-100 text-sm"
        onClick={handleCheckInOutClick}
      >
        <div className="text-black font-bold ml-8">체크인</div>
        <div className="text-gray-500 items-center ml-8">날짜 추가</div>
      </button>
      <button
        className="w-1/6 flex flex-col justify-center rounded-full hover:bg-gray-100 text-sm"
        onClick={handleCheckInOutClick}
      >
        <div className="text-black font-bold ml-8">체크아웃</div>
        <div className="text-gray-500 items-center ml-8">날짜 추가</div>
      </button>
      <button
        className="w-1/3 flex flex-col justify-center pr-8 rounded-full hover:bg-gray-100 text-sm"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleTravelerModalOpen}
      >
        <div className="text-black font-bold ml-8">여행자</div>
        <div className="text-gray-500 items-center ml-8">게스트 추가</div>
      </button>
      <div className="flex flex-row items-center mr-4">
        <button className="flex justify-center items-center rounded-full w-12 h-12 bg-rose-500 hover:bg-rose-600">
          <Search width="24" height="24" />
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
      />
      {showCalendar && (
        <div className="absolute top-16 right-0 z-20">
          <CalendarModal />
        </div>
      )}
    </div>
  )
}
