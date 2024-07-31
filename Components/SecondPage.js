import Image from "next/image";

export function SecondPage() {
    return (
        <div className="max-w-[1280px] h-[2301px] mt-[100px]">
            <div className="w-[800px] h-[80px] mx-auto">
                <div>
                    <div className="text-[#181A2A] text-4xl font-semifold">The Impact of Technology on the Workplace: How Technology is Changing</div>
                    <div className="flex mt-[20px]">
                        <div className="bg-cover"><Image src="/Images/Image.png" width={28} height={28} /></div>
                        <div className="ml-[8px] text-base font-Medium text-[#97989F]">Tracey Wilson</div>
                        <div className="ml-[24px] text-base font-Medium text-[#97989F]">August 20, 2022</div>
                    </div>
                </div>
                <Image src="/Images/Moskow.png" className="mt-[32px]" width={800} height={462} />
                <div className="mt-[32px] text-xl text-[#3B3C4A] w-[800px] h-[320px] text-left">Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
                    One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
                </div>
                <div className="mt-[32px]">
                    <div className="text-2xl text-[#181A2A] font-semibold">Research Your Destination</div>
                    <div className="text-2xl text-[#3B3C4A] text-left">Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
                    </div>
                </div>
                <div className="mt-[32px]">
                    <div className="text-2xl text-[#181A2A] font-semibold">Plan Your Itinerary</div>
                    <div className="text-2xl text-[#3B3C4A] text-left">Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
                    </div>
                </div>
            </div>
        </div>
    )
}