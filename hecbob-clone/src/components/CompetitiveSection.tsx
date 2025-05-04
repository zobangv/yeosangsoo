'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const competitiveItems = [
  {
    id: 1,
    title: '압도적인 맛',
    description: '오너셰프가 개발한 특별한 레시피로 고객 만족도 최상',
    image: '/images/competitive1.jpg',
    stats: '98%',
    statsDesc: '고객 재방문율'
  },
  {
    id: 2,
    title: '효율적인 매장 운영',
    description: '최소 인력으로 최대 효율을 내는 시스템화된 운영 구조',
    image: '/images/competitive2.jpg',
    stats: '1~2명',
    statsDesc: '필요 인력'
  },
  {
    id: 3,
    title: '합리적인 창업 비용',
    description: '초기 투자 비용 대비 높은 수익성 확보',
    image: '/images/competitive3.jpg',
    stats: '7,706만원',
    statsDesc: '창업 비용'
  },
  {
    id: 4,
    title: '차별화된 메뉴 구성',
    description: '핵밥만의 특별한 메뉴로 경쟁력 확보',
    image: '/images/competitive4.jpg',
    stats: '30+',
    statsDesc: '메뉴 구성'
  }
];

const reviewItems = [
  {
    id: 1,
    location: '서울 강남점',
    owner: '김OO 점주님',
    content: '처음 창업이라 걱정이 많았는데, 핵밥 본사의 체계적인 지원으로 안정적인 매출을 올리고 있습니다. 특히 메뉴의 맛과 품질이 좋아 단골 고객이 많이 늘었습니다.',
    image: '/images/review1.jpg',
    stats: '월 9천만원',
    statsDesc: '평균 매출'
  },
  {
    id: 2,
    location: '부산 해운대점',
    owner: '이OO 점주님',
    content: '타 브랜드에서 실패 후 핵밥으로 재창업했는데, 매출이 2배 이상 늘었습니다. 효율적인 운영 시스템 덕분에 인건비 부담도 적고 수익률이 높아요.',
    image: '/images/review2.jpg',
    stats: '월 1억 2천',
    statsDesc: '평균 매출'
  },
  {
    id: 3,
    location: '대전 둔산점',
    owner: '박OO 점주님',
    content: '창업 6개월 만에 월 매출 1억을 돌파했습니다. 본사의 마케팅 지원과 꾸준한 신메뉴 개발이 큰 도움이 되었습니다.',
    image: '/images/review3.jpg',
    stats: '월 1억',
    statsDesc: '평균 매출'
  }
];

export default function CompetitiveSection() {
  return (
    <section id="competitive" className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary-orange">NO.1</span> 경쟁력
          </h2>
          <p className="text-gray-700">
            핵밥만의 차별화된 경쟁력으로 성공적인 창업을 약속합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {competitiveItems.map((item) => (
            <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-xl font-bold text-primary-orange">{item.stats}</div>
                    <div className="text-gray-600 text-sm">{item.statsDesc}</div>
                  </div>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-primary-orange">가맹점</span> 성공 스토리
          </h3>
          <p className="text-gray-700">
            핵밥 가맹점의 실제 성공 사례를 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewItems.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.location}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="font-bold text-xl">{item.location}</div>
                    <div className="text-sm">{item.owner}</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xl font-bold text-primary-orange">{item.stats}</div>
                    <div className="text-gray-600 text-sm">{item.statsDesc}</div>
                  </div>
                  <p className="text-gray-700 text-sm italic">"{item.content}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-dark-brown rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">
            <span className="text-orange-300">99%</span>의 가맹점이 안정적인 수익을 창출하고 있습니다
          </h3>
          <p className="text-gray-200 mb-6 max-w-3xl mx-auto">
            핵밥은 철저한 상권분석과 효율적인 운영 시스템, 지속적인 신메뉴 개발로
            가맹점의 성공을 실현합니다.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-[#5D4025] p-4 rounded-lg">
              <div className="text-3xl font-bold text-orange-300">300+</div>
              <div className="text-gray-200 text-sm">확장 매장 목표</div>
            </div>
            <div className="bg-[#5D4025] p-4 rounded-lg">
              <div className="text-3xl font-bold text-orange-300">99%</div>
              <div className="text-gray-200 text-sm">가맹점 생존율</div>
            </div>
            <div className="bg-[#5D4025] p-4 rounded-lg">
              <div className="text-3xl font-bold text-orange-300">1억+</div>
              <div className="text-gray-200 text-sm">월 매출 달성</div>
            </div>
            <div className="bg-[#5D4025] p-4 rounded-lg">
              <div className="text-3xl font-bold text-orange-300">2.7년</div>
              <div className="text-gray-200 text-sm">투자 회수 기간</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
