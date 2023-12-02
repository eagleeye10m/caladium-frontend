import React from "react";
import Classes from "./RecentHomes.module.css";
import Image from "next/image";
import {
  IconMapPinFilled,
  IconBedFilled,
  IconBathFilled,
} from "@tabler/icons-react";

function RecentHomes() {
  return (
    <main className="bg-gray-100">
      <section className="container_self mx-auto">
        <header className="Recents_header flex justify-between mb-3 ">
          <span className="text-xl font-bold">ویژگی های اخیر</span>
          <div className={Classes.btn_group}>
            <button>تمام ویژگی ها</button>
            <button>برای فروش</button>
            <button>برای اجاره</button>
          </div>
        </header>

        <div className="cards grid grid-cols-4 grid-flow-row">
          <div className="homeCard">
            <Image
              className="w-60 h-50"
              width={150}
              height={150}
              quality={75}
              src="/assets/images/RecentHomes/home.jpg"
              alt="test img"
            />
            <div className="description">
              <span className="text-sm font-bold">خانه برای اجاره</span>
            </div>
            <div className="location flex items-center">
              <IconMapPinFilled className="text-buttons_color text-[10px]" />
              <span className="text-gray-500 text-[10px]">
                استان نهران ، میدان آزادی
              </span>
            </div>
            <div className="info flex items-center">
              <IconBedFilled className="text-buttons_color text-[10px]" />
              <span className="beds">تخت</span>

              <IconBathFilled className="text-buttons_color text-[10px]" />
              <span className="bathrooms">حمام</span>
            </div>
            <div className="density"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RecentHomes;
