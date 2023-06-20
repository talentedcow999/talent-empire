import Image from "next/image";
// Components
import Header from "../components/Header/Header";
import Woman from "../components/HomePage/Woman";
import OurServices from "../components/HomePage/OurServices";
import About from "../components/HomePage/About";
import OurAgency from "../components/HomePage/OurAgency";
import Stories from "../components/HomePage/Stories";
import Letstalk from "../components/HomePage/Letstalk";
import OurValues from "../components/HomePage/OurValues";
import Faq from "../components/HomePage/Faq";

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
        {/* About us */}
        <div className="container">
          <About />
        </div>
        {/* Our Success Stories */}
        <div className="container">
          <Stories />
        </div>
        {/* Our Agenecy */}
        <div className="w-full">
          <OurAgency />
        </div>
        {/* Lets Talk */}
        <div className="container">
          <Letstalk />
        </div>
        {/* Our Values */}
        <div className="container">
          <OurValues />
        </div>
        {/* Faq */}
        <div className="container">
          <Faq />
        </div>
      </div>
    </div>
  );
}
