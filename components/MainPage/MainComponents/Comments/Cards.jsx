import React from "react";
import Image from "next/image";
import { IconQuote } from "@tabler/icons-react";

function Cards(props) {
  return (
    <section className="bg-white p-5 border border-gray-200">
      <div className="user_info flex">
        <Image
          alt="user_image"
          src="/assets/UsersImage/User1.jpg"
          width={50}
          height={50}
          className="rounded-full w-9 h-9"
        />
        <span className="mr-2">
          <h2 className="font-bold text-sm">علی علی اکبرلو</h2>
          <h4 className="text-gray-400 text-[13px]">مشتری خوشحال</h4>
        </span>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        &quot;لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
        استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون
        و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.&quot;
      </p>

      <div className="rating flex justify-end">
        <IconQuote className="w-9 h-9 text-buttons_color p-[7px] rounded-full bg-emerald-100" />
      </div>
    </section>
  );
}

export default Cards;
