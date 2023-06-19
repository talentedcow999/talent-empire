import Image from "next/image";
// Components
import Header from "../components/Header/Header";
import Woman from "../components/HomePage/Woman";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Header Bar */}
      <div className="absolute z-50 w-full top-6">
        <Header />
      </div>
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
    </div>
  );
}
