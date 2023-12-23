import React from "react";
import Classes from "./WhyUs.module.css";
import {
  IconTrendingUp,
  IconBuildingBank,
  IconHomeDollar,
} from "@tabler/icons-react";
import WhyUsCard from "./WhyUsCard";

function WhyUs() {
  return (
    <main className="container_self mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <section className="rightSection">
          <div className="explanation">
            <span className="text-2xl font-extrabold text-black">
              چرا ویژگی های ما را انتخاب کنید
            </span>
            <p className="text-sm text-gray-400 w-[70%]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>

          <div className="attributes mt-7 flex flex-col gap-3">
            <div className={`${Classes.cards} insurance`}>
              <IconTrendingUp />
              <div>
                <h1>بیمه اموال</h1>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
              </div>
            </div>

            <div className={`${Classes.cards} leading_rate`}>
              <IconBuildingBank className="!bg-orange-500" />
              <div>
                <h1> بهترین نرخ بهره</h1>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
              </div>
            </div>

            <div className={`${Classes.cards} commission`}>
              <IconHomeDollar />
              <div>
                <h1> کمترین کمیسیون</h1>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative leftSection">
          <WhyUsCard />
        </section>
      </div>
    </main>
  );
}

export default WhyUs;
