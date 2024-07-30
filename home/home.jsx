import { useEffect, useState } from "react";
import Header from "./component/header.jsx";
import S1Home from "./component/section1.jsx";
import S2Home from "./component/section2.jsx";
import S3Home from "./component/section3.jsx";
import S4Home from "./component/section4.jsx";
import S5Home from "./component/section5.jsx";
import S6Home from "./component/section6.jsx";
import S7Home from "./component/section7.jsx";
import S8Home from "./component/section8.jsx";
import S9Home from "./component/section9.jsx";
import S10Home from "./component/section10.jsx";
import S11Home from "./component/section11.jsx";
import { month, year } from "../data.js";
function home() {
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
        <div className="w-[100%] h-[1000vh]">
          <Header scrollY={scrollY} />
          <S1Home scrollY={scrollY} />
          <S2Home />
          <S3Home scrollY={scrollY} />
          <S4Home />
          <S5Home />
          <S6Home />
          <S7Home />
          <S8Home month={month} year={year}/>
          <S9Home />
          <S10Home />
          <S11Home />
        </div>
      </main>
    </>
  );
}

export default home;
