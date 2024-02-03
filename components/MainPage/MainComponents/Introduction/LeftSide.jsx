import React from "react";
import Link from "next/link";
import Image from "next/image";
import User1 from "@/public/assets/UsersImage/User1.jpg";
import User2 from "@/public/assets/UsersImage/User2.avif";
import User3 from "@/public/assets/UsersImage/User3.webp";
import { fetchData } from "../../HomeDataFetching/HomeData";

async function LeftSide(props) {
  // const { states } = await fetchData();

  return (
    <section className=" w-[40%] h-auto">
      <form className="relative border-4 border-white p-10 bg-gray-300 bg-opacity-50 rounded-[4px]">
        <button type="button" className="selection_btn">
          برای اجاره
        </button>
        <button type="button" className="selection_btn">
          برای فروش
        </button>
        <input
          className="bg-white w-full px-3 py-2 rounded-[4px] mt-3 focus:outline-none"
          type="search"
          name="house_search"
          placeholder="دنبال چی میگردی؟"
        />

        <select
          name="select_location"
          label="Age"
          className="relative bg-white px-3 py-[7px] w-full rounded-[4px] z-50 mt-3 border-2 border-gray-300 focus:outline-none focus:ring focus:border-blue-300 overflow-y-auto max-h:calc(100vh - 300px)"
        >
          {/* {states.map((location) => (
            <option key={location.id} value={location.id}>
              {location.title}
            </option>
          ))} */}
          <option value="1">آذربایجان غربی</option>
          <option value="2">آذربایجان شرقی</option>
          <option value="3">اردبیل</option>
          <option value="4">تهران</option>
        </select>

        <button
          className="w-full bg-buttons_color text-white mt-3 py-2"
          type="submit"
        >
          جستجو
        </button>

        <div className="images flex mt-3 ">
          <Image
            className="rounded-full border-2 border-white h-[40px] w-[40px] z-10"
            src={User1}
            alt="user1"
            height={100}
            width={100}
            quality={80}
          />

          <Image
            className="rounded-full border-2 border-white h-[40px] w-[40px] mr-[-15px] z-20"
            src={User2}
            alt="user2"
            height={100}
            width={100}
            quality={80}
          />

          <Image
            className="rounded-full border-2  border-white h-[40px] w-[40px] mr-[-15px] z-20"
            src={User3}
            alt="user3"
            height={100}
            width={100}
            quality={80}
          />
        </div>

        <div className="representors">
          <span className="text-[12px] text-white">+2k نمایندگان </span>
          <Link className="text-[12px] text-buttons_color" href="#">
            مشاهده همه فهرست ها
          </Link>
        </div>
      </form>
    </section>
  );
}

export default LeftSide;
