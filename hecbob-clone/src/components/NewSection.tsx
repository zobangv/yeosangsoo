'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const newItems = [
  {
    id: 1,
    image: '/images/new1.jpg',
    title: '핵밥, 100호점 돌파 기념 프로모션',
    description: '창업 비용 지원 및 특별 패키지 제공'
  },
  {
    id: 2,
    image: '/images/new2.jpg',
    title: '월매출 1억 돌파 매장 연이어 등장',
    description: '차별화된 전략과 제품력으로 안정적인 매출 확보'
  },
  {
    id: 3,
    image: '/images/new3.jpg',
    title: '핵밥, 2025년 300호점 달성 목표',
    description: '전국적으로 확대되는 핵밥의 성공 스토리'
  }
];

export default function NewSection() {
  return (
    <section id="new" className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary-orange">핵밥 NEW</span> 소식
          </h2>
          <p className="text-gray-700">핵밥의 최신 소식과 성공 스토리를 확인하세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newItems.map((item) => (
            <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">
            핵밥의 <span className="text-primary-orange">성공적인 행보</span>가 계속됩니다
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-orange">300+</div>
              <div className="text-gray-600">매장 확장 목표</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-orange">100+</div>
              <div className="text-gray-600">현재 매장 수</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-orange">1억+</div>
              <div className="text-gray-600">월매출 달성</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-orange">7천만</div>
              <div className="text-gray-600">월평균 매출</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
