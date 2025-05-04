'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'NEW', href: '#new' },
    { name: '핵밥소개', href: '#about' },
    { name: '가맹문의', href: '#franchise' },
    { name: '성공스토리', href: '#success' },
    { name: 'NO.1 경쟁력', href: '#competitive' },
    { name: '인테리어', href: '#interior' },
    { name: '창업비용', href: '#cost' }
  ];

  return (
    <header className="bg-dark-brown sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="HECBOB 로고"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Phone number */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center text-white">
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-bold text-lg">1644-8442</span>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-dark-brown">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      <Image
                        src="/images/logo.png"
                        alt="HECBOB 로고"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                      />
                    </Link>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="nav-link text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pt-6">
                    <div className="flex items-center text-white">
                      <Phone className="h-5 w-5 mr-2" />
                      <span className="font-bold text-lg">1644-8442</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
