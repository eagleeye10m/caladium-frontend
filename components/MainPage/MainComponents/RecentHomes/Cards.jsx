import Image from "next/image";
import Link from "next/link";
import Classes from "./RecentHomes.module.css";
import {
  IconMapPinFilled,
  IconBedFilled,
  IconBathFilled,
  IconBuildingCommunity,
} from "@tabler/icons-react";

function Cards(props) {
  //const { address, meter, description, contract, image, id } = props.homeData;

  return (
    // <Link href={`/files/${id}`} className="relative hover:cursor-pointer">
    //   <Image
    //     className="h-[200px] w-full"
    //     width={150}
    //     height={150}
    //     quality={75}
    //     src="/assets/images/RecentHomes/home.jpg"
    //     alt="test img"
    //   />
    //   <span className="inline-block text-sm font-bold my-2">{description}</span>
    //   <div className="location flex items-center mb-2">
    //     <IconMapPinFilled className="text-buttons_color w-3 h-3 ml-1" />
    //     <address className="text-gray-500 text-[12px]">{address}</address>
    //   </div>
    //   <div
    //     className={`${Classes.info} flex flex-wrap  border-b border-gray-300 pb-4`}
    //   >
    //     <span className="beds ">
    //       <IconBedFilled />
    //       تخت:۳
    //     </span>

    //     <span className="bathrooms ">
    //       <IconBathFilled />
    //       حمام:۳
    //     </span>

    //     <span className="area w-full ">
    //       <IconBuildingCommunity />
    //       {meter}
    //     </span>
    //   </div>
    //   <span className="status absolute_btns">
    //     {contract === "rent" ? "اجاره" : "فروش"}
    //   </span>{" "}
    //   {/*that orange part on the right side */}
    // </Link>  //for dynamic rendering

    <Link href="#" className="relative hover:cursor-pointer">
      <Image
        className="h-[200px] w-full"
        width={150}
        height={150}
        quality={75}
        src="/assets/images/RecentHomes/home.jpg"
        alt="test img"
      />
      <span className="inline-block text-sm font-bold my-2">توضیحات</span>
      <div className="location flex items-center mb-2">
        <IconMapPinFilled className="text-buttons_color w-3 h-3 ml-1" />
        <address className="text-gray-500 text-[12px]">آدرس</address>
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
          متراژ
        </span>
      </div>
      <span className="status absolute_btns">اجاره</span>{" "}
      {/*that orange part on the right side */}
    </Link>
  );
}

export default Cards;
