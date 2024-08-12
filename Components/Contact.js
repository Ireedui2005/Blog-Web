export function Contact() {
  return (
    <div className="w-[895px] h-[895px] mx-auto">
      <div className="w-[769px] h-[389px] mx-auto mt-[100px]">
        <div className="w-[624px] h-[163px]">
          <div className="text-4xl text-[#000000] font-semibold">
            Contact Us
          </div>
          <div className="text-base text-[#696A75] mt-[20px] font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </div>
        </div>
        <div className="flex w-[638px] justify-between mt-[20px]">
          <div className="border w-[294px] h-[133px] rounded-xl">
            <div className="text-[#000000] text-2xl ml-[16px] mt-[16px]">
              Address
            </div>
            <div className="text-[#696A75] text-base mt-[10px] ml-[16px] font-sans">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </div>
          </div>
          <div className="border w-[294px] h-[133px] rounded-xl">
            <div className="text-[#000000] text-2xl ml-[16px] mt-[16px]">
              Contact
            </div>
            <div className="text-[#696A75] text-base mt-[10px] ml-[16px] font-sans">
              313-332-8662 info@email.com
            </div>
          </div>
        </div>
        <div className="w-[643px] h-[440px] bg-[#F6F6F7] rounded-md mt-[50px]">
          <div className="w-[478px] p-5 ml-[35px]">
            <div className="text-[#000000] text-lg font-sans mt-[29px]">
              Leave a Message
            </div>
            <div className="flex justify-between mt-[25px] w-[478px]">
              <input
                placeholder="Your Name"
                className="bg-[transparent] w-[225px] bg-[white] p-2 rounded-md"
              />
              <input
                placeholder="Your Name"
                className="bg-[transparent] w-[225px] bg-[white] p-2 rounded-md"
              />
            </div>
            <input
              placeholder="Subject"
              className="bg-[transparent] w-[478px] bg-[white] p-2 rounded-md mt-[20px]"
            />
            <input
              placeholder="Write a message"
              className="bg-[transparent] w-[478px] bg-[white] p-2 rounded-md mt-[20px] h-[134px]"
            />
            <button className="w-[130px] h-[40px] bg-[#4B6BFB] text-[#FFFFFF] rounded-lg text-sm mt-[29px] font-sans">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
