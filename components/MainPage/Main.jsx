import React from "react";
import Introduction from "./MainComponents/Introduction/Introduction";
import HowWeWork from "./MainComponents/HowWeWork/HowWeWork";
import RecentHomes from "./MainComponents/RecentHomes/RecentHomes";

function Main(props) {
  return (
    <main>
      <Introduction />
      <HowWeWork />
      <RecentHomes />
    </main>
  );
}

export default Main;
