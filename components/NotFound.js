export function NotFound() {
    return (
        <div className="w-[642px] h-[208px] mx-auto mt-[100px]">
            <div className="flex">
                <div className="text-7xl my-auto">404</div>
                <div className="border h-[156px] bg-[#E8E8EA] ml-[58px] "></div>
                <div className="ml-[58px]">
                    <div className="text-[#000000] text-2xl">Page Not Found</div>
                    <div className="text-[#696A75] text-lg mt-[20px]">We're sorry, This page is unknown or does not exist the page you are looking for.</div>
                    <button className="w-[130px] h-[40px] bg-[#4B6BFB] text-[#FFFFFF] rounded-lg text-sm mt-[29px]">Back To Home</button>
                </div>
            </div>
        </div>
    )
}