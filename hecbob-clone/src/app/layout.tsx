import type { Metadata } from 'next';
import ClientBody from './ClientBody';
import './globals.css';

export const metadata: Metadata = {
  title: '여상수 - 대한민국 No.1 양념소고기전문 프랜차이즈',
  description: '여상수는 대한민국 No.1 양념 소고기 전문 브랜드입니다. 검증된 시스템으로 어떤 시기에도 흔들림없이 안정적인 수익을 만들어 냅니다. 절대망하지 않는 생존구조, 지금 그 성공 스토리를 직접 확인해보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
