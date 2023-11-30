import React from "react";
import Link from "next/link";
import Classes from "./Introduction.module.css";
import {
  IconPhone,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

function SocialMedia(props) {
  return (
    <section
      className={`${Classes.social_networks} flex flex-col absolute z-0 top-[10rem] left-[6rem] }`}
    >
      <Link href="https://www.facebook.com/">
        <IconPhone className="mb-10" />
        <div className="absolute top-[10%] left-[50%] w-[1px] h-[90%] z-10 bg-gray-400"></div>
      </Link>

      <div className=" flex flex-col relative gap-[12px]">
        <div className="absolute top-[10%] left-[50%] w-[1px] h-[90%] z-10 bg-gray-400"></div>
        <Link href="#">
          <IconBrandFacebook />
        </Link>
        <Link href="#">
          <IconBrandTwitter />
        </Link>
        <Link href="#">
          <IconBrandLinkedin />
        </Link>
        <Link href="#">
          <IconBrandInstagram />
        </Link>
      </div>
    </section>
  );
}

export default SocialMedia;
