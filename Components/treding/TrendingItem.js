export const TrendingItem = ({ imageUrl, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`bg-cover w-full h-[320px] rounded-2xl p-6`}
    >
      <div className="bg-[#4B6BFB] w-[97px] font-medium text-white px-2 py-1 rounded-md text-sm text-center mt-[150px]">
        Technology
      </div>
      <div className="text-[#FFFFFF] mt-[16px] text-xl">{title}</div>
    </div>
  );
};
