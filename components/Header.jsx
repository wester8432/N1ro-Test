"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <nav className="h-10 bg-slate-100 items-center flex">
      <ul className="flex w-full justify-center gap-4">
        <li
          className={pathname.includes("/comprehensive") ? " text-red-500" : ""}
        >
          <Link href="/comprehensive">綜合實作題</Link>
        </li>
      </ul>
    </nav>
  );
}
