import React from "react";
import CardsSlider from "./CardsSlider";

function Comments(props) {
  return (
    <div className="bg-red-50">
      <main className="container_self mx-auto">
        <h1 className="text-2xl font-extrabold text-center mb-8">
          مشتریان ما چه می گویند
        </h1>

        <CardsSlider />
      </main>
    </div>
  );
}

export default Comments;
