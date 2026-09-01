"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ClinicStatus } from "./ClinicStatus";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);


  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto w-full h-16 flex items-center px-5">
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
        <nav className="hidden md:flex items-center gap-5 text-sm text-charcoal-light ml-8">
          <Link href="/about" className="hover:text-primary transition-colors">원장 소개</Link>
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

        {/* 데스크탑 CTA 버튼 그룹 */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <Link href="/schedule" className="inline-flex items-center gap-1.5 bg-primary text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-primary-dark transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
            진료일정
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-1.5 bg-primary text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-primary-dark transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            오시는 길
          </Link>
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden ml-auto p-2 text-charcoal"
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

      {/* 모바일 드로어 — 백드롭 */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-black/30 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={close}
      />

      {/* 모바일 드로어 — 우측 슬라이드 패널 */}
      <div
        className={`md:hidden fixed top-16 right-0 bottom-0 w-72 bg-white z-50 overflow-y-auto overscroll-y-contain touch-pan-y px-5 py-4 pb-10 shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex gap-2 mb-4">
          <Link href="/schedule" onClick={close} className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-white text-sm font-medium px-2 py-3 rounded-full hover:bg-primary-dark transition-colors whitespace-nowrap">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
            진료일정
          </Link>
          <Link href="/contact" onClick={close} className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-white text-sm font-medium px-2 py-3 rounded-full hover:bg-primary-dark transition-colors whitespace-nowrap">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            오시는 길
          </Link>
        </div>
        <Link href="/about" onClick={close} className="block py-3 text-sm font-medium text-charcoal border-b border-gray-100 hover:text-primary transition-colors">
          원장 소개
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
    </header>
  );
}
