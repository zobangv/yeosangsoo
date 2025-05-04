'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function FranchiseSection() {
  return (
    <section id="franchise" className="py-16 bg-orange-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary-orange">창업 문의</span> 안내
          </h2>
          <p className="text-gray-700">
            핵밥과 함께 성공적인 창업 스토리를 만들어보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/franchise-join.jpg"
                alt="핵밥 창업 안내"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">핵밥 가맹점 모집</h3>
              <p className="text-gray-700 mb-4">
                핵밥은 체계적인 시스템과 안정적인 수익구조로 초보 창업자도 쉽게 성공할 수 있습니다.
                현재 전국적으로 100호점 이상 운영중이며, 월 매출 1억 돌파 매장이 지속적으로 나오고 있습니다.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>초기 투자 비용 대비 높은 수익성</li>
                <li>효율적인 매장 운영 시스템</li>
                <li>지속적인 신메뉴 개발 및 마케팅 지원</li>
                <li>체계적인 교육 프로그램 제공</li>
              </ul>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary-orange hover:bg-orange-700 text-white w-full">
                    가맹점 개설 문의하기
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">핵밥 가맹점 개설 문의</DialogTitle>
                    <DialogDescription className="text-gray-700">
                      아래 정보를 입력하시면 담당자가 빠르게 연락드립니다.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label className="text-right text-sm font-medium">이름</label>
                      <input
                        className="col-span-3 flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="이름을 입력하세요"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label className="text-right text-sm font-medium">연락처</label>
                      <input
                        className="col-span-3 flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="연락처를 입력하세요"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label className="text-right text-sm font-medium">희망지역</label>
                      <input
                        className="col-span-3 flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="희망지역을 입력하세요"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label className="text-right text-sm font-medium align-top pt-2">문의사항</label>
                      <textarea
                        className="col-span-3 flex min-h-24 rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="문의사항을 입력하세요"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-primary-orange hover:bg-orange-700 text-white">
                      문의하기
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/franchise-process.jpg"
                alt="핵밥 창업 과정"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">창업 프로세스</h3>
              <p className="text-gray-700 mb-4">
                핵밥은 체계적인 창업 과정을 통해 초보 창업자도 쉽게 매장을 오픈할 수 있도록 도와드립니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</div>
                  <div>
                    <h4 className="font-bold">가맹 문의</h4>
                    <p className="text-gray-600 text-sm">전화 또는 홈페이지를 통한 가맹 문의</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</div>
                  <div>
                    <h4 className="font-bold">본사 방문 및 상담</h4>
                    <p className="text-gray-600 text-sm">브랜드 소개, 수익성 분석, 개설 조건 안내</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</div>
                  <div>
                    <h4 className="font-bold">상권 분석 및 점포 선정</h4>
                    <p className="text-gray-600 text-sm">최적의 입지 선정 및 상권 분석</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</div>
                  <div>
                    <h4 className="font-bold">계약 체결</h4>
                    <p className="text-gray-600 text-sm">가맹 계약 체결 및 창업 일정 확정</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</div>
                  <div>
                    <h4 className="font-bold">인테리어 및 설비 공사</h4>
                    <p className="text-gray-600 text-sm">핵밥 매뉴얼에 맞는 인테리어 및 설비 공사</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">6</div>
                  <div>
                    <h4 className="font-bold">교육 및 트레이닝</h4>
                    <p className="text-gray-600 text-sm">매장 운영 및 조리 교육 진행</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">7</div>
                  <div>
                    <h4 className="font-bold">그랜드 오픈</h4>
                    <p className="text-gray-600 text-sm">오픈 마케팅 및 영업 개시</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            지금 바로 핵밥과 함께 성공 창업을 시작하세요!
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            핵밥은 차별화된 메뉴와 효율적인 운영 시스템으로 초보 창업자도 쉽게 성공할 수 있도록 돕습니다.
            지금 바로 문의하시고 핵밥과 함께 성공적인 창업을 시작하세요.
          </p>
          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary-orange mb-2">1644-8442</div>
              <div className="text-gray-600">창업 상담 전화</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary-orange mb-2">24시간</div>
              <div className="text-gray-600">온라인 문의</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
