import React from "react";
import Image from "next/image";
import Classes from "./RecentHomes.module.css";
import {
  IconMapPinFilled,
  IconBedFilled,
  IconBathFilled,
  IconBuildingCommunity,
} from "@tabler/icons-react";

function Cards(props) {
  return (
    <main>
      <div className={Classes.homeCard}>
        <Image
          width={150}
          height={150}
          quality={75}
          src="/assets/images/RecentHomes/home.jpg"
          alt="test img"
        />
        <div className={`${Classes.description} py-[6px]`}>
          <span>خانه برای اجاره</span>
        </div>
        <div className="location flex items-center mb-2">
          <IconMapPinFilled className="text-buttons_color w-5 h-5" />
          <span className="text-gray-500 text-[12px]">
            استان تهران ، میدان آزادی
          </span>
        </div>
        <div
          className={`${Classes.info} flex flex-wrap  border-b border-gray-300 pb-4`}
        >
          <span className="beds ">
            <IconBedFilled />
            تخت:۳
          </span>

          <span className="bathrooms ">
            <IconBathFilled />
            حمام:۳
          </span>

          <span className="area w-full ">
            <IconBuildingCommunity />
            مقدار ۹۵۰ فوت مربع
          </span>
        </div>
        <br />
      </div>
    </main>
  );
}

export default Cards;
