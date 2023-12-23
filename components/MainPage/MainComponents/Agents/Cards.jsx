"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import Link from "next/link";

function Cards(props) {
  const [icon, setIconFilled] = useState(false);
  const heartIcon = "w-5 h-5 text-buttons_color cursor-pointer";

  const changeIcon = () => {
    setIconFilled((prevState) => !prevState);
  };

  return (
    <div className="agents_card  flex flex-col gap-2 mt-7 ">
      <section className="relative group overflow-hidden ">
        <Image
          alt="agent_avatar"
          src="/assets/images/Agents/me2.jpg"
          width={250}
          height={100}
          className="w-auto h-[9rem]"
          quality={100}
        />
        <div className="absolute flex items-center bg-gray-800 bottom-0 w-full h-[40%] translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-60  duration-300">
          <span className="flex  text-white mr-2">علی آقا فرانت کار</span>
        </div>
      </section>

      <span className="agent_info flex items-center font-bold justify-between">
        علی علی اکبرلو
        <div onClick={changeIcon}>
          {!icon ? (
            <IconHeart className={heartIcon} />
          ) : (
            <IconHeartFilled className={heartIcon} />
          )}
        </div>
      </span>

      <div className="contact_info flex items-center gap-1 w-full">
        <PhoneIcon className="w-4 h-4 text-buttons_color" />
        <span className="text-gray-500 text-[11px]">۰۹۱۰۶۶۱۰۷۱۱</span>

        <EnvelopeIcon className="w-4 h-4 text-buttons_color" />
        <span className="text-gray-500 text-[11px]">eagleeye10m@gmail.com</span>
      </div>

      <Link
        href="#"
        className="text-buttons_color flex text-[12px] font-semibold items-center"
      >
        ادامه خواندن
        <ArrowLeftIcon className="w-3 h-3 font-semibold" />
      </Link>
    </div>
  );
}

export default Cards;
