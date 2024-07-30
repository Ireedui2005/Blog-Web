import Image from "next/image";

export function Footer() {
    return (
        <div className="bg-[#E8E8EA]  ">
            <div className="flex mx-auto">
                <div>
                    <div className="w-[280px] text-[#181A2A]">About
                        <div className="text-[#696A75] mt-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                    </div>
                    <div className="mt-[25px]">
                        <div>Email : info@jstemplate.net</div>
                        <div>Phone : 880 123 456 789</div>
                    </div>
                </div>
                <div className="ml-[250px]">
                    <div className="#3B3C4A "><button>Home</button></div>
                    <div className="#3B3C4A mt-[10px]"><button>Blog</button></div>
                    <div className="#3B3C4A mt-[10px]"><button>Contact</button></div>
                </div>
                <div className="flex ml-[250px]">
                    <div className="ml-[26px]"><button>Fb</button></div>
                    <div className="ml-[26px]"> <button>ig</button></div>
                    <div className="ml-[26px]"> <button>twi</button></div>
                    <div className="ml-[26px]"><button>in</button></div>
                </div>
            </div>
            <div className="mt-[30px]">
                <div className="flex">
                    <div><Image src="/Images/Union.png" width={36} height={36} /></div>
                    <div>
                        <h2 className="text-[#141624] text-xl ml-[9px]">Meta Blog</h2>                   
                        <div className="text-xs text-[#3B3C4A]">All Rights Reserved</div>
                    </div>
                    <div className="flex ml-[600px]">
                        <div className="#3B3C4A text-base">Terms of Use</div>
                        <div className="#3B3C4A text-base ml-[30px]">Privacy Policy</div>
                        <div className="#3B3C4A text-base ml-[30px]">Cookie Policy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}