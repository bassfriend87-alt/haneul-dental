"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ClinicStatus } from "./ClinicStatus";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    // 인앱 브라우저(카카오 등) 배경 스크롤 차단
    const preventBg = (e: TouchEvent) => e.preventDefault();
    document.addEventListener("touchmove", preventBg, { passive: false });

    // 메뉴 내부 스크롤은 허용
    const allowMenu = (e: TouchEvent) => e.stopPropagation();
    const menuEl = menuRef.current;
    menuEl?.addEventListener("touchmove", allowMenu);

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
      document.removeEventListener("touchmove", preventBg);
      menuEl?.removeEventListener("touchmove", allowMenu);
    };
  }, [isOpen]);


  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center" onClick={close}>
            <Image
              src="/images/logo-color.png"
              alt="상암하늘치과의원"
              width={197}
              height={32}
              priority
            />
          </Link>
          <ClinicStatus />
        </div>

        {/* 데스크탑 nav */}
        <nav className="hidden md:flex gap-5 text-sm text-charcoal-light">
          <Link href="/about" className="hover:text-primary transition-colors">원장 소개</Link>
          <Link href="/schedule" className="hover:text-primary transition-colors">진료일정</Link>
          <span className="w-px h-4 bg-gray-200 self-center" />
          <Link href="/treatment/implant" className="hover:text-primary transition-colors">임플란트</Link>
          <div className="relative group">
            <Link href="/treatment/prosthetics" className="hover:text-primary transition-colors flex items-center gap-0.5">
              보철치료
              <svg className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 z-50">
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-1 w-24">
                <Link href="/treatment/prosthetics#crown" className="block px-4 py-2 text-sm text-charcoal hover:text-primary hover:bg-gray-50 transition-colors">크라운</Link>
                <Link href="/treatment/prosthetics#bridge" className="block px-4 py-2 text-sm text-charcoal hover:text-primary hover:bg-gray-50 transition-colors">브릿지</Link>
                <Link href="/treatment/prosthetics#denture" className="block px-4 py-2 text-sm text-charcoal hover:text-primary hover:bg-gray-50 transition-colors">틀니</Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link href="/treatment/restorative" className="hover:text-primary transition-colors flex items-center gap-0.5">
              보존치료
              <svg className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 z-50">
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-1 w-24">
                <Link href="/treatment/restorative#cavity" className="block px-4 py-2 text-sm text-charcoal hover:text-primary hover:bg-gray-50 transition-colors">충치치료</Link>
                <Link href="/treatment/restorative#root-canal" className="block px-4 py-2 text-sm text-charcoal hover:text-primary hover:bg-gray-50 transition-colors">신경치료</Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link href="/treatment/periodontal" className="hover:text-primary transition-colors flex items-center gap-0.5">
              치주치료
              <svg className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 z-50">
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-1 w-24">
                <Link href="/treatment/periodontal#scaling" className="block px-4 py-2 text-sm text-charcoal hover:text-primary hover:bg-gray-50 transition-colors">스케일링</Link>
                <Link href="/treatment/periodontal#gum-treatment" className="block px-4 py-2 text-sm text-charcoal hover:text-primary hover:bg-gray-50 transition-colors">잇몸치료</Link>
              </div>
            </div>
          </div>
          <Link href="/treatment/tmj" className="hover:text-primary transition-colors">턱관절</Link>
        </nav>

        {/* 데스크탑 CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center bg-primary text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
        >
          예약·오시는 길
        </Link>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 메뉴 — fixed 오버레이 */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto px-5 py-4">
          <Link
            href="/contact"
            onClick={close}
            className="mb-4 flex items-center justify-center bg-primary text-white text-sm font-medium px-4 py-3 rounded-full hover:bg-primary-dark transition-colors"
          >
            예약·오시는 길
          </Link>
          <Link href="/about" onClick={close} className="block py-3 text-sm font-medium text-charcoal border-b border-gray-100 hover:text-primary transition-colors">
            원장 소개
          </Link>
          <Link href="/schedule" onClick={close} className="block py-3 text-sm font-medium text-charcoal border-b border-gray-100 hover:text-primary transition-colors">
            진료일정
          </Link>
          <div className="border-b border-gray-100 py-3">
            <Link href="/treatment/implant" onClick={close} className="block text-sm font-medium text-charcoal hover:text-primary transition-colors mb-2">
              임플란트
            </Link>
          </div>
          <div className="border-b border-gray-100 py-3">
            <Link href="/treatment/prosthetics" onClick={close} className="block text-sm font-medium text-charcoal hover:text-primary transition-colors mb-2">
              보철치료
            </Link>
            <Link href="/treatment/prosthetics#crown" onClick={close} className="block text-sm text-charcoal-light pl-4 py-1 hover:text-primary transition-colors">크라운</Link>
            <Link href="/treatment/prosthetics#bridge" onClick={close} className="block text-sm text-charcoal-light pl-4 py-1 hover:text-primary transition-colors">브릿지</Link>
            <Link href="/treatment/prosthetics#denture" onClick={close} className="block text-sm text-charcoal-light pl-4 py-1 hover:text-primary transition-colors">틀니</Link>
          </div>
          <div className="border-b border-gray-100 py-3">
            <Link href="/treatment/restorative" onClick={close} className="block text-sm font-medium text-charcoal hover:text-primary transition-colors mb-2">
              보존치료
            </Link>
            <Link href="/treatment/restorative#cavity" onClick={close} className="block text-sm text-charcoal-light pl-4 py-1 hover:text-primary transition-colors">충치치료</Link>
            <Link href="/treatment/restorative#root-canal" onClick={close} className="block text-sm text-charcoal-light pl-4 py-1 hover:text-primary transition-colors">신경치료</Link>
          </div>
          <div className="border-b border-gray-100 py-3">
            <Link href="/treatment/periodontal" onClick={close} className="block text-sm font-medium text-charcoal hover:text-primary transition-colors mb-2">
              치주치료
            </Link>
            <Link href="/treatment/periodontal#scaling" onClick={close} className="block text-sm text-charcoal-light pl-4 py-1 hover:text-primary transition-colors">스케일링</Link>
            <Link href="/treatment/periodontal#gum-treatment" onClick={close} className="block text-sm text-charcoal-light pl-4 py-1 hover:text-primary transition-colors">잇몸치료</Link>
          </div>
          <Link href="/treatment/tmj" onClick={close} className="block py-3 text-sm font-medium text-charcoal border-b border-gray-100 hover:text-primary transition-colors">
            턱관절
          </Link>
        </div>
      )}
    </header>
  );
}
