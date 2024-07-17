"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <nav className="h-10 bg-slate-300 items-center flex">
      <ul className="flex w-full justify-center gap-4">
        <li className={pathname.includes("/base") ? " text-red-500" : ""}>
          <Link href="/base">基礎應用題</Link>
        </li>
        <li
          className={pathname.includes("/comprehensive") ? " text-red-500" : ""}
        >
          <Link href="/comprehensive">綜合實作題</Link>
        </li>
        <li
          className={pathname.includes("/plus-program") ? " text-red-500" : ""}
        >
          <Link href="/plus-program">加分題</Link>
        </li>
      </ul>
    </nav>
  );
}
