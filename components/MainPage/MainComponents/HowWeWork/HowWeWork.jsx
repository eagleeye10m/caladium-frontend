import React from "react";
import Image from "next/image";
import classes from "./HowWeWork.module.css";

function HowWeWork(props) {
  return (
    <main className="container_self  mx-auto justify-center ">
      <h1 className="text-2xl text-center text-black font-extrabold">
        ببینید رلو چگونه میتواند کمک کند
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-10">
        <div className={classes.info}>
          <Image
            src="/assets/images/HowWeWork/Rental-consept.jpg"
            width={100}
            height={100}
            alt="rental"
          />{" "}
          {/*place your images here */}
          <h1>اجاره خانه</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>

        <div className={classes.info}>
          <Image
            src="/assets/images/HowWeWork/Selling-consept.jpg"
            width={100}
            height={100}
            alt="rental"
          />{" "}
          {/*place your images here */}
          <h1>فروش خانه</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>

        <div className={classes.info}>
          <Image
            src="/assets/images/HowWeWork/Contract-consept.jpg"
            width={100}
            height={100}
            alt="rental"
          />{" "}
          {/*place your images here */}
          <h1>عامل تجربه</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>

        <div className={classes.info}>
          <Image
            src="/assets/images/HowWeWork/Support-consept.jpg"
            width={100}
            height={100}
            alt="rental"
          />{" "}
          {/*place your images here */}
          <h1>پشتیبانی اعضا</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
      </div>
    </main>
  );
}

export default HowWeWork;
