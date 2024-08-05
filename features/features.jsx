
import { useEffect, useState } from "react";
import Header from "./component/header";
import SFeatures1 from "./component/section1";
import SFeatures2 from "./component/section2";
import SFeatures3 from "../home/component/section3";
import SFeatures4 from "../home/component/section6";
import '../App.css'

function Features() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <main className="w-[100%] flex justify-center">
        <div className="w-[100%] smooth-scroll h-[1000vh]">
          <Header/>
          <SFeatures1/>
          <SFeatures2 scrollY={scrollY}/>
          <SFeatures3 scrollY={scrollY}/>
          <br />
          <br />
          <SFeatures4/>
        </div>
      </main>
    </>
  );
}

export default Features;
