import React from "react";
import Classes from "./RecentHomes.module.css";
import Cards from "./Cards";

function RecentHomes() {
  return (
    <main className="bg-gray-100">
      <section className="container_self mx-auto">
        <header className="Recents_header flex justify-between mb-3 ">
          <span className="text-xl font-bold">ویژگی های اخیر</span>
          <div className={`${Classes.btn_group} flex gap-3`}>
            <button>تمام ویژگی ها</button>
            <button>برای فروش</button>
            <button>برای اجاره</button>
          </div>
        </header>

        <div className="cards grid grid-cols-4 grid-flow-row gap-3">
          <Cards />
        </div>
      </section>
    </main>
  );
}

export default RecentHomes;
