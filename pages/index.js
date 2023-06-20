import Image from "next/image";
// Components
import Header from "../components/Header/Header";
import Woman from "../components/HomePage/Woman";
import OurServices from "../components/HomePage/OurServices";

export default function Home() {
  return (
    // remove padding bottom from here 
    <div className="relative w-full pb-10">
      <div className="relative z-[0]">
        {/* woman face */}
        <div className="relative h-fit">
          <Woman />
          {/* Waving animation */}
          <div className="h-[200px] overflow-hidden absolute w-full z-20 -bottom-7">
            <div className="wave1"></div>
            <div className="wave2"></div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        {/* Our Services */}
        <div className="container">
          <OurServices />
        </div>
      </div>
    </div>
  );
}
