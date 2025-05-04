'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="block mb-4">
              <Image
                src="/images/logo.png"
                alt="HECBOB 로고"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              핵밥은 한국인이 사랑하는 덮밥과 라멘을 현대적으로 재해석하여
              최상의 맛과 품질로 제공하는 프랜차이즈 브랜드입니다.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com" target="_blank" className="text-white hover:text-orange-300">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" className="text-white hover:text-orange-300">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.youtube.com" target="_blank" className="text-white hover:text-orange-300">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">회사 정보</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>주소: 서울특별시 강남구 테헤란로 123</li>
              <li>대표: 홍길동</li>
              <li>사업자등록번호: 123-45-67890</li>
              <li>통신판매업신고: 제2023-서울강남-1234호</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-300 text-sm">
                  가맹점 문의
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-300 text-sm">
                  창업 설명회
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-300 text-sm">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-300 text-sm">
                  제휴 문의
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-300 text-sm">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">연락처</h3>
            <div className="text-3xl font-bold text-orange-300 mb-2">1644-8442</div>
            <p className="text-gray-300 text-sm mb-4">
              평일 09:00 - 18:00<br />
              점심시간 12:00 - 13:00<br />
              토/일/공휴일 휴무
            </p>
            <div className="bg-[#5D4025] p-3 rounded-lg flex items-center justify-center hover:bg-[#6D5035] transition-colors cursor-pointer">
              <span className="text-white font-bold">1:1 상담 문의하기</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-gray-400 text-sm">
          <p className="mb-2">
            본 홈페이지의 콘텐츠는 저작권법의 보호를 받는 바, 무단 사용 및 도용 시 법적 제재를 받을 수 있습니다.
          </p>
          <p>© {new Date().getFullYear()} (주)핵밥. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
