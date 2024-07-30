import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export function FirstHeader() {
    return (
        <div className="flex hidden md:flex justify-between ">
            <div className="flex">
                <div><Image src="/Images/Union.png" width={36} height={36} /></div>
                <h2 className="text-[#141624] text-2xl ml-[9px]">Meta</h2>
                <h1 className="text-2xl ml-[5px]">Blog</h1>
            </div>
            <div className="flex">
                <button className="text-[#3B3C4A]">Home</button>
                <button className="text-[#3B3C4A] ml-[40px]">Blog</button>
                <button className="text-[#3B3C4A] ml-[40px]">Contact</button>
            </div>
            <div>
                <input placeholder="Search"  className="bg-[#F4F4F5]"></input>
            </div>
        </div >
    )
}