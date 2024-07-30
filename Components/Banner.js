export function Banner() {
  return (
    <div className="mt-[100px] bg-[url('/images/Women.png')] w-full h-[600px] hidden md:flex bg-no-repeat bg-cover rounded-xl">
      <div className="max-w-[500px] h-[250px] bg-[#FFFFFF] rounded-2xl p-9 mt-[335px] ml-[11px]">
        <div className="bg-[#4B6BFB] w-[97px] font-medium text-white px-2 py-1 rounded-md text-sm text-center">
          Technology
        </div>
        <h1 className="text-[#181A2A] font-semibold text-4xl mt-[16px]">
          Grid system for better Design User Interface
        </h1>
        <div className="text-[#97989F] mt-[25px]">August 20, 2022</div>
      </div>
    </div>
  );
}
