import Image from "next/image";
import { loremText } from "@/mock/blog";

export function Blog({ title, date, author }) {
  return (
    <div className="w-full mt-[100px]">
      <div className="text-[#181A2A] text-4xl font-semibold">{title}</div>
      <div className="flex mt-[20px]">
        <Image src="/Images/Image.png" width={28} height={28} />
        <div className="ml-[8px] text-base font-Medium text-[#97989F]">
          {author}
        </div>
        <div className="ml-[24px] text-base font-Medium text-[#97989F]">
          {date}
        </div>
      </div>
      <Image
        src="/images/Moskow.png"
        width={800}
        height={460}
        className="mt-[32px] object-cover w-full"
      />
      <div className="mt-[32px] text-xl text-[#3B3C4A]  font-light">
        {loremText}
      </div>
      <div className="text-xl text-[#3B3C4A] mt-[30px] font-light">
        {loremText}
      </div>
      <div className="mt-[32px]">
        <div className="text-2xl text-[#181A2A] font-semibold">
          Research Your Destination
        </div>
        <div className="text-xl text-[#3B3C4A]  mt-[16px] font-light">
          {loremText}
        </div>
        <div className="text-xl text-[#3B3C4A]  mt-[30px] font-light">
          {loremText}
        </div>
      </div>
      <div className="mt-[32px]">
        <div className="text-2xl text-[#181A2A] font-semibold">
          Plan Your Itinerary
        </div>
        <div className="text-xl text-[#3B3C4A]  mt-[16px] font-light">
          {loremText}
        </div>
        <div className="text-xl text-[#3B3C4A]  mt-[30px] font-light">
          {loremText}
        </div>
      </div>
    </div>
  );
}
