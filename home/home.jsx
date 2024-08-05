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
import Footer from "../generalComponent/footer.jsx";

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
        <div className="w-[100%] smooth-scroll">
          <Header scrollY={scrollY} />
          <S1Home scrollY={scrollY} />
          <S2Home />
          <S3Home scrollY={scrollY} />
          <S4Home />
          <S5Home />
          <S6Home />
          <S7Home />
          <S8Home month={month} year={year} />
          <S9Home />
          <S10Home />
          <S11Home />
          <Footer />
          <a href="#" className="w-[60px] h-[60px] bg-[rgb(38,38,38)] cursor-pointer hover:scale-125 transition-all duration-300 rounded-full fixed bottom-5 left-5 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.824"
              height="22.629"
              viewBox="0 0 19.824 22.629"
            >
              <path
                d="M17.217,9.263c-.663-.368-2.564-.14-4.848.566-4,2.731-7.369,6.756-7.6,13.218-.043.155-.437-.021-.515-.069a9.2,9.2,0,0,1-.606-7.388c.168-.28-.381-.624-.48-.525A11.283,11.283,0,0,0,1.6,17.091a9.84,9.84,0,0,0,17.2,9.571c3.058-5.481.219-16.4-1.574-17.4Z"
                transform="translate(-0.32 -9.089)"
                fill="#0ac994"
              ></path>
            </svg>
          </a>
        </div>
      </main>
    </>
  );
}

export default home;
