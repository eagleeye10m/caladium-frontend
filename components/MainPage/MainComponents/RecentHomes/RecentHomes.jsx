import React from "react";
import Classes from "./RecentHomes.module.css";

function RecentHomes() {
  return (
    <main className="bg-gray-100">
      <section className="container_self mx-auto">
        <header className="Recents_header flex justify-between">
          <span className="text-xl font-bold">ویژگی های اخیر</span>
          <div className={Classes.btn_group}>
            <button>تمام ویژگی ها</button>
            <button>برای فروش</button>
            <button>برای اجاره</button>
          </div>
        </header>
      </section>
    </main>
  );
}

export default RecentHomes;
