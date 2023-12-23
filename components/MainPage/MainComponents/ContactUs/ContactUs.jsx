import React from "react";
import Link from "next/link";
import {
  IconMapPinFilled,
  IconPhoneFilled,
  IconMailFilled,
  IconCaretLeftFilled,
  IconArrowLeft,
} from "@tabler/icons-react";
import Classes from "./ContactUs.module.css";

function ContactUs(props) {
  return (
    <main className="container_self mx-auto">
      <div className="grid grid-cols-4 gap-2">
        <section className="rellu">
          <h1 className="text-2xl font-bold mb-4">Rello</h1>
          <p className="text-gray-500 text-sm">
            ما یک آژانس عالی برای خرید و فروش ملک شما با اطمینان هستیم.بنابراین
            شما میتوانید به راحتی از طریق شرکت ما خرید و فروش کنید.
          </p>
        </section>

        <section className={`${Classes.contactUs} flex flex-col gap-2`}>
          <h1 className="text-xl font-bold">اطلاعات مشتری</h1>

          <span>
            <IconMapPinFilled />
            ایران، استان تهران، میدان آزادی،خیابان 9 شرقی
          </span>

          <span>
            <IconPhoneFilled />
            ۹۱۰۶۶۱۰۷۱۱ ۹۸+
          </span>

          <span className="items-center">
            <IconMailFilled />
            eagleeye10m@gmail.com
          </span>
        </section>

        <section className={Classes.usefull_links}>
          <h1 className="text-xl font-bold">لینک های مفید</h1>
          <ul className="flex flex-col text-sm text-gray-500 gap-2 mt-2">
            <Link href="#">
              <IconCaretLeftFilled />
              درباره ما
            </Link>

            <Link href="#">
              <IconCaretLeftFilled />
              تماس با ما
            </Link>

            <Link href="#">
              <IconCaretLeftFilled />
              قوانین و ضوابط
            </Link>

            <Link href="#">
              <IconCaretLeftFilled />
              حریم خصوصی
            </Link>
          </ul>
        </section>

        <section className={`${Classes.newsletter} flex flex-col gap-4`}>
          <h1 className="text-xl font-bold">خبرنامه</h1>
          <p className="text-sm text-gray-500">
            از طریق خبرنامه ما مطلع شوید و هر زمان که خواستید پیشنهادات را
            دریافت کنید
          </p>
          <div className="email_input flex flex-row">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="آدرس ایمیل شما"
              className="border border-buttons_color focus:outline-none py-2 pr-4 w-[80%] text-sm"
            />
            <button className="text-center bg-buttons_color px-4 ">
              <IconArrowLeft className="text-white w-5" />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ContactUs;
