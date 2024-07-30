import { TrendingItem } from "./TrendingItem";
import { mockTrendingData } from "@/mock/trending";

export const TrendingList = () => {
  return (
    <div className="mt-[100px] ">
      <div className="text-2xl hidden md:flex text-[#181A2A] font-bold">
        Trending
      </div>
      <div className="flex gap-5 mt-[30px]">
        {mockTrendingData.map((item, index) => (
          <TrendingItem
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};
