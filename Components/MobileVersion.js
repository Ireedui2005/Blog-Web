import Image from "next/image";
import { Open } from "./Open";

export function MobileVersion() {
    return (
        <div className="flex md:hidden justify-between w-[768px]">
            <div className="flex ">
                <div><Image src="/Images/Union.png" width={36} height={36} /></div>
                <h2 className="text-[#141624] text-2xl ml-[9px]">Meta</h2>
                <h1 className="text-2xl ml-[5px]">Blog</h1>
            </div>
             <div className="mt-[100px] ">
                <div className="text-2xl">Trending</div>
                <div className="justify-between mt-[30px]">
                    <div>
                        <div className="bg-[url('/Images/Mountain.png')] w-[280px] h-[320px] rounded-2xl p-6 ">
                            <div className="w-[86px] h-[28px] bg-[#4B6BFB] rounded-md mt-[150px]"><div className="text-[#FFFFFF] text-xs text-center">Technology</div></div>
                            <div className="text-[#FFFFFF] mt-[16px]">The Impact of Technology on the Workplace: How Technology is Changing</div>
                        </div>
                    </div>
                </div>
            </div>
            <Open />
        </div>
    )
}