'use client';

import Image from 'next/image';

const interiorImages = [
  { id: 1, src: '/images/interior1.jpg', alt: '핵밥 매장 인테리어 1' },
  { id: 2, src: '/images/interior2.jpg', alt: '핵밥 매장 인테리어 2' },
  { id: 3, src: '/images/interior3.jpg', alt: '핵밥 매장 인테리어 3' },
  { id: 4, src: '/images/interior4.jpg', alt: '핵밥 매장 인테리어 4' },
  { id: 5, src: '/images/interior5.jpg', alt: '핵밥 매장 인테리어 5' },
  { id: 6, src: '/images/interior6.jpg', alt: '핵밥 매장 인테리어 6' }
];

export default function InteriorSection() {
  return (
    <section id="interior" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary-orange">인테리어</span> 갤러리
          </h2>
          <p className="text-gray-700">
            핵밥만의 특별한 매장 인테리어를 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {interiorImages.map((image) => (
            <div key={image.id} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="bg-orange-50 rounded-lg p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary-orange">핵밥</span>만의 특별한 인테리어
              </h3>
              <p className="text-gray-700 mb-4">
                핵밥은 모던하고 세련된 인테리어 디자인으로 고객들에게 편안하고 특별한
                식사 경험을 제공합니다. 최적화된 공간 활용과 동선 설계로
                매장 운영 효율성을 높이며, 깔끔하고 세련된 분위기로
                다양한 연령층에게 사랑받고 있습니다.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li className="mb-2">모던하고 세련된 디자인</li>
                <li className="mb-2">최적화된 공간 활용과 동선 설계</li>
                <li className="mb-2">가맹점 특성에 맞는 맞춤형 디자인 지원</li>
                <li className="mb-2">신속한 시공과 퀄리티 보장</li>
                <li>본사 전문가의 컨설팅 및 관리</li>
              </ul>
            </div>
            <div className="relative h-72 md:h-auto rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/interior-main.jpg"
                alt="핵밥 인테리어 메인"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
