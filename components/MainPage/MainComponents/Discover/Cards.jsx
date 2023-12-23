import React from "react";
import Image from "next/image";
function Cards(props) {
  return (
    <div className="cards flex flex-col mt-5">
      <Image
        alt="houston"
        src="/assets/images/Discover/houston.jpg"
        width={150}
        height={150}
        className="w-40 h-40"
      />
      <h5 className="text-md font-bold mt-1">هیوستون</h5>
      <h5 className="text-gray-500 text-sm">245 ملک</h5>
    </div>
  );
}

export default Cards;
