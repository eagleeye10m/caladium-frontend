import React from "react";
import Introduction from "./MainComponents/Introduction/Introduction";
import HowWeWork from "./MainComponents/HowWeWork/HowWeWork";
import RecentHomes from "./MainComponents/RecentHomes/RecentHomes";
import WhyUs from "./MainComponents/WhyUs/WhyUs";

function Main(props) {
  return (
    <main>
      <Introduction />
      <HowWeWork />
      <RecentHomes />
      <WhyUs />
    </main>
  );
}

export default Main;
