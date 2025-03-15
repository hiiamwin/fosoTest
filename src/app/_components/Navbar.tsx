import React from "react";

import Image from "next/image";
import { arrowUpRightIcon, downIcon, fosoLogo, vnLogo } from "@/icon";

function Navbar() {
  return (
    <nav className="max-w-[1280px] flex items-center justify-center py-3 px-9 rounded-[40px] shadow mt-6 gap-16 mb-6 mx-auto">
      <div>
        <Image src={fosoLogo} alt="foso logo" />
      </div>

      <div className="flex gap-2 items-center justify-center px-2 text-sm">
        <span className="px-2">Về chúng tôi</span>
        <span className="px-2 flex items-center justify-center gap-2 ">
          Giả pháp <Image src={downIcon} alt="down icon" />
        </span>
        <span className="px-2 flex items-center justify-center gap-2">
          Tài nguyên <Image src={downIcon} alt="down icon" />
        </span>
        <span className="px-2">Liên hệ</span>
      </div>

      <div className="flex items-center justify-center gap-2">
        <button className="flex items-center gap-2 px-3 py-2 bg-[#09090B0D] rounded-[40px] cursor-pointer">
          <Image src={vnLogo} alt="vn logo" />
          VI
          <Image src={downIcon} alt="down icon" />
        </button>

        <button className="flex items-center gap-2 px-3 py-2 bg-[#1AD598] rounded-[40px] cursor-pointer">
          Trở thành khách hàng
          <div className="w-5 h-5 rounded-[40px] bg-black flex items-center justify-center">
            <Image src={arrowUpRightIcon} alt="down icon" />
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
