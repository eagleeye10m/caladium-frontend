//import { useContext } from "react";
import Classes from "./RecentHomes.module.css";
import Cards from "./Cards";
import { fetchData } from "../../HomeDataFetching/HomeData";
import { revalidateTag } from "next/cache";

async function RecentHomes() {
  //const homesData = await fetchData();
  revalidateTag("product"); //the product tag is in the files/[id]/page.jsx

  return (
    <main className="bg-gray-100">
      <section className="container_self mx-auto">
        <header className="Recents_header flex justify-between mb-3 ">
          <span className="text-xl font-bold text-black">ویژگی های اخیر</span>
          <div className={`${Classes.btn_group} flex gap-3`}>
            <button>تمام ویژگی ها</button>
            <button>برای فروش</button>
            <button>برای اجاره</button>
          </div>
        </header>

        <div className="cards grid grid-cols-4 grid-flow-row gap-3">
          {/* {homesData.products.map((homeData) => (
            <Cards key={homeData.id} homeData={homeData} />
          ))} */}
          <Cards />
        </div>
      </section>
    </main>
  );
}

export default RecentHomes;
