'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const historyItems = [
  { year: '2025', event: '300호점 달성 목표' },
  { year: '2025', event: '동남아 1호점 오픈' },
  { year: '2024', event: '100호점 돌파' },
  { year: '2024', event: '브랜드 리뉴얼' },
  { year: '2024', event: '매출 1억 달성 매장 50개 이상' },
  { year: '2023', event: '가맹점 CEO 컨벤션' },
  { year: '2023', event: '80호점 돌파' },
  { year: '2023', event: '메뉴 4차 업데이트' },
  { year: '2023', event: '월 매출 7천만원 돌파' },
  { year: '2022', event: '매출 3억 돌파' },
  { year: '2022', event: '50호점 돌파' },
  { year: '2022', event: '가맹점 CEO 컨벤션 2차' },
  { year: '2021', event: '메뉴 개발 2차 업데이트' },
  { year: '2021', event: '매출 2억 달성' },
  { year: '2021', event: '가맹점 CEO 컨벤션 진행' },
  { year: '2021', event: '30호점 돌파' },
  { year: '2020', event: '20호점 돌파' },
  { year: '2020', event: '메뉴 개발 1차' },
  { year: '2019', event: '브랜드 3차 개선 (현재)' },
  { year: '2018', event: '브랜드 2차 개선 (핵밥)' },
  { year: '2017', event: '1호점 오픈 (핵밥)' }
];

const strengths = [
  {
    id: 1,
    title: '압도적인 맛',
    description: '창업주 출신 오너셰프의 노하우가 담긴 특제 소스와 레시피로 차별화된 맛을 제공합니다.',
    image: '/images/strength1.jpg'
  },
  {
    id: 2,
    title: '효율적인 운영 시스템',
    description: '최소 인력으로 최대 효율을 내는 시스템으로 인건비 부담을 줄이고 수익성을 높입니다.',
    image: '/images/strength2.jpg'
  },
  {
    id: 3,
    title: '체계적인 브랜딩',
    description: '지속적인 브랜드 관리와 마케팅 지원으로 가맹점의 안정적인 성장을 돕습니다.',
    image: '/images/strength3.jpg'
  },
  {
    id: 4,
    title: '든든한 본사 지원',
    description: '상권분석부터 오픈 후 관리까지 체계적인 본사 지원으로 초보 창업자도 안심하고 시작할 수 있습니다.',
    image: '/images/strength4.jpg'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary-orange">핵밥</span> 소개
          </h2>
          <p className="text-gray-700">
            대한민국 No.1 양념 소고기 전문 브랜드 여상수의 성공 스토리를 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-orange">핵밥</span>은 차별화된 브랜드입니다
            </h3>
            <p className="text-gray-700 mb-4">
              여상수는 한국인이 사랑하는 안동소갈비를 더욱 저렴한 가격에 
              최상의 맛과 품질로 제공하는 프랜차이즈 브랜드입니다.
              2023년 1호점을 시작으로 빠르게 성장하여 현재 8호점 이상의
              매장을 운영하고 있으며, 월 매출 1억을 달성하는 매장이 지속적으로 늘어나고 있습니다.
            </p>
            <p className="text-gray-700 mb-6">
              철저한 품질 관리와 효율적인 운영 시스템, 지속적인 메뉴 개발로
              가맹점 성공률을 높이고 있으며, 초보 창업자도 쉽게 운영할 수 있는
              시스템화된 메뉴얼을 제공합니다.
            </p>
            <Button className="bg-primary-orange hover:bg-orange-700 text-white w-fit">
              가맹 문의하기
            </Button>
          </div>
          <div className="relative h-80 md:h-auto rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about-main.jpg"
              alt="여상수 매장"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-primary-orange">여상수</span>의 경쟁력
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((item) => (
              <div key={item.id} className="bg-orange-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-primary-orange">핵밥</span>의 역사
          </h3>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[...Array(Math.ceil(historyItems.length / 5))].map((_, i) => (
                <AccordionItem key={`history-${i}`} value={`history-${i}`}>
                  <AccordionTrigger className="text-lg font-semibold">
                    {i === 0 ? "최근 연혁" : `${historyItems[i * 5].year} ~ ${historyItems[Math.min((i + 1) * 5 - 1, historyItems.length - 1)].year} 연혁`}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {historyItems.slice(i * 5, Math.min((i + 1) * 5, historyItems.length)).map((item, idx) => (
                        <li key={`${item.year}-${idx}`} className="flex border-b border-gray-100 pb-2">
                          <span className="font-bold w-16 text-primary-orange">{item.year}</span>
                          <span className="text-gray-700">{item.event}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
