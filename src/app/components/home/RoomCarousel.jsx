// ImageCarousel.js
import React, { useState } from 'react'
import ArrowLeft from '/public/carousel/arrowLeft.svg'
import ArrowRight from '/public/carousel/arrowRight.svg'
import Image from 'next/image'

export default function RoomCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPreviousSlide = (event) => {
    event.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNextSlide = (event) => {
    event.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="w-full h-[315px] relative">
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="rounded-lg"
        fill
      />
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent border-none outline-none"
        onClick={goToPreviousSlide}
      >
        <div className="w-auto h-auto p-1 bg-white rounded-full text-gray-700 border border-gray-400 items-center">
          <ArrowLeft width="24" height="24" />
        </div>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent border-none outline-none"
        onClick={goToNextSlide}
      >
        <div className="w-auto h-auto p-1 bg-white rounded-full text-gray-700 border border-gray-400 items-center">
          <ArrowRight width="24" height="24" />
        </div>
      </button>
    </div>
  )
}
