import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export function Header() {
  return (
    <div className="hidden md:flex justify-between items-center max-w-[1280px] mx-auto h-[100px]">
      <div className="flex">
        <div>
          <Image src="/Images/Union.png" width={48} height={48} />
        </div>
        <h2 className="text-[#141624] text-2xl ml-[9px] mt-[5px]">Meta</h2>
        <h1 className="text-2xl ml-[5px] text-[#141624] mt-[5px]">Blog</h1>
      </div>
      <div className="flex">
        <Link href="/" className="text-[#3B3C4A] text-base">
          Home
        </Link>
        <Link href="/blog" className="text-[#3B3C4A] ml-[40px] text-base">
          Blog
        </Link>
        <Link href="/contact" className="text-[#3B3C4A] ml-[40px] text-base">
          Contact
        </Link>
      </div>
      <div className="flex bg-[#F4F4F5] items-center relative h-9 w-[160px] rounded-[5px] pl-6 pr-">
        <input placeholder="Search" className="bg-[transparent] w-full" />
        <span className="text-[#52525B] p-3">
          <CiSearch />
        </span>
      </div>
    </div>
  );
}
