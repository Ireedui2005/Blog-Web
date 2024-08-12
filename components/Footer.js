import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <div className="bg-[#E8E8EA] w-full h-[495px] mt-[100px] ">
      <div className="max-w-[1280px] h-[236px] mx-auto">
        <div className="flex justify-between ">
          <div className="w-[289px] h-[236px] mt-[65px]">
            <div className="text-[#181A2A] text-lg">About</div>
            <div className="text-base text-[#696A75] mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <div className="mt-[24px]">
              <div className="text-[#3B3C4A] text-base ">
                Email : info@jstemplate.net
              </div>
              <div className="text-[#3B3C4A] text-base ">
                Phone : 880 123 456 789
              </div>
            </div>
          </div>
          <div className="w-[521px] h-[88px] ml-[400px] mt-[65px]">
            <div className="mt-[12px] text-[#3B3C4A] font-sans">Home</div>
            <div className="mt-[12px] text-[#3B3C4A] font-sans">Blog</div>
            <div className="mt-[12px] text-[#3B3C4A] font-sans">Contact</div>
          </div>
          <div className="flex w-[144px] h-[16px] justify-between mt-[65px]">
            <div className="text-[#6D6E76]">
              <FaFacebook />
            </div>
            <div className="ml-[26px] text-[#6D6E76]">
              <FaTwitter />
            </div>
            <div className="ml-[26px] text-[#6D6E76]">
              <FaInstagram />
            </div>
            <div className="ml-[26px] text-[#6D6E76]">
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] h-[95px] mt-[25px] flex justify-between items-center border-t border-[#cccccc]">
          <div className="flex items-center">
            <div>
              <Image src="/Images/Union.png" width={48} height={48} />
            </div>
            <div className="ml-[10px]">
              <h2 className="text-[#141624] text-2xl">Meta Blog</h2>
              <div className="text-[#3B3C4A] text-base">
                © All Rights Reserved.
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="text-[#3B3C4A] text-base">Terms of Use</div>
            <div className="text-[#3B3C4A] text-base ml-[32px]">
              Privacy Policy
            </div>
            <div className="text-[#3B3C4A] text-base ml-[32px]">
              Cookie Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
