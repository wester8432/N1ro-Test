import Link from "next/link";

export default function FirstPage() {
  return (
    <div className=" flex flex-wrap justify-center items-center bg-slate-600 text-center">
      <p className="w-full">This is first test page.</p>
      <Link href="./">back</Link>
    </div>
  );
}
