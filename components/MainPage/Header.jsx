"use client";
import {
  CakeIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { HeartIcon, UserIcon, SunIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Classes from "@/components/Header.module.css";

const Header = () => {
  return (
    <main className="mx-auto container flex py-3 px-5">
      <section className="search flex w-1/3 gap-10">
        <span className="font-black flex items-center">
          <CakeIcon className="text-yellow-400 h-10 w-10" />
          کالادیوم
        </span>

        <div className="bg-gray-300 flex items-center border focus-within:border-blue-400 ">
          <input
            type="search"
            name="search"
            id="search"
            className="p-2 bg-gray-300 outline-none w-[8rem] font-medium"
            placeholder="جستجو..."
          />
          <MagnifyingGlassIcon className="w-5 h-5 ml-3 text-gray-500" />
        </div>
      </section>

      <section className="w-1/3 flex items-center justify-center mr-5">
        <ul className={`${Classes.header_list} flex gap-5`}>
          <li>
            <Link href="#">خانه</Link>
            <ChevronDownIcon className={Classes.chevron_down} />
          </li>
          <li>
            <Link href="#">صفحات</Link>
            <ChevronDownIcon className={Classes.chevron_down} />
          </li>
          <li>
            <Link href="#">فهرست ها</Link>
            <ChevronDownIcon className={Classes.chevron_down} />
          </li>
          <li>
            <Link href="#">عوامل</Link>
            <ChevronDownIcon className={Classes.chevron_down} />
          </li>
          <li>
            <Link href="#">وبلاگ</Link>
            <ChevronDownIcon className={Classes.chevron_down} />
          </li>
          <li>
            <Link href="#">تماس با ما</Link>
          </li>
        </ul>
      </section>

      <section className="w-1/3 flex items-center justify-end gap-4">
        <HeartIcon className="w-5 h-5 cursor-pointer" />
        <UserIcon className="w-5 h-5 cursor-pointer" />
        <button className="px-6 py-2 bg-buttons_color text-white text-[12px]">
          افزودن فهرست
        </button>
        <SunIcon className="w-8 h-8 rounded-full shadow-lg p-1 cursor-pointer" />
      </section>
    </main>
  );
};

export default Header;
