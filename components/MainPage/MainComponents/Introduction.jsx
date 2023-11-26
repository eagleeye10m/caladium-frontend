import React from "react";
import Classes from "./Introduction.module.css";

function Introduction(props) {
  return (
    <div
      className={`w-full h-[90vh]  ${Classes.introduction} flex items-center justify-center`}
    >
      {/*you can access background image via Introduction.module.css file*/}
      <div className="w-[70%] flex z-20">
        <section className="Introduction_text flex  flex-col w-[50%] gap-3">
          <h1 className="text-white text-sm">سفر خود را شروع کنید</h1>
          <h1 className="text-6xl text-white font-extrabold w-[90%] leading-[4rem]">
            خرید و فروش ملک به روشی آسان
          </h1>
          <p className="text-white text-sm w-[85%]">
            ما یک آژانس عالی برای خرید و فروش ملک شما با اطمینان هستیم. بنابراین
            شما میتوانید به راحتی از شرکت ما خرید و فروش کنید
          </p>
        </section>
        <section className=" w-[50%]">hey</section>
      </div>
    </div>
  );
}

export default Introduction;
