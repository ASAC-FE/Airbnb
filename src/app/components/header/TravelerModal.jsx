'use client'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React, { useState, useEffect } from 'react'
import PetModal from '@/app/components/header/PetModal'
import Plus from '/public/travelermodal/plus.svg'
import Minus from '/public/travelermodal/minus.svg'

// count 상태 Custom Hook
function useCount(initialCount) {
  const [count, setCount] = useState(initialCount)
  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const onDecrease = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0)) // 최솟값 0 설정
  }
  return [count, onIncrease, onDecrease]
}

export default function TravelerModal({ anchorEl, setAnchorEl, onCountChange }) {
  // traveler 내용
  const [adultCount, onIncreaseAdultCount, onDecreaseAdultCount] = useCount(0)
  const [childCount, onIncreaseChildCount, onDecreaseChildCount] = useCount(0)
  const [babyCount, onIncreaseBabyCount, onDecreaseBabyCount] = useCount(0)
  const [petCount, onIncreasePetCount, onDecreasePetCount] = useCount(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 모달 박스 MUI
  const isOpen = Boolean(anchorEl)
  const onClose = () => {
    setAnchorEl(null)
  }
  const handleCountChange = () => {
    onCountChange([adultCount, childCount, babyCount, petCount]);
  };
  return (
    <Menu
      id="traveler-modal"
      anchorEl={anchorEl}
      keepMounted
      open={isOpen}
      onClose={onClose}
      sx={{   
        '.MuiPaper-root': {
          borderRadius: '16px',
          width: '400px',
        },
        }}
    >
      <MenuItem
        sx={{
          fontSize: '16px',
          padding: '8px',
          '&:hover': {
            backgroundColor: 'transparent'
          },
          'root':{
            '&$selected': {
              backgroundColor: 'transparent'
          },
        },
        }}
      >
        <div className="flex justify-between w-full py-4 px-8">
          <div className="flex flex-col">
            <span className="font-bold">성인</span>
            <span className="text-sm text-gray-500">13세 이상</span>
          </div>

          <div className="flex justify-between w-28 items-center">
            <button
              onClick={() => {
                onDecreaseAdultCount();
                handleCountChange();
              }}
              className={adultCount!==0 ? "items-center p-2 border rounded-full border-gray-400 text-gray-500 hover:border-black hover:text-black" : "text-gray-200 border-gray-200 items-center p-2 border rounded-full"}
            >
              <Minus width="18" height="18"/>
            </button>
            <span className="p-4">{adultCount}</span>
            <button
              onClick={() => {
                onIncreaseAdultCount();
                handleCountChange();
              }}
              className="items-center p-2 border rounded-full border-gray-400 text-gray-500 hover:border-black hover:text-black"
            >
              <Plus width="18" height="18"/> 
            </button>
          </div>
        </div>
      </MenuItem>
      <hr />
      <MenuItem sx={{ fontSize: '16px', padding: '8px' }}>
        {' '}
        <div className="flex justify-between w-full py-4 px-8">
          <div className="flex flex-col">
            <span className="font-bold">어린이</span>
            <span className="text-sm text-gray-500">2~12세</span>
          </div>

          <div className="flex justify-between w-28 items-center">
            <button
              onClick={() => {
              onDecreaseChildCount();
              handleCountChange();
              }}
              className={childCount!==0 ? "items-center p-2 border rounded-full border-gray-400 text-gray-500 hover:border-black hover:text-black" : "text-gray-200 border-gray-200 items-center p-2 border rounded-full"}
            >
              <Minus width="18" height="18"/>
            </button>
            <span className="p-4">{childCount}</span>
            <button
              onClick={() => {
              onIncreaseChildCount();
              handleCountChange();
              }}
              className="items-center p-2 border rounded-full border-gray-400 text-gray-500 hover:border-black hover:text-black"
            >
              <Plus width="18" height="18"/>
            </button>
          </div>
        </div>

      </MenuItem>
      <hr />
      <MenuItem sx={{ fontSize: '16px', padding: '8px' }}>
        <div className="flex justify-between w-full py-4 px-8">
          <div className="flex flex-col">
            <span className="font-bold">유아</span>
            <span className="text-sm text-gray-500">2세 미만</span>
          </div>

          <div className="flex justify-between w-28 items-center">
            <button
              onClick={() => {
                onDecreaseBabyCount();
                handleCountChange();
                }}
              className={babyCount!==0 ? "items-center p-2 border rounded-full border-gray-400 text-gray-500 hover:border-black hover:text-black" : "text-gray-200 border-gray-200 items-center p-2 border rounded-full"}
            >
              <Minus width="18" height="18"/>
            </button>
            <span className="p-4">{babyCount}</span>
            <button
              onClick={() => {
                onIncreaseBabyCount();
                handleCountChange();
                }}
              className="items-center p-2 border rounded-full border-gray-400 text-gray-500 hover:border-black hover:text-black"
            >
              <Plus width="18" height="18"/>
            </button>
          </div>
        </div>
      </MenuItem>
      <hr />
      <MenuItem sx={{ fontSize: '16px', padding: '8px' }}>
        <div className="flex justify-between w-full py-4 px-8">
          <div className="flex flex-col">
            <span className="font-bold">반려동물</span>
            <button
              className="text-sm font-bold text-gray-600"
              onClick={() => {
                setIsModalOpen(true)
              }}
            >
              보조동물을 동반하시나요?
            </button>
          </div>

          <div className="flex justify-between w-28 items-center">
            <button
              onClick={() => {
                onDecreasePetCount();
                handleCountChange();
                }}
              className={petCount!==0 ? "items-center p-2 border rounded-full border-gray-400 text-gray-500 hover:border-black hover:text-black" : "text-gray-200 border-gray-200 items-center p-2 border rounded-full"}
            >
              <Minus width="18" height="18"/>
            </button>
            <span className="p-4">{petCount}</span>
            <button
              onClick={() => {
                onIncreasePetCount();
                handleCountChange();
                }}
              className="items-center p-2 border rounded-full border-gray-400 text-gray-500 hover:border-black hover:text-black"
            >
              <Plus width="18" height="18"/>
            </button>
          </div>
        </div>
      </MenuItem>
      {isModalOpen && <PetModal setIsModalOpen={setIsModalOpen} />}
    </Menu>
  )
}
