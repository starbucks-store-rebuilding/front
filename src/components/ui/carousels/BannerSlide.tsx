'use client';
import { EventBannerImageType } from '@/types/ProductResponseDataTypes';
import { BannerSlideImageType } from '@/types/ResponseDataTypes';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { CommonResposiveNextImage } from '../CommonResponsiveNextImage';

export default function BannerSlide({
  slides,
  autoSlide = true,
}: {
  slides: EventBannerImageType[] | BannerSlideImageType[];
  autoSlide?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const slideRef = useRef<HTMLUListElement>(null);

  const startAutoSlide = () => {
    if (autoSlide && slides.length > 1) {
      stopAutoSlide();
      intervalId.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
  };

  const stopAutoSlide = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [slides.length, autoSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    stopAutoSlide();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 50) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else if (endX - startX > 50) {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
    startAutoSlide();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    stopAutoSlide();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setEndX(e.clientX);
  };

  const handleMouseUp = () => {
    if (startX - endX > 50) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else if (endX - startX > 50) {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
    startAutoSlide();
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    startAutoSlide();
  };

  return (
    <section
      className="relative w-full h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <ul
        ref={slideRef}
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => {
          const isEventBanner = 'eventUuid' in slide;
          if (isEventBanner) {
            return (
              <Link
                href={`/event?event=${slide.eventUuid}`}
                key={slide.mainBannerImageUuid}
                className="w-full flex-shrink-0 relative list-none"
              >
                <CommonResposiveNextImage
                  ImageUrl={slide.imageUrl}
                  description={slide.description}
                />
              </Link>
            );
          }
          return (
            <li
              key={slide.id}
              className="w-full flex-shrink-0 relative list-none"
            >
              <CommonResposiveNextImage
                ImageUrl={slide.imageUrl}
                description={slide.description}
              />
            </li>
          );
        })}
      </ul>
      <ul className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.length > 1 &&
          slides.map((_, index) => (
            <li
              key={index}
              className={`w-[0.59375rem] h-[0.59375rem] rounded-full transition-colors duration-300 cursor-pointer 
                shadow-md
              ${currentIndex === index ? 'bg-gray-2' : 'bg-white'}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
      </ul>
    </section>
  );
}
