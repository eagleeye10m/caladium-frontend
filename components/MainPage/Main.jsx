import React from "react";
import Introduction from "./MainComponents/Introduction/Introduction";
import HowWeWork from "./MainComponents/HowWeWork/HowWeWork";
import RecentHomes from "./MainComponents/RecentHomes/RecentHomes";
import WhyUs from "./MainComponents/WhyUs/WhyUs";
import Discover from "./MainComponents/Discover/Discover";
import Agents from "./MainComponents/Agents/Agents";
import Comments from "./MainComponents/Comments/Comments";
import ContactUs from "./MainComponents/ContactUs/ContactUs";

function Main(props) {
  return (
    <main>
      <Introduction />
      <HowWeWork />
      <RecentHomes />
      <WhyUs />
      <Discover />
      <Agents />
      <Comments />
      <ContactUs />
    </main>
  );
}

export default Main;
