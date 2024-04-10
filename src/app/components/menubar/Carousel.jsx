'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import ArrowLeft from '/public/carousel/arrowLeft.svg'
import ArrowRight from '/public/carousel/arrowRight.svg'

export default function Carousel() {
  const menus = [
    { imgpath: 'menu_icon1.jpg', menuname: '캠핑장' },
    { imgpath: 'menu_icon2.jpg', menuname: '기상천외한 숙소' },
    { imgpath: 'menu_icon3.jpg', menuname: '통나무집' },
    { imgpath: 'menu_icon4.jpg', menuname: '디자인' },
    { imgpath: 'menu_icon5.jpg', menuname: '호수 근처' },
    { imgpath: 'menu_icon6.jpg', menuname: '스키' },
    { imgpath: 'menu_icon7.jpg', menuname: '방' },
    { imgpath: 'menu_icon8.jpg', menuname: '최고의 전망' },
    { imgpath: 'menu_icon9.jpg', menuname: '한적한 시골' },
    { imgpath: 'menu_icon10.jpg', menuname: '해변 바로 앞' },
    { imgpath: 'menu_icon11.jpg', menuname: '한옥' },
    { imgpath: 'menu_icon12.jpg', menuname: '료칸' },
    { imgpath: 'menu_icon13.jpg', menuname: '저택' },
    { imgpath: 'menu_icon14.jpg', menuname: '인기 급상승' },
    { imgpath: 'menu_icon15.jpg', menuname: '멋진 수영장' },
    { imgpath: 'menu_icon16.jpg', menuname: '국립공원' },
    { imgpath: 'menu_icon17.jpg', menuname: '민수' },
    { imgpath: 'menu_icon18.jpg', menuname: '초소형 주택' },
    { imgpath: 'menu_icon19.jpg', menuname: '상징적 도시' },
    { imgpath: 'menu_icon20.jpg', menuname: '농장' },
    { imgpath: 'menu_icon21.jpg', menuname: '스키 타고 출입' },
    { imgpath: 'menu_icon22.jpg', menuname: '와인 농장' },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalMenus = menus.length;
  const visibleMenus = 15;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleMenus >= totalMenus ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? totalMenus - visibleMenus : prevIndex - 1));
  };

  return (
    <div className="w-full h-[90px] pt-8 pb-0 px-16 flex justify-between items-center">
      <button
        className="prev"
        onClick={prevSlide}
      >
        <div className="w-auto h-auto p-1 bg-white rounded-full text-gray-700 border border-gray-400 items-center">
          <ArrowLeft width="24" height="24" />
        </div>
      </button>
      <div className="w-auto flex justify-between items-center space-x-12 transition-all duration-2000 ">
        {menus
          .slice(currentIndex, currentIndex + visibleMenus)
          .map((menu, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <Image
              src={`/menubar/${menu.imgpath}`}
              alt={menu.menuname}
              width={24}
              height={24}
            />
            <p className="text-sm text-gray-600 mt-2">{menu.menuname}</p>
          </div>
        ))}
      </div>
      <button
        className="next"
        onClick={nextSlide}
      >
        <div className="w-auto h-auto p-1 bg-white rounded-full text-gray-700 border border-gray-400 items-center">
          <ArrowRight width="24" height="24" />
        </div>
      </button>
    </div>
  )
}
