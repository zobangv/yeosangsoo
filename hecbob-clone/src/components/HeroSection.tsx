'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    image: '/images/hero1.jpg',
    title: '핵밥 & 라멘 1등 프랜차이즈',
    subtitle: '월매출 1억 돌파 매장 속출중!'
  },
  {
    id: 2,
    image: '/images/hero2.jpg',
    title: '가맹점 월평균 매출 7천만원',
    subtitle: '핵밥의 전략적 노하우로 안정적인 매출 확보'
  },
  {
    id: 3,
    image: '/images/hero3.jpg',
    title: '100호점 한정 프로모션',
    subtitle: '특별한 혜택과 함께 핵밥 창업의 기회를 잡으세요'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white drop-shadow-lg mb-8">
                {slide.subtitle}
              </p>
              <Button className="bg-primary-orange hover:bg-orange-700 text-white px-8 py-6 text-lg font-bold">
                창업문의 바로가기
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-primary-orange' : 'bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
