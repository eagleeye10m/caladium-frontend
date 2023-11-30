import Classes from "./Introduction.module.css";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import SocialMedia from "./SocialMedia";

function Introduction(props) {
  return (
    <main
      className={`relative w-full h-[90vh]  ${Classes.introduction} flex items-center justify-center`}
    >
      {/*you can access background image via Introduction.module.css file*/}
      <div className="container_self p-0 flex z-20">
        <RightSide />
        <LeftSide />
        <SocialMedia />
      </div>
    </main>
  );
}

export default Introduction;
