import React from "react";
import Image from "next/image";
import {
  IconMapPinFilled,
  IconBedFilled,
  IconBathFilled,
  IconBuildingCommunity,
} from "@tabler/icons-react";
import Classes from "./WhyUsCard.module.css";

function WhyUsCard(props) {
  return (
    <>
      <Image
        className="w-full h-[80%]"
        src="/assets/images/RecentHomes/istockphoto.webp"
        alt="homes"
        width={400}
        height={300}
      />

      {/*that white area below image */}
      <div className="imgDescription absolute w-[90%] h-[40%] bottom-0 left-0 right-0 mx-auto bg-white shadow-md p-4">
        <span className="inline-block text-sm font-bold mb-2">
          خانه برای فروش
        </span>

        <div className="location flex items-center mb-2">
          <IconMapPinFilled className="text-buttons_color w-3 h-3 ml-1" />
          <address className="text-gray-500 text-[12px]">آدرس</address>
        </div>

        <div className={`${Classes.info} flex border-b border-gray-300 pb-4`}>
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
            50 متر مربع
          </span>
        </div>
      </div>
    </>
  );
}

export default WhyUsCard;
