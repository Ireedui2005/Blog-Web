import Image from "next/image";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

export function Open() {
  let [open, setOpen] = useState(true);

  function openMenu() {
    setOpen(true);
  }
  function closeMenu() {
    setOpen(false);
  }
  return (
    <div className="hidden md:block z-10">
      <button onClick={openMenu} className="text-2xl">
        <IoMdMenu />
      </button>
      <div>
        <div
          className={`fixed transition-all inset-0 bg-slate-500/90 ${
            open ? "block" : "hidden"
          }`}
          onClick={closeMenu}
        ></div>
        <div
          className={`fixed top-0 bottom-0 transition-all w-64 text-black bg-white shadow-lg ${
            open ? "right-0" : "-right-full"
          }`}
        >
          <div className="p-4">
            <div className="flex justify-between ">
              <div className="flex ">
                <div>
                  <Image src="/Images/Union.png" width={36} height={36} />
                </div>
                <h2 className="text-[#141624] text-2xl ml-[9px]">Meta</h2>
                <h1 className="text-2xl ml-[5px]">Blog</h1>
              </div>
              <button onClick={closeMenu} className="text-2xl">
                <MdClose />
              </button>
            </div>
            <div className="text-[#4B5563]">
              <div className="mt-[15px]">
                <button>Home</button>
              </div>
              <div className="mt-[15px]">
                <button>Blog</button>
              </div>
              <div className="mt-[15px]">
                <button>Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
