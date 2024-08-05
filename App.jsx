import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./home/home.jsx";
import Features from "./features/features.jsx";
import "./App.css";
import "./input.css";
import "./output.css";
import logo from "./assets/nav/ai-image-logo.svg";
import { useState } from "react";
import Nav from "./generalComponent/nav.jsx";
function App() {
  const [styleSet, setStyleSet] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <Router>
        <div className="w-[100%]  flex justify-center">
          <div className="w-[100%] h-[70px] fixed z-50 flex justify-center top-0">
          {/* menu */}
          <nav className="lg:flex w-[70%] h-[100%] hidden items-center justify-between ">
           <Nav styleNav={'*:text-[1.2rem]'}/>
            <ul className="w-[50px] h-[100%] rounded-full flex justify-center items-center">
              <li
                className="cursor-pointer"
                onClick={() =>
                  openSearch ? setOpenSearch(false) : setOpenSearch(true)
                }
              >
                <span className="material-symbols-outlined text-white text-[2rem]">
                  search
                </span>
              </li>
            </ul>
          </nav>
          {/* menu */}
          {/* menu responsive */}
          <div className="w-[100%] h-[100%] lg:hidden block">
            <nav className="flex w-[100%] h-[100%] items-center justify-between absolute top-0">
              <ul className="h-[100%] pl-5 flex items-center gap-5 *:text-[1rem] *:capitalize *:text-white">
                <li>
                  <Link to="/">
                    <img src={logo} alt="al image" />
                  </Link>
                </li>
              </ul>
              <ul className="w-[150px] h-[100%] *:gap-1 *:flex *:justify-center *:items-center *:w-[50%] *:h-[100%] gap-2 *:capitalize *:text-white flex justify-center items-center">
                <li
                  className="text-[1.2rem] cursor-pointer"
                  onClick={() =>
                    styleSet ? setStyleSet(false) : setStyleSet(true)
                  }
                >
                  <span className="material-symbols-outlined text-[2rem]">
                    {styleSet ? "close" : "drag_handle"}
                  </span>
                  menu
                </li>
                <li
                  onClick={() =>
                    openSearch ? setOpenSearch(false) : setOpenSearch(true)
                  }
                >
                  <span className="material-symbols-outlined cursor-pointer text-[2rem]">
                    search
                  </span>
                </li>
              </ul>
              <ul
                className={`${
                  !styleSet
                    ? "gap-0 py-0 *:text-[0rem]"
                    : "gap-2 py-5 *:text-[1.5rem]"
                } transition-all duration-500 w-[100%] absolute top-[100%] flex  bg-[rgb(25,29,39)] flex-wrap  *:capitalize *:text-white *:w-[100%] *:text-center`}
              >
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/features">features</Link>
                </li>
                <li>
                  <Link to="/">process</Link>
                </li>
                <li>
                  <Link to="/">pricing</Link>
                </li>
                <li>
                  <Link to="/">blog</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* menu responsive */}
          {/* search */}
          <div
            className={`w-[100%] flex justify-center items-center h-[300px] bg-[rgb(25,29,39)] absolute transition-all duration-500 ${
              openSearch ? "top-[0px]" : "-top-[300px]"
            }`}
          >
            <div className="w-[95%] lg:w-[80%] border-b-4 flex justify-between items-center px-4">
              <input
                type="text"
                className="input w-[90%] h-[100%] text-[2rem] md:text-[5rem] text-white bg-[rgb(25,29,39)]"
                placeholder="Start searching"
              />
              <div>
                <span
                  onClick={() =>
                    openSearch ? setOpenSearch(false) : setOpenSearch(true)
                  }
                  className="material-symbols-outlined text-[3rem] cursor-pointer text-white"
                >
                  close
                </span>
              </div>
            </div>
            </div>
            {/* search */}
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
