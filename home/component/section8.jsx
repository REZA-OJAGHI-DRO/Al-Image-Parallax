import React, { useState } from "react";
import "../../App.css";
import Button from "../../generalComponent/button1";
import './section8.css'
function section8({ month, year }) {
  const [data, setData] = useState(month);
  return (
    <section className="w-[100%] flex justify-center min-h-screen">
      <div className="w-full 2xl:container">
        <div className="w-full flex justify-center mt-16">
          <Button
            value={"flexable & affordable"}
            styleButton={
              "text-[rgb(171,236,214)] border border-[rgb(171,236,214)]"
            }
          />
        </div>
        <div className="w-[100%] flex justify-center gap-2 text-center *:text-[1.2rem] *:md:text-[2.5rem] *:xl:text-[4rem] *:capitalize *:font-bold mb-8">
          <h4 className="text-white">Our</h4>
          <h4 className="PBorder">Pricing Plan</h4>
        </div>
        <div className="w-[100%] flex justify-center">
          <p className="text-zinc-400 text-[1rem] md:text-[1.5rem] text-center px-4">
            Choose the plan that works for you.
          </p>
        </div>
        <div className="w-[100%] flex justify-center">
          <div>
            <div className="flex justify-center mt-8">
              <div className="rounded-full border border-zinc-400 overflow-hidden">
                <button
                  className="px-4 md:px-6 py-1 bg-white text-black font-semibold focus:outline-none rounded-full transition-all duration-300 text-sm md:text-base"
                  onClick={(e) => {
                    setData(month);
                    e.target.classList.add("bg-white", "text-black");
                    e.target.nextElementSibling.classList.remove(
                      "bg-white",
                      "text-black"
                    );
                    e.target.nextElementSibling.classList.add(
                      "bg-transparent",
                      "text-zinc-400"
                    );
                  }}
                >
                  monthly
                </button>
                <button
                  className="px-4 md:px-6 py-1 bg-transparent text-zinc-400 font-semibold focus:outline-none rounded-full transition-all duration-300 text-sm md:text-base"
                  onClick={(e) => {
                    setData(year);
                    e.target.classList.add("bg-white", "text-black");
                    e.target.previousElementSibling.classList.remove(
                      "bg-white",
                      "text-black"
                    );
                    e.target.previousElementSibling.classList.add(
                      "bg-transparent",
                      "text-zinc-400"
                    );
                  }}
                >
                  yearly
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-10 mt-10 px-4 md:px-0">
          <div className="w-[100%]  lg:w-[50%] xl:w-[25%] flex flex-wrap mb-10 md:mb-0">
            <div className="w-full text-transparent flex justify-center items-center py-3 text-[1.2rem] gap-3">
                r
            </div>
            <div className="w-full p-5 md:p-10 bg-[rgb(30,33,38)] rounded-[20px]">
              <h4 className="w-full text-[1.4rem] md:text-[1.7rem] font-bold capitalize text-white">
                free plan
              </h4>
              <p className="flex items-end border-b border-zinc-400 gap-2 text-white">
                <span className="text-[3rem] md:text-[4rem] font-bold">${data[0].price}</span>
                <span className="text-[1.2rem] md:text-[1.5rem] mb-4 text-zinc-400">
                  /{data[0].text}
                </span>
              </p>
              <ul className="w-full flex flex-wrap mt-5 gap-5 *:w-full *:flex *:items-center *:gap-2 *:text-[1.2rem] md:*:text-[1.5rem] *:text-zinc-400">
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  300 Words / Month
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  User Analitics
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  2 Languages
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  Api Access
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  Free Support
                </li>
              </ul>
              <div className="w-full flex justify-center items-center py-5">
                <Button
                  value={"select plan"}
                  styleButton={
                    "text-zinc-400 text-[1.2rem] md:text-[1.5rem] px-5 border-2 border-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] xl:w-[25%] flex flex-wrap p-1 rounded-[50px] relative overflow-hidden mb-10 md:mb-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-green-400 to-yellow-400 animate-gradient mix-blend-overlay"></div>
            <div className="w-full flex justify-center items-center py-3 text-[1rem] md:text-[1.2rem] gap-3 relative z-10 text-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
              >
                <path
                  d="M14.0366 4.60751C13.1216 3.41917 12.1758 2.19084 11.5066 0.861673C11.2241 0.299173 10.6625 -0.0399938 10.0466 -0.00666045C9.45248 0.0275062 8.95165 0.406673 8.73915 0.983339C8.45415 1.76084 8.16665 3.18167 8.16665 4.60417C8.16665 6.44501 8.73998 7.68834 9.19998 8.68834C9.59082 9.53584 9.89915 10.205 9.82165 11.0608C9.74665 11.8767 9.03331 12.5067 8.13248 12.5C5.97831 12.4758 5.42998 9.74751 5.35081 7.46417C5.32415 6.71667 4.81998 6.08501 4.09665 5.89334C3.37331 5.70251 2.62165 6.00334 2.22915 6.64001C1.22248 8.27417 0.66748 10.0592 0.66748 11.6658C0.66748 16.2608 4.43665 19.9992 9.00582 19.9992C13.5983 19.9717 17.3341 16.2325 17.3341 11.68C17.3808 8.95001 15.6808 6.74251 14.0366 4.60751ZM8.99498 18.3333C5.34498 18.3333 2.33331 15.3425 2.33331 11.6667C2.33331 10.3833 2.81248 8.87001 3.68498 7.52251C3.83415 11.7758 5.40665 14.1358 8.11415 14.1667H8.15331C9.87082 14.1667 11.3291 12.8767 11.4816 11.2133C11.6 9.91334 11.15 8.93667 10.7141 7.99167C10.2808 7.05167 9.83331 6.08001 9.83331 4.60501C9.83331 3.64417 9.99665 2.61834 10.1858 1.93334C10.905 3.27167 11.825 4.46667 12.7166 5.62584C14.2525 7.62167 15.7033 9.50584 15.6675 11.6675C15.6675 15.3217 12.675 18.3125 8.99581 18.3342L8.99498 18.3333Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Popular Plan</p>
            </div>
            <div className="w-full bg-[rgb(23,26,31)] rounded-[50px] p-5 md:p-10 relative z-10">
              <h4 className="w-full text-[1.4rem] md:text-[1.7rem] font-bold capitalize text-white">
                free plan
              </h4>
              <p className="flex items-end border-b border-zinc-400 gap-2 text-white">
                <span className="text-[3rem] md:text-[4rem] font-bold">${data[1].price}</span>
                <span className="text-[1.2rem] md:text-[1.5rem] mb-4 text-zinc-400">
                  /{data[1].text}
                </span>
              </p>
              <ul className="w-full flex flex-wrap mt-5 gap-5 *:w-full *:flex *:items-center *:gap-2 *:text-[1.2rem] md:*:text-[1.5rem] *:text-zinc-400">
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  300 Words / Month
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  User Analitics
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  2 Languages
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  Api Access
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  Free Support
                </li>
              </ul>
              <div className="w-full flex justify-center items-center py-5">
                <Button
                  value={"select plan"}
                  styleButton={
                    "text-black text-[1.2rem] md:text-[1.5rem] bg-[rgb(171,236,214)] px-5 hover:bg-white hover:text-black  transition-all duration-300"
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-[100%]  lg:w-[50%] xl:w-[25%] flex flex-wrap">
          <div className="w-full text-transparent flex justify-center items-center py-3 text-[1.2rem] gap-3">
                r
            </div>
            <div className="w-full p-5 md:p-10 bg-[rgb(30,33,38)] rounded-[20px]">
              <h4 className="w-full text-[1.4rem] md:text-[1.7rem] font-bold capitalize text-white">
                free plan
              </h4>
              <p className="flex items-end border-b border-zinc-400 gap-2 text-white">
                <span className="text-[3rem] md:text-[4rem] font-bold">${data[2].price}</span>
                <span className="text-[1.2rem] md:text-[1.5rem] mb-4 text-zinc-400">
                  /{data[2].text}
                </span>
              </p>
              <ul className="w-full flex flex-wrap mt-5 gap-5 *:w-full *:flex *:items-center *:gap-2 *:text-[1.2rem] md:*:text-[1.5rem] *:text-zinc-400">
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  300 Words / Month
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  User Analitics
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  2 Languages
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  Api Access
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  Free Support
                </li>
              </ul>
              <div className="w-full flex justify-center items-center py-5">
                <Button
                  value={"select plan"}
                  styleButton={
                    "text-zinc-400 text-[1.2rem] md:text-[1.5rem] px-5 border-2 border-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section8;
