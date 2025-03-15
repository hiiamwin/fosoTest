import { facebook, linkedin, reddit, x, zalo } from "@/icon";
import Image from "next/image";
import React from "react";

const socialList = [
  {
    name: "zalo",
    icon: zalo,
  },
  {
    name: "facebook",
    icon: facebook,
  },
  {
    name: "x",
    icon: x,
  },
  {
    name: "linkedin",
    icon: linkedin,
  },
  {
    name: "reddit",
    icon: reddit,
  },
];
function ShareSocial() {
  return (
    <section className="pt-3 absolute left-20 top-52 flex flex-col items-center justify-center gap-2">
      <span className="text-base font-extrabold text-[#33404A]">Chia sẻ</span>
      {socialList.map((social) => (
        <div key={social.name}>
          <Image src={social.icon} alt={social.name} />
        </div>
      ))}
    </section>
  );
}

export default ShareSocial;
