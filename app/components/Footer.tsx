import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-charcoal text-gray-400 px-5 py-10">
      <div className="max-w-5xl mx-auto">
        <Image
          src="/images/logo-white.png"
          alt="상암하늘치과의원"
          width={140}
          height={23}
          className="mb-4"
        />
        <p className="text-sm">서울 마포구 상암산로1길 69, 302호 &middot; 02-375-8278</p>
        <p className="text-sm mt-1">
          평일 08:30–17:30 &middot; 토 08:30–14:00 &middot; 화목야간 18:00–20:30
        </p>
        <p className="text-xs mt-8 text-gray-600">
          &copy; 2025 상암하늘치과의원. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
