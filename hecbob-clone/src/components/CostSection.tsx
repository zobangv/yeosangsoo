'use client';

import { Button } from '@/components/ui/button';

export default function CostSection() {
  return (
    <section id="cost" className="py-16 bg-orange-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary-orange">창업</span> 비용
          </h2>
          <p className="text-gray-700">
            합리적인 비용으로 핵밥 창업을 시작하세요
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
          <div className="bg-dark-brown text-white p-6 text-center">
            <h3 className="text-2xl font-bold">핵밥 창업 비용 안내</h3>
            <p className="text-gray-200 mt-2">
              (기준: 25평형 / 20석 기준)
            </p>
          </div>

          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left font-bold border-b border-gray-200">항목</th>
                    <th className="p-3 text-right font-bold border-b border-gray-200 w-32">금액(만원)</th>
                    <th className="p-3 text-right font-bold border-b border-gray-200 w-32">프로모션 적용가</th>
                    <th className="p-3 text-left font-bold border-b border-gray-200">비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium">가맹비, 교육비, 보증금</td>
                    <td className="p-3 text-right">1,000</td>
                    <td className="p-3 text-right text-primary-orange font-bold">500</td>
                    <td className="p-3 text-gray-600">100호점 기념 할인</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium">인테리어 (바닥, 벽체, 천정, 조명, 전기, 설비, 주방)</td>
                    <td className="p-3 text-right">2,456</td>
                    <td className="p-3 text-right">2,456</td>
                    <td className="p-3 text-gray-600">지역별 상이함 / 기존 매장 상태에 따라 금액 변동</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium">주방기기 및 집기류 180종 (냉장고, 냉동고, 작업대, 렌지, 싱크대, 소화기, 대형선풍기 등)</td>
                    <td className="p-3 text-right">3,600</td>
                    <td className="p-3 text-right">3,600</td>
                    <td className="p-3 text-gray-600">매장 규모 / 20석 기준</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium">POS 시스템</td>
                    <td className="p-3 text-right">150</td>
                    <td className="p-3 text-right">150</td>
                    <td className="p-3 text-gray-600">태블릿, 모니터, 프린터, 카드단말기, 포스</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 font-medium">초도물품</td>
                    <td className="p-3 text-right">500</td>
                    <td className="p-3 text-right">500</td>
                    <td className="p-3 text-gray-600">(1회분 / 5m 기준)</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="p-3 font-bold">합계</td>
                    <td className="p-3 text-right font-bold">8,206</td>
                    <td className="p-3 text-right font-bold text-primary-orange">7,706</td>
                    <td className="p-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold mb-2">포함사항:</h4>
              <p className="text-gray-700 text-sm mb-4">
                가맹비, 교육비(개점), 홍보물, 인테리어, 간판(기본), 전기, 조명, 조리기기, 집기류, 홀가구, 설비, 철거,
                기본주방기기, CCTV, 싱크대, 개수대, 타공작업, 화장실, 테이블, 의자, 초도물품 등
              </p>

              <h4 className="font-bold mb-2">참고사항:</h4>
              <ol className="list-decimal list-inside text-gray-700 text-sm">
                <li className="mb-2">
                  상기 1. 창업비용은 점포의 위치에 따라 상권 및 임대료 등이 다르므로, 개별적인 상담을 통해 정확한 금액을 안내해 드립니다.
                </li>
                <li className="mb-2">
                  상기 2. 미포함 내역<br />
                  - 점포 관련: 권리금, 임차보증금 (임대차 특성, 지역적 상이함)<br />
                  - 기타 관련: 세금
                </li>
                <li className="mb-2">
                  상기 3. 모든 점포의 인테리어 공사는 구조적 특성에 따라 상이하며, 층고가 높거나 기둥, 공간구조 등에 따라 추가 비용이 발생할 수 있음을 알려드립니다.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary-orange">창업 비용 문의</span>
              </h3>
              <p className="text-gray-700 mb-4">
                더 자세한 창업 비용 정보가 필요하신가요?<br />
                핵밥의 창업 전문가가 정확한 정보를 안내해 드립니다.
              </p>
              <p className="text-gray-700 mb-6">
                지금 바로 상담을 신청하시고 성공 창업의 기회를 잡으세요!
              </p>
              <div className="flex flex-col space-y-4">
                <Button className="bg-primary-orange hover:bg-orange-700 text-white">
                  창업 비용 상담 신청
                </Button>
                <div className="flex items-center justify-center space-x-2 p-2 bg-orange-50 rounded-md">
                  <span className="font-bold">창업 문의 전화:</span>
                  <span className="text-primary-orange font-bold">1644-8442</span>
                </div>
              </div>
            </div>
            <div className="bg-dark-brown p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">창업 진행 과정</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</div>
                  <div>
                    <h4 className="font-bold">1단계: 문의 및 상담</h4>
                    <p className="text-sm text-gray-200">전화 또는 홈페이지를 통한 가맹 문의 및 상담</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</div>
                  <div>
                    <h4 className="font-bold">2단계: 입지 선정</h4>
                    <p className="text-sm text-gray-200">점포 물색 및 상권 분석, 수익성 검토</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</div>
                  <div>
                    <h4 className="font-bold">3단계: 계약 체결</h4>
                    <p className="text-sm text-gray-200">가맹 계약 체결 및 가맹비 납부</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</div>
                  <div>
                    <h4 className="font-bold">4단계: 인테리어 및 설비 공사</h4>
                    <p className="text-sm text-gray-200">매장 인테리어 및 주방 설비 공사</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</div>
                  <div>
                    <h4 className="font-bold">5단계: 오픈 준비 및 교육</h4>
                    <p className="text-sm text-gray-200">메뉴 및 운영 교육, 인력 채용</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
