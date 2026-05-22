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
        <nav className="hidden md:flex gap-7 text-sm text-charcoal-light">
          <Link href="/treatment/prosthetics" className="hover:text-primary transition-colors">보철치료</Link>
          <Link href="/treatment/implant" className="hover:text-primary transition-colors">임플란트</Link>
          <Link href="/treatment/restorative" className="hover:text-primary transition-colors">보존·치주</Link>
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
