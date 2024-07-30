import Image from "next/image";

export function Section() {
    return (
        <div>
            <div className="mt-[100px] bg-[url('/Images/Women.png')] w-[1200px] h-[600px] bg-[#14162466] p-6 hidden md:flex">
                <div className="w-[500px] h-[250px] bg-[#FFFFFF] rounded-2xl p-9 mt-[300px]">Technology
                    <h1 className="text-slate-[#181A2A] text-4xl mt-[16px]">Grid system for better Design User Interface</h1>
                    <div className="text-[#97989F] mt-[25px]">August 20, 2022</div>
                </div>
            </div>
            <div className="mt-[100px] ">
                <div className="text-2xl hidden md:flex">Trending</div>
                <div className="flex justify-between mt-[30px] ">
                    <div className="hidden md:flex">
                        <div className="bg-[url('/Images/Mountain.png')] w-[280px] h-[320px] rounded-2xl p-6 ">
                            <div className="w-[86px] h-[28px] bg-[#4B6BFB] rounded-md mt-[150px]"><div className="text-[#FFFFFF] text-xs text-center">Technology</div></div>
                            <div className="text-[#FFFFFF] mt-[16px]">The Impact of Technology on the Workplace: How Technology is Changing</div>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div className="bg-[url('/Images/COmputer.png')] w-[280px] h-[320px] rounded-2xl p-6 ">
                            <div className="w-[86px] h-[28px] bg-[#4B6BFB] rounded-md mt-[150px]"><div className="text-[#FFFFFF] text-xs text-center">Technology</div></div>
                            <div className="text-[#FFFFFF] mt-[16px]">The Impact of Technology on the Workplace: How Technology is Changing</div>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div className="bg-[url('/Images/Podcast.png')] w-[280px] h-[320px] rounded-2xl p-6 ">
                            <div className="w-[86px] h-[28px] bg-[#4B6BFB] rounded-md mt-[150px]"><div className="text-[#FFFFFF] text-xs text-center">Technology</div></div>
                            <div className="text-[#FFFFFF] mt-[16px]">The Impact of Technology on the Workplace: How Technology is Changing</div>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div className="bg-[url('/Images/Teacher.png')] w-[280px] h-[320px] rounded-2xl p-6 ">
                            <div className="w-[86px] h-[28px] bg-[#4B6BFB] rounded-md mt-[150px]"><div className="text-[#FFFFFF] text-xs text-center">Technology</div></div>
                            <div className="text-[#FFFFFF] mt-[16px]">The Impact of Technology on the Workplace: How Technology is Changing</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}