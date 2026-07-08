import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-color.png"
            alt="상암하늘치과의원"
            width={148}
            height={24}
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-5 text-sm text-charcoal-light">
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
          <Link href="/treatment/restorative" className="hover:text-primary transition-colors">보존치료</Link>
          <Link href="/treatment/periodontal" className="hover:text-primary transition-colors">치주치료</Link>
          <Link href="/treatment/tmj" className="hover:text-primary transition-colors">턱관절</Link>
          <Link href="/about" className="hover:text-primary transition-colors">원장 소개</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">예약·오시는 길</Link>
        </nav>
        <a
          href="tel:02-375-8278"
          className="hidden md:inline-flex items-center bg-primary text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
        >
          전화 예약
        </a>
      </div>
    </header>
  );
}
